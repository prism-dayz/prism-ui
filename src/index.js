const express = require('express')
const session = require('express-session')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer')
const pg = require('pg')
const request = require('request')
const ws = require('ws')
const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const { version } = require('../package.json')
const discord = require('discord.js')

// helpers functions
const authorized = () => {
  return (req, res, next) => {
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

const localStrategyHandler = async (username, password, done) => {
  //console.log('local_strategy', username, password)
  // given the username and password from a request, see if it's valid in a db for instance
  // there are three variations of ways to call done() based on db query
  // insert into users (uname, upassword) values ('rainbows@clouds.io', crypt('sugarcane', gen_salt('bf')))
  try {
    const query = 'select uid, uname, uborn from users where uname = $1 and upassword = crypt($2, upassword)'
    const params = [username, password]
    const result = await db.query(query, params)
    //console.log('localStrategyHandler', result)
    if (result.rows.length < 1) {
      done(null, false)
    } else {
      done(null, { ...result.rows[0], id: result.rows[0].uid })
    }
  } catch (error) {
    //console.log(error)
    done(null, false)
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
  done( null, user)
})

passport.use(new LocalStrategy(localStrategyConfig, localStrategyHandler))

// configure web server
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'sbyr395sriby9353597isr3rsyib5s7ryir7sb7isb9fh6sh8fgj568s65r3ybd5b68fgdjr',
  resave: true,
  saveUninitialized: true
}))
app.use(cors({ credentials: true, origin: `http://localhost:8080` }))
app.use(morgan('tiny'))
app.use(passport.initialize())
app.use(passport.session())
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
app.post('/api/v2/authenticate', db.connected(), passport.authenticate('local'), async (req, res) => {
  console.log('auth', req.user)
  const { user } = req
  const { uname } = user
  res.redirect(`/api/v2/users/${uname}`)
})

app.get('/api/v2/unauthenticate', (req, res) => {
  req.logout()
  res.status(200)
  res.end()
})

app.get('/api/v2/users/:username', db.connected(), authorized(), (req, res) => {
  const { params } = req
  const { username } = params
  simpleQuery(req, res, "select uname, uborn, convert_from(decrypt(nakey::bytea, 'secret-key', 'bf'), 'utf-8') as nakey from users where uname = $1", [username])
})

app.put('/api/v2/users/:username', db.connected(), authorized(), upload.none(), (req, res) => {
  const { params, body } = req
  const { username } = params
  const { nitradoApiKey } = body
  simpleQuery(req, res, `update users set nakey = encrypt($1, 'secret-key', 'bf') where uname = $2`, [nitradoApiKey, username])
})

app.get('/api/v2/me', db.connected(), authorized(), (req, res) => {
  const { user } = req
  res.send([{
    uname: user.uname,
    uborn: user.uborn
  }])
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
        const query = `insert into users (uname, uemail, upassword) values ($1, $2, crypt($3, gen_salt('bf'))) returning uname, uborn`
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
