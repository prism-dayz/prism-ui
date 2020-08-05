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
const utils = require('./utils')

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

const simpleQuery = async (req, res, query = '', params = []) => {
  try {
    const result = await db.query(query, params)
    res.send(result.rows)
    res.end()
  } catch (error) {
    console.log(error)
    res.status(500)
    res.send(error)
    res.end()
  }
}

try {
  db.connect()
} catch (error) {
  console.log('could not connect to db', error)
}

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
  var token = utils.randomString(64)
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
  const query = 'select uid, uname, uborn from users where uid = $1'
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
    simpleQuery(req, res, "select uname, uborn, convert_from(decrypt(nakey::bytea, 'secret-key', 'bf'), 'utf-8') as nakey, convert_from(decrypt(dakey::bytea, 'secret-key', 'bf'), 'utf-8') as dakey from users where uname = $1", [username])
  } else {
    simpleQuery(req, res, "select uname, uborn from users where uid = $1", [user.uid])
  }
})

app.put('/api/v2/users/:username', db.connected(), authorized(), upload.none(), (req, res) => {
  const { params, body, user } = req
  const { nitradoApiKey, discordApiKey } = body
  simpleQuery(req, res, `update users set nakey = encrypt($1, 'secret-key', 'bf'), dakey = encrypt($3, 'secret-key', 'bf') where uname = $2`, [nitradoApiKey, user.uname, discordApiKey])
})

app.put('/api/v2/servers/:sid/live', db.connected(), authorized(), (req, res) => {
  // http://localhost:8001/api/v2/servers/${sid}/live
  const { sid } = params
  try {
    const
  } catch (e) {
    console.log(error)
    res.status(500)
    res.send(error)
    res.end()
  }
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
    res.status(500)
    res.send(error)
    res.end()
  }
})

// web app serverp
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
