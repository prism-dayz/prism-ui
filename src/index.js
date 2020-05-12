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
        console.log('not connected to db', this)
        res.status(500)
        res.end()
      }
    }
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
  console.log('local_strategy', username, password)
  // given the username and password from a request, see if it's valid in a db for instance
  // there are three variations of ways to call done() based on db query
  // insert into users (uname, upassword) values ('rainbows@clouds.io', crypt('sugarcane', gen_salt('bf')))
  try {
    const query = 'select uid, uname, uborn from users where uname = $1 and upassword = crypt($2, upassword)'
    const params = [username, password]
    const result = await db.query(query, params)
    console.log('localStrategyHandler', result)
    if (result.rows.length < 1) {
      done(null, false)
    } else {
      done(null, { ...result.rows[0], id: result.rows[0].uid })
    }
  } catch (error) {
    console.log(error)
    done(null, false)
  }
}

passport.serializeUser((user, done) => {
  // handle how to return the id of the user if given the user
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  // find user and user id in database, and pass it second param
  const query = 'select uid, uname, uborn from users where uid = $1'
  const params = [id]
  const result = await db.query(query, params)
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
app.use(cors())
app.use(morgan('tiny'))
app.use(passport.initialize())
app.use(passport.session())
app.use((req, res, next) => {
  res.set('X-Archaeon-API-Version', `v${version}`)
  next()
})

const localPassportAuthenticationDirective = {
  successRedirect: '/api/v2/authorized',
  failureRedirect: '/api/v2/unauthorized'
}

// web server routes
app.get('/', async (req, res) => {
  res.send({
    message: 'hi',
    version
  })
  res.end()
})

app.post('/api/v2/authenticate', db.connected(), passport.authenticate('local', localPassportAuthenticationDirective))

app.get('/api/v2/authorized', authorized(), db.connected(), async (req, res) => {
  res.send('authorized')
})

app.get('/api/v2/unauthorized', async (req, res) => {
  res.send('unauthorized')
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
    console.log(error)
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
    console.log(error)
    res.status(500)
    res.send(error)
    res.end()
  }
})

// web app serverp
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
