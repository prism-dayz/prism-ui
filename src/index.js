const express = require('express')
const session = require('express-session')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer')
const pg = require('pg')
const request = require('request')
const ws = require('ws')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const { Strategy: LocalStrategy } = require('passport-local')
const { Strategy: RememberMeStrategy } = require('passport-remember-me')
const PostgreSqlStore = require('connect-pg-simple')(session)
const { version } = require('../package.json')
const discord = require('discord.js')
const {
  randomString,
  doNitradoFileServerApiProper,
  doNitradoFileServerApi,
  getWsConnection,
  getGameserver,
  doNitradoFileServer,
  doNitradoApi
} = require('./utils')
const stream = require('stream')

// helpers functions
const authorized = () => {
  return (req, res, next) => {
    console.log(req.body, req.isAuthenticated())
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect('/api/v2/unauthorized')
    }
  }
}

// instantiate web server
const storage = multer.memoryStorage()
const upload = multer({ storage, preservePath: true })
const app = express()
const port = process.env.API_PORT || 8001

// connect to db
const { Client } = pg
const dbClient = new Client({
  host: 'localhost',
  port: 5432,
  user: 'methanogen',
  password: 'methane',
  database: 'archaeon'
})

const db = {
  $connected: false,
  query (query, params) {
    console.log(query, params)
    return dbClient.query(query, params)
  },
  async connect () {
    await dbClient.connect()
    this.$connected = true
  },
  connected () {
    return (req, res, next) => {
      if (this.$connected) {
        next()
      } else {
        //console.log('not connected to db', this)
        res.status(500)
        res.end()
      }
    }
  }
}

const simpleQuery = async (req, res, query = '', params = [], cb = () => {}, compress = false) => {
  try {
    const result = await db.query(query, params)
    if (compress === true) {
      res.send([result.rows.reduce((a,c) => {
        const { servers } = { servers: [], ...a }
        const { sid, sname, sactive, sborn, ...rest } = c
        console.log(sid, sname, sactive, sborn)
        return {
          ...rest,
          servers: [
            ...servers,
            { sid, sname, sactive, sborn }
          ]
        }
      }, [])])
    } else {
      res.send(result.rows)
    }
    cb(null)
    res.end()
  } catch (error) {
    console.log(error)
    res.status(500)
    res.send(error)
    res.end()
    cb(e)
  }
}

try {
  db.connect()
} catch (error) {
  console.log('could not connect to db', error)
}

const killFeedTimeouts = []

// configure passport
const localStrategyConfig = {
  usernameField: 'username',
  passwordField: 'password'
}

const localStrategyHandler = async (username, password, callback) => {
  //console.log('local_strategy', username, password)
  // given the username and password from a request, see if it's valid in a db for instance
  // there are three variations of ways to call callback() based on db query
  // insert into users (uname, upassword) values ('rainbows@clouds.io', crypt('sugarcane', gen_salt('bf')))
  try {
    const query = 'select uid, uname, uborn from users where uname = $1 and upassword = crypt($2, upassword)'
    const params = [username, password]
    const result = await db.query(query, params)
    //console.log('localStrategyHandler', result)
    if (result.rows.length < 1) {
      callback(null, false)
    } else {
      callback(null, { ...result.rows[0], id: result.rows[0].uid })
    }
  } catch (error) {
    //console.log(error)
    callback(null, false)
  }
}

const rememberMeStrategyHandler = async (token, callback) => {
  try {
    const query = `select uid from tokens where ttoken = crypt($1, ttoken)`
    const parameters = [token]
    const result = await db.query(query, parameters)
    if (result.rows.length < 1) {
      callback(null, false)
    } else {
      const uid = result.rows[0].uid
      const q = `delete from tokens where ttoken = crypt($1, ttoken)`
      const p = [token]
      const r = await db.query(q, p)
      const q1 = `select uname, uborn from users where uid = $1`
      const p1 = [uid]
      const r1 = await db.query(q1, p1)
      if (r1.rows.length < 1) {
        callback(null, false)
      } else {
        callback(null, { ...r1.rows[0], id: uid })
      }
    }
  } catch (e) {
    callback(e)
  }
}

const issueTokenHandler = async (user, callback) => {
  var token = randomString(64)
  const { id } = user
  try {
    // has to be insert
    const query = `insert into tokens (ttoken, uid) values (encrypt($1, 'secret-key', 'bf'), $2)`
    const parameters = [token, id]
    await db.query(query, parameters)
    callback(null, token)
  } catch (e) {
    callback(e)
  }
}

passport.serializeUser((user, done) => {
  // handle how to return the id of the user if given the user
  //console.log('serialize', user)
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  //console.log('deserialize', id)
  // find user and user id in database, and pass it second param
  const query = `
    select uid, uname, uborn,
      convert_from(decrypt(nakey::bytea, 'secret-key', 'bf'), 'utf-8') as nakey,
      convert_from(decrypt(dakey::bytea, 'secret-key', 'bf'), 'utf-8') as dakey, 
      uemail
    from users where uid = $1
    `
  const params = [id]
  const result = await db.query(query, params)
  //console.log('result deserialize', result.rows)
  const user = { ...result.rows[0], id: result.rows[0].uid }
  done(null, user)
})

// configure passport strategies
passport.use(new LocalStrategy(localStrategyConfig, localStrategyHandler))
passport.use(new RememberMeStrategy(rememberMeStrategyHandler, issueTokenHandler))

// configure web server
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  store: new PostgreSqlStore({
    conString: `postgresql://methanogen:methane@localhost:5432/archaeon`
  }),
  secret: 'sbyr395sriby9353597isr3rsyib5s7ryir7sb7isb9fh6sh8fgj568s65r3ybd5b68fgdjr',
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  resave: true,
  saveUninitialized: true
}))
app.use(cors({ credentials: true, origin: `http://localhost:8080` }))
app.use(morgan('tiny'))
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.authenticate('remember-me'))
app.use((req, res, next) => {
  res.set('X-Archaeon-API-Version', `v${version}`)
  next()
})

// web server routes
app.get('/', async (req, res) => {
  res.send({
    message: 'hi',
    version
  })
  res.end()
})

// passport will respond with 401 if auth fails
app.post('/api/v2/authenticate', db.connected(), passport.authenticate('local'), async (req, res, next) => {
  const { body } = req
  const { remember_me } = body
  console.log('remember_me', remember_me)
  if (remember_me === true) {
    const { user } = req
    issueTokenHandler(user, (error, token) => {
      if (error) {
        return next(error)
      } {
        res.cookie('remember_me', token, { path: '/', httpOnly: true, maxAge: 604800000 })
        return next()
      }
    })
  } else {
    console.log('not creating a cookie')
    return next()
  }
}, async (req, res) => {
  console.log('auth', req.user)
  const { user } = req
  const { uname } = user
  res.redirect(`/api/v2/users/${uname}`)
})

app.get('/api/v2/unauthenticate', (req, res) => {
  res.clearCookie('remember_me')
  req.logout()
  res.status(200)
  res.end()
})

app.get('/api/v2/users/:username', db.connected(), authorized(), (req, res) => {
  const { params, user } = req
  const { username } = params
  console.log('user', user, username)
  if (user.uname === username) {
    simpleQuery(
      req, res, 
      // `select a.uname, a.uborn,
      //   convert_from(decrypt(a.nakey::bytea, 'secret-key', 'bf'), 'utf-8') as nakey,
      //   convert_from(decrypt(a.dakey::bytea, 'secret-key', 'bf'), 'utf-8') as dakey
      //   from users a where a.uname = $1`,
      `select a.uname, a.uborn,
        convert_from(decrypt(a.nakey::bytea, 'secret-key', 'bf'), 'utf-8') as nakey,
        convert_from(decrypt(a.dakey::bytea, 'secret-key', 'bf'), 'utf-8') as dakey,
        b.* from users a, servers b where a.uname = $1 and b.uid = a.uid`,
      [username],
      () => {},
      true // compress
    )
  } else {
    simpleQuery(req, res, "select uname, uborn from users where uname = $1", [username])
  }
})

app.put('/api/v2/users/:username', db.connected(), authorized(), upload.none(), (req, res) => {
  const { params, body, user } = req
  const { nitradoApiKey, discordApiKey } = body
  simpleQuery(req, res, `update users set nakey = encrypt($1, 'secret-key', 'bf'), dakey = encrypt($3, 'secret-key', 'bf') where uname = $2`, [nitradoApiKey, user.uname, discordApiKey])
})

app.get('/api/v2/servers', db.connected(), authorized(), (req, res) => {
  simpleQuery(req, res, `select sid, sname, sborn, sactive from servers`)
})

app.post('/api/v2/servers', db.connected(), authorized(), upload.none(), async (req, res) => {
  try {
    const { body, user } = req
    const { name, nitradoServiceId } = body
    await new Promise(async (resolve, reject) => {
      const query = `select sid, sname, sborn, sactive, uid from servers where sid = $1`
      const parameters = [nitradoServiceId]
      const result = await db.query(query, parameters)
      if (result.rows.length === 0) {
        resolve(result)
      } else {
        reject(result)
      }
    })
    // will error if exists, else continue and insert
    const result = await new Promise(async (resolve, reject) => {
      try {
        const query = `
          insert into servers (sname, sid, uid)
          values ($1, $2, $3)
          returning sname, sid, sborn, sactive, uid
        `
        console.log('insert into servers', name, nitradoServiceId, user.uid)
        const parameters = [name, nitradoServiceId, user.uid]
        const result = await db.query(query, parameters)
        console.log('result', result.rows.length)
        if (result.rows.length > 0) {
          resolve(result)
        } else {
          reject(result)
        }
      } catch (error) {
        reject(error)
      }
    })
    res.status(201)
    res.send(result.rows)
    res.end()
  } catch (e) {
    console.log('error servers post', e)
    res.status(409)
    res.send(e)
    res.end()
  }
})

const handleStatsDownload = (url) => {
  return new Promise((resolve, reject) => {
    const method = 'GET'
    const path = url
    console.log('doing ', method, path)
    doNitradoFileServer(method, path, (response) => {
      console.log('resolved', path)
      const serverLog = response
      resolve(serverLog)
    }, (error) => {
      console.log('did not resolve')
      reject(error)
    })
  })
}

const getServerLog = (sid, user, file, gameserver) => {
  return new Promise(async (resolve, reject) => {
    const authBearer = user.nakey
    const method = 'GET'
    const path = `/services/${sid}/gameservers/file_server/download?file=${file}`
    console.log('doing ', method, path)
    doNitradoApi(method, path, async (response) => {
      console.log('resolved', path)
      const serverLog = await handleStatsDownload(JSON.parse(response.body).data.token.url)
      resolve(serverLog)
    }, (error) => {
      console.log('did not resolve')
      reject(error)
    }, authBearer)
  })
}

const updateServerLogStore = async (sid, user, ftpPath, size) => {
  const { uid } = user
  try {
    const query = `update servers set sloglastsize = $1, sloglastftppath = $2 where sid = $3 and uid = $4`
    const params = [parseInt(size), ftpPath, parseInt(sid), uid]
    const result = await db.query(query, params)
  } catch (error) {
    console.log(error)
    destroyLiveKillFeed(sid)
  }
}

const parseServerLog = async (sid, user, serverLog, ftpPath, recentSize) => {
  console.log('got new server log content')
  // update the database with the stats
  const lines = serverLog.body.split('\n')
    .filter(line => line.length > 0)
    .map(line => {
      let match = null
      let lineTypes = [
        'is connected',
        'has been disconnected',
        'hit by Player',
        'hit by Infected',
        'hit by FallDamage',
        'killed by Player',
        '##### PlayerList',
        '\>\\)$'
      ]

      match = line.match(/[0-9]*:[0-9]*:[0-9]*/g)
      const time = match ? match[0] : 'Unknown'

      const type = lineTypes.filter(lineType => {
        const regex = new RegExp(`${lineType}`)
        return line.match(regex)
      }).reduce((a,b) => b, ``)
      // console.log(type)

      match = line.match(/\|\sPlayer\s\"[a0-z9\s\/]*\"/g)
      const player = match ? match[0].split('"')[1] : 'ParseWarning'
      match = line.match(/by\sPlayer\s\"[a0-z9\s\/]*\"/g)
      const byPlayer = type === 'hit by Infected' ? 'Infected' : (match ? match[0].split('"')[1] : 'ParseWarning')
      match = null

      match = line.match(/pos=\<[0-9]*.[0-9]*, [0-9]*.[0-9]*/g)
      const coords = match ? match.map(c => {
        return {
          x: parseFloat(c.substring(5,11)),
          y: parseFloat(c.substring(13,19))
        }
      }).reduce((a,b) => b, ``) : { x: null, y: null }
      match = null

      match = line.match(/for\s[0-9]*\sdamage/g)
      const forDamage = match ? parseFloat(match[0].split(' ')[1]) : 0
      match = null

      match = line.match(/from\s[0-9]*\.[0-9]*\smeters/g)
      const fromMeters = match ? parseFloat(match[0].split(' ')[1]) : 0
      match = null

      return {
        line,
        fromMeters,
        time,
        player,
        byPlayer,
        type,
        forDamage,
        coords
      }
    })
    .filter(line => line.time !== 'Unknown')
    .filter(line => line.type.length > 0)
    .filter(line => line.player !== 'Unknown/Dead Entity')
    .filter(line => line.byPlayer !== 'Unknown/Dead Entity')
  
  lines.filter(line => line.type === `killed by Player`)
    .forEach(async line => {
      try {
        const pid = line.match(/\|\sPlayer\s\"[a0-z9\s\/]*\"\s\(id=[A-Z0-9]*/g)[0].split('id=')[1]
        const query = `update alltimestats set akills = akills + 1, akstreak = akstreak + 1 where pid = $1 returning *`
        const parameters = [pid]
        const result = await db.query(query, parameters)
        if (!result.rows) {
          // new player
          // create table players (
          //   pid varchar(128) primary key not null,
          //   pname varchar(64) not null,
          //   sid integer not null,
          //   foreign key (sid) references servers(sid)
          // );
          // const query = `insert into players (pid, pname, sid) values ()`
          // const parameters = [pid]
          // const result = await db.query(query, parameters)
        } else {
          // good to go?
        }
      } catch (e) {
        console.log('could not update or create player', e, line)
      }
    })

  // do this again in 5 minutes (or try and get last timestamp and do it 5 minutes from then)
  const t = setTimeout(() => {
    initLiveKillFeed(sid, user)
  }, 60000 * 5)
  setTimeout(() => { console.log('1min passed since set timeout for next killfeed') }, 60000)
  setTimeout(() => { console.log('2min passed since set timeout for next killfeed') }, 60000 * 2)
  setTimeout(() => { console.log('3min passed since set timeout for next killfeed') }, 60000 * 3)
  setTimeout(() => { console.log('4min passed since set timeout for next killfeed') }, 60000 * 4)
  setTimeout(() => { console.log('5min passed since set timeout for next killfeed') }, 60000 * 5)
  killFeedTimeouts.push({ i: t, sid })
  // store the new log size
  updateServerLogStore(sid, user, ftpPath, recentSize)
}

const initLiveKillFeed = async (sid, user) => {
  // go get server logs info from gameserver service
  const authBearer = user.nakey
  const gameserver = await getGameserver({ id: sid }, authBearer)
  const { log_files } = gameserver.game_specific
  // if there aren't any logs
  if (log_files.length < 0) {
    // check back in two minutes
    console.log('try back in two minutes')
    const i = setTimeout(() => {
      console.log('trying back')
      initLiveKillFeed(sid, user)
    }, 60000 * 2)
    killFeedTimeouts.push({ i, sid })
    return
  }
  // if there's a server log file
  const serverLogPath = log_files[0].replace('dayzxb/','')
  // then fetch that server log's most recent size
  const lastServerLogSizeFromREST = await new Promise(async (resolve, reject) => {
    const method = `GET`
    const path = `/services/${sid}/gameservers/file_server/size?path=${gameserver.game_specific.path}${serverLogPath}`
    doNitradoApi(method, path, async (response) => {
      console.log('resolved', path)
      const serverLogSize = JSON.parse(response.body).data.size
      resolve(serverLogSize)
    }, (error) => {
      console.log('did not resolve')
      resolve(0)
    }, authBearer)
  })
  // go get last server log's size from db
  const lastServerLogFromStore = await new Promise(async (resolve, reject) => {
    const query = `select * from servers where sid = $1`
    const parameters = [sid]
    const result = await db.query(query, parameters)
    if (result.rows.length > 0) {
      resolve(result.rows)
    } else {
      resolve([])
    }
  })
  const lastServerLogSizeFromStore = lastServerLogFromStore.reduce((a,c) => c.sloglastsize, 0)
  // calculate offset
  const length = lastServerLogSizeFromREST - lastServerLogSizeFromStore
  console.log('>>>>>>> length', lastServerLogSizeFromREST, lastServerLogSizeFromStore, length)
  // if offset is zero there's no change
  if (length === 0) {
    // there are logs, but no change in logs
    // do this again in two minutes
    console.log('try back in two minutes')
    const i = setTimeout(() => {
      console.log('trying back')
      initLiveKillFeed(sid, user)
    }, 60000 * 2)
    killFeedTimeouts.push({ i, sid })
    return
  }
  // length is greater than zero so go get it
  const maxSafeSeek = 64512
  if (length > maxSafeSeek) {
    // use file download
    const serverLog = await getServerLog(sid, user, `${gameserver.game_specific.path}${serverLogPath}`, gameserver)
    // parse it
    console.log('got server log', `${gameserver.game_specific.path}${serverLogPath}`)
    parseServerLog(sid, user, serverLog, `${gameserver.game_specific.path}${serverLogPath}`, lastServerLogSizeFromREST)
  } else {
    // if there's a safe sized seek
    // fetch the single-use url to the seek using length (i.e., the seek is the subset of the file, in our case the delta which is the new stuff)
    const singleUseUrlResponse = await new Promise((resolve, reject) => {
      const method = 'GET'
      const search = `?file=${gameserver.game_specific.path}${serverLogPath}&offset=${lastServerLogSizeFromStore}&length=${length}`
      const path = `/services/${sid}/gameservers/file_server/seek${search}`
      doNitradoApi(method, path, async (response) => {
        resolve(JSON.parse(response.body))
      }, (error) => {
        console.log(`could not acquire single-use fileserver url for requested seek/file '${search}'`)
        resolve({ data: { url: null, token: null } })
      }, authBearer)
    })
    const { data } = singleUseUrlResponse
    console.log('singleUseUrlResponse', singleUseUrlResponse)
    const { token: _token } = data
    const { url: serverLogUrl, token } = _token
    console.log('url', serverLogUrl)
    // if serverLogUrl && token
    // fetch seek of file
    if (!serverLogUrl || !token) {
      // this is essentially an error, try again in two minutes
      console.log('no serverLogUrl or token', serverLogUrl, token)
      console.log('try back in two minutes')
      const i = setTimeout(() => {
        console.log('trying back')
        initLiveKillFeed(sid, user)
      }, 60000 * 2)
      killFeedTimeouts.push({ i, sid })
      return
    }
    // get server log
    const serverLog = await new Promise((resolve, reject) => {
      const method = 'GET'
      doNitradoFileServerApiProper(method, serverLogUrl, token, resolve, reject)
    })
    // parse it
    console.log('got server log', serverLogUrl)
    parseServerLog(sid, user, serverLog, `${gameserver.game_specific.path}${serverLogPath}`, lastServerLogSizeFromREST)
  }
  // nothing else to do, done
}

const destroyLiveKillFeed = (sid) => {
  const interval = killFeedTimeouts.filter((k) => k.sid === sid)
  interval.forEach(i => clearInterval(i))
}

app.put('/api/v2/servers/:sid/live', db.connected(), authorized(), (req, res) => {
  const { params, user } = req
  const { sid } = params
  const { uid } = user
  simpleQuery(req, res, `update servers set sactive = 1 where sid = $1 and uid = $2`, [parseInt(sid), uid], () => {
    initLiveKillFeed(sid, user)
  })
})

app.delete('/api/v2/servers/:sid/live', db.connected(), authorized(), (req, res) => {
  const { params, user } = req
  const { sid } = params
  const { uid } = user
  simpleQuery(req, res, `update servers set sactive = 0 where sid = $1 and uid = $2`, [parseInt(sid), uid], () => {
    destroyLiveKillFeed(sid)
  })
})

app.get('/api/v2/me', db.connected(), authorized(), (req, res) => {
  const { user } = req
  const { uname } = user
  res.redirect(`/api/v2/users/${uname}`)
})

app.get('/api/v2/unauthorized', async (req, res) => {
  res.status(401)
  res.send('unauthorized')
  res.end()
})

app.get('/api/v2/ping', async (req, res) => {
  res.send('pong')
})

app.get('/api/v2/traffic', db.connected(), async (req, res) => {
  try {
    const traffic = await db.query('select * from traffic')
    res.send(traffic.rows)
    res.end()
  } catch (error) {
    //console.log(error)
    res.status(500)
    res.send(error)
    res.end()
  }
})

app.post('/api/v2/traffic', db.connected(), async (req, res) => {
  try {
    const { hostname, ip } = req
    const query = 'insert into traffic (thostname, tip) values ($1, $2)'
    const parameters = [hostname, ip]
    await db.query(query, parameters)
    res.status(201)
    res.end()
  } catch (error) {
    //console.log(error)
    res.status(500)
    res.send(error)
    res.end()
  }
})

app.post('/api/v2/register', db.connected(), upload.none(), async (req, res) => {
  try {
    const { body } = req
    const { email, username, password } = body
    // first check see if already exists
    await new Promise(async (resolve, reject) => {
      const query = `select uname from users where uname = $1`
      const parameters = [username]
      const result = await db.query(query, parameters)
      if (result.rows.length === 0) {
        resolve(result)
      } else {
        reject(result)
      }
    })
    // will error if exists, else continue and insert
    const result = await new Promise(async (resolve, reject) => {
      try {
        const query = `
          insert into users (uname, uemail, upassword, nakey, dakey)
          values ($1, $2, crypt($3, gen_salt('bf')), encrypt(bytea '', 'secret-key', 'bf'), encrypt(bytea '', 'secret-key', 'bf'))
          returning uname, uborn
        `
        console.log('insert into user', username, email, password)
        const parameters = [username, email, password]
        const result = await db.query(query, parameters)
        console.log('result', result.rows.length)
        if (result.rows.length > 0) {
          resolve(result)
        } else {
          reject(result)
        }
      } catch (error) {
        reject(error)
      }
    })
    res.status(201)
    res.send(result.rows)
    res.end()
  } catch (error) {
    console.log(error)
    res.status(401)
    res.send(error)
    res.end()
  }
})

// web app serverp
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
