const https = require('https')
const fs = require('fs')
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
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const {
  randomString,
  doNitradoFileServerApiProper,
  doNitradoFileServerApi,
  getWsConnection,
  getGameserver,
  doNitradoFileServer,
  doNitradoApi
} = require('./utils')
const { Client: DiscordClient, MessageEmbed, MessageAttachment, RichEmbed } = require('discord.js')
const { createCanvas, loadImage } = require('canvas')
const FormData = require('form-data')

// const {
//   ORIGIN_HOST_NAME,
//   ORIGIN_HOST_PORT
// } = process.env

// const ORIGIN_HOST = `${ORIGIN_HOST_NAME}${ORIGIN_HOST_PORT}`

const spyDb = './src/spy.hash'
const spyDbBuffer = fs.readFileSync(spyDb)
const spyHash = JSON.parse(spyDbBuffer.toString())

const whitelistDb = './src/whitelist.hash'
const whitelistDbBuffer = fs.readFileSync(whitelistDb)
const whitelistHash = JSON.parse(whitelistDbBuffer.toString())

const safezoneDb = './src/safezone.hash'
const safezoneDbBuffer = fs.readFileSync(safezoneDb)
const safezoneHash = JSON.parse(safezoneDbBuffer.toString())
const THREE_HOURS = 3 * 3.6e+6

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// ssl
// const sslOptions = {
//   key: fs.readFileSync('/Users/bgoodson/Desktop/benches/2020-06-08/archaeon/archaeon-ssl.key'),
//   cert: fs.readFileSync('/Users/bgoodson/Desktop/benches/2020-06-08/archaeon/archaeon-ssl.pem')
// }

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

const getEmailText = (username, email, password, key) => {
  return `Hello, ${username}.

Here is your account information:

  Username: ${username}
  E-mail: ${email}
  Password: ${password}

Use the following link to confirm your e-mail, and begin using the platform.

  https://localhost:8080/confirm-email/${key}

Good luck.

You're recieving this e-mail because somebody signed up for archaeon, a platform for dayz nitrado public slot server modding.`
}

// instantiate mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'archaeonplatform@gmail.com',
    pass: '!Kaolaubuntu32'
  }
})

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
    // console.log(query, params)
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

const simpleQuery = async (req, res, query = '', params = [], cb = () => {}, compress = false, dilute = false) => {
  try {
    const result = await db.query(query, params)
    if (compress === true) {
      const results = result.rows.reduce((a,c) => {
        const { servers } = { servers: [], ...a }
        const { sid, sname, sactive, sborn, schannel, sportlist, ...rest } = c
        console.log('simpleQuery', sid, sname, sactive, sborn, schannel, sportlist)
        return {
          ...rest,
          servers: [
            ...servers,
            { sid, sname, sactive, sborn, schannel, sportlist }
          ]
        }
      }, [])
      if (result.rows.length > 0) {
        const response = [results]
        res.send(response)
      } else {
        cb()
      }
    } else {
      res.send(result.rows)
    }
    if (dilute === false) {
      cb(null)
      res.end()
    }
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

// ------------------------------------------------------------------------------------------------------------------------------------------------------

const playerMapsHash = {}
// let mapImage, playerImage, mapCanvas, mapCanvasCtx
const initCanvas = async (serverId) => {
  playerMapsHash[serverId] = {}
  playerMapsHash[serverId].mapCanvas = createCanvas(767.5, 767.5)
  playerMapsHash[serverId].mapCanvasCtx = playerMapsHash[serverId].mapCanvas.getContext('2d')
  playerMapsHash[serverId].mapImage = await loadImage('./src/assets/dayz-map-small.jpeg')
  playerMapsHash[serverId].playerImage = await loadImage('./src/assets/player-small.png')
  return playerMapsHash[serverId]
}
// initCanvas()

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

const inSafeZone = ({a, b, x, y, r}) => {
  let dist_points = (a - x) * (a - x) + (b - y) * (b - y)
  r *= r
  if (dist_points < r) {
      return true
  }
  return false
}

const post = (path, form) => {
  return new Promise((resolve, reject) => {
    const callback = (response) => {
      let data = ``
      response.on('data', (chunk) => {
        data = `${data}${chunk}`
      })
      response.on('end', () => {
        resolve(data)
      })
    }
    const options = {
      method: 'POST',
      hostname: 'api.nitrado.net',
      path,
      headers: {
        Authorization: 'Bearer 6K-6uaKY9rKQ42Q6gF7Qk5UGbAKmnO_kEU7wFUyP7SDKTqsJES4FR3T4R_tx_4YL_VjED-xLRfdPlzRDramitbqzcUlMudVT6a4e',
        ...form.getHeaders(),
        "Content-Length": form.getLengthSync(),
      }
    }
    const request = https.request(options, callback)
    form.pipe(request)
    request.on('error', (error) => {
      console.error(error)
      reject(error)
    })
    request.end()
  })
}

const postBans = (sid, form) => {
  return post(`/services/${sid}/gameservers/settings`, form)
}

const bansDb = './src/bans.hash'
const bansDbBuffer = fs.readFileSync(bansDb)
const bansHash = JSON.parse(bansDbBuffer.toString())

const leosDb = './src/leos.hash'
const leosDbBuffer = fs.readFileSync(leosDb)
const leosHash = JSON.parse(leosDbBuffer.toString())

const tradersDb = './src/traders.hash'
const tradersDbBuffer = fs.readFileSync(tradersDb)
const tradersHash = JSON.parse(tradersDbBuffer.toString())

const hashes = {
  leosHash, tradersHash
}

const saveLeos = () => {
  console.log(leosHash)
  fs.writeFileSync(leosDb, JSON.stringify(leosHash))
}

const saveTraders = () => {
  console.log(tradersHash)
  fs.writeFileSync(tradersDb, JSON.stringify(tradersHash))
}

const doBans = async () => {
  const sid = `9315411`
  const value = Object.keys(bansHash).join('\r\n')
  // console.log(bansHash)
  fs.writeFileSync(bansDb, JSON.stringify(bansHash))
  const form = new FormData()
  form.append('category', 'general')
  form.append('key', 'bans')
  form.append('value', value)
  await postBans(sid, form)
}

const _experimentalChannel = {
  channel: null
}
const getExperimentalChannel = () => {
  return _experimentalChannel.channel
}
const setExperimentalChannel = (channel) => {
  return _experimentalChannel.channel = channel
}

// return false if authorized
const checkAuthorizedSafezone = (byWho) => {
  return !(Object.keys(hashes)
    .filter(hashKey => hashes[hashKey][byWho])
    .length > 0)
}

const checkAuthorizedLEO = (byWho) => {
  const _hashes = { leosHash }
  return !(Object.keys(_hashes)
    .filter(hashKey => _hashes[hashKey][byWho])
    .length > 0)
}

const parseServerLog = async (sid, user, serverLog, ftpPath, /** actually newest size */ recentSize, startbytes = 0, shouldKillfeed = false, schannel, sportlist) => {

  console.log('got new server log content', schannel)

  const newLog = serverLog.body.substring(startbytes, recentSize)

  // update the database with the stats
  let lineObjects = newLog.split('\n')

  const v2Feed = lineObjects.map((objectLine) => {
    const time = objectLine.match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/g)
    const playersMatch = objectLine.match(/Player\s[\"|\'][a0-z9\s\/\-\_]*[\"|\']/g)
    const players = playersMatch ? playersMatch.map(player => {
      const split = player.split('\"')[1]
      return `${split}`
    }) : []
    const killed = objectLine.match(/\skilled\s/g) ? true : false
    const hit = objectLine.match(/\shit\s/g) ? true : false
    const pveMatch = objectLine.match(/by[\s]{1,2}[a0-z9\/\-\_\s]*/g)
    const isPve = (pveMatch && players.length < 2)
    const pve = isPve ? (
      pveMatch[0].match(/by\s\swith\s/g) ? pveMatch[0].split('by  with ').join('') : (
        pveMatch[0].match(/\sinto\s/g) ? pveMatch[0].split(' into ').join('').split('by ').join('') : (
          pveMatch[0].match(/explosion/g) ? objectLine.split('explosion').pop().trim().split(/[(|)]/g).join('') : pveMatch[0].split('by ').join('')
        )
      )
    ) : false
    const item = [objectLine.match(/\)\swith\s[a0-z9\-\s]*/g)]
      .filter(x => x !== null)
      .reduce((a,c) => c, [])
      .map(match => match.split(') with ').join(''))
      .map(string => string.split(' from ')[0])
      .reduce((a,c) => c, false)
    const melee = [objectLine.match(/\(Melee[a0-z9\_]*\)/g)]
      .filter(x => x !== null)
      .reduce((a,c) => c, [])
      .map(match => match.split(/[(|)]/g).join(''))
      .reduce((a,c) => c, false)
    const headshot = [objectLine.match(/Head\([0-9]*\)/g)]
      .filter(x => x !== null)
      .reduce((a,c) => c, [])
      .reduce((a,c) => true, false)
    const brainshot = [objectLine.match(/Brain\([0-9]*\)/g)]
      .filter(x => x !== null)
      .reduce((a,c) => c, [])
      .reduce((a,c) => true, false)
    const meters = [objectLine.match(/from\s[0-9]*\.[0-9]*\smeters/g)]
      .filter(x => x !== null)
      .reduce((a,c) => c, [])
      .map(meters => meters.split(' meters').join('').split('from ').join(''))
      .reduce((a,c) => c, 0)
    const coords = [objectLine.match(/pos=<[0-9]*.[0-9]*,\s[0-9]*.[0-9]*,\s/g)]
      .filter(x => x !== null)
      .reduce((a,c) => c, [])
      .map(match => {
        const coords = match.split('pos=<').join('').split(', ')
        coords.pop()
        return coords
      })
      .reduce((a,c) => c, [])
    const damage = [objectLine.match(/for\s[0-9]*\sdamage/g)]
      .filter(x => x !== null)
      .reduce((a,c) => c, [])
      .map(damage => damage.split(' damage').join('').split('for ').join(''))
      .reduce((a,c) => c, 0)
    const dead = [objectLine.match(/\(DEAD\)/g)]
      .filter(x => x !== null)
      .reduce((a,c) => c, [])
      .reduce((a,c) => true, false)
    const suicide = objectLine.match(/suicide/g) ? true : false
    const placed = objectLine.match(/\)\splaced\s/g) ? true : false
    const unconscious = objectLine.match(/unconscious/g) ? true : false
    const reconscious = objectLine.match(/\sconscious/g) ? true : false
    const connected = objectLine.match(/is\sconnected/g) ? true : false
    const disconnected = objectLine.match(/has\sbeen\sdisconnected/g) ? true : false
    return {
      dead,
      damage,
      disconnected,
      connected,
      reconscious,
      unconscious,
      suicide,
      placed,
      coords,
      melee,
      brainshot,
      headshot,
      meters,
      item,
      pve,
      killed,
      hit,
      players,
      time,
      original: objectLine
    }
  })
  
  v2Feed.forEach((event, eventIndex) => {
    if (shouldKillfeed) {
      // killfeed
      const experimental = client.channels.cache.find(channel => `${channel.id}` === `${schannel}`)

      const emitter = {
        emit: (type, event) => {
          switch (type) {

            case 'placed:pve': 
              if (experimental.id === '846437164648235079') {
                const { coords } = event
                const [x, y] = coords
                let pvtype1 = `PvE `
                const byWho = event.players[0]
                if (inSafeZone({a:12142.65, b:12512.62, x:parseFloat(x), y:parseFloat(y), r:500})) {
                  // check all authorized playertags
                  if (checkAuthorizedSafezone(byWho)) {
                    pvtype1 = `**ILLEGAL** ${pvtype1}SAFEZONE PLACEMENT VIOLATION `
                    bansHash[byWho] = {
                      until: new Date().getTime() + (60 * 60 * 24 * 1000),
                      reason: ``
                    }
                  }
                  const message1 = [
                    `${pvtype1}\`${byWho}\` **placed** in safezone`,
                    ` <https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}>`
                  ].join('')
                  if (checkAuthorizedSafezone(byWho)) {
                    bansHash[byWho].reason = message1
                  }
                  return experimental.send(message1)
                } else return null
              }
              return null

            case 'kill:pvp':
              let who, byWho, pvtype = ``
              byWho = event.players[1]
              // since we know that an Unknown/Dead Entity from a kill event is an NPC, we'll decide
              // to relabel it as PvE, this is a prioprietary decision and thus why it's not a kill:pve event
              if (event.players[0] === `Unknown/Dead Entity`) {
                who = 'NPC'
                pvtype = `PvE `
              } else {
                who = event.players[0]
                pvtype = `PvP `
              }
              if (experimental.id === '846437164648235079') {
                const { coords } = event
                const [x, y] = coords
                if (inSafeZone({a:12142.65, b:12512.62, x:parseFloat(x), y:parseFloat(y), r:500})) {
                  if ((inSafeZone({a:12417.87, b:12395.45, x:parseFloat(x), y:parseFloat(y), r:20}))) {
                    // legal
                  } else {
                    // check all authorized playertags
                    if (pvtype === `PvE `) {
                      if (checkAuthorizedSafezone(byWho)) {
                        pvtype = `ILLEGAL ${pvtype}SAFEZONE VIOLATION `
                        bansHash[byWho] = {
                          until: new Date().getTime() + (60 * 60 * 24 * 1000),
                          reason: ``
                        }
                      }
                    } else if (pvtype = `PvP `) {
                      if (checkAuthorizedLEO(byWho)) {
                        pvtype = `ILLEGAL ${pvtype}SAFEZONE VIOLATION `
                        bansHash[byWho] = {
                          until: new Date().getTime() + (60 * 60 * 24 * 1000),
                          reason: ``
                        }
                      }
                    }
                  }
                }
              }
              const message = [
                `${pvtype}\`${byWho}\` **killed** \`${who}\` with *${event.item}*`,
                event.meters.length > 0 ? ` from __${event.meters}__ meters` : ``,
                event.headshot ? ` (headshot)` : ``,
                event.brainshot ? ` (brainshot)` : ``,
                ` <https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}>`
              ].join('')
              if (experimental.id === '846437164648235079') {
                const { coords } = event
                const [x, y] = coords
                if (inSafeZone({a:12142.65, b:12512.62, x:parseFloat(x), y:parseFloat(y), r:500})) {
                  if ((inSafeZone({a:12417.87, b:12395.45, x:parseFloat(x), y:parseFloat(y), r:20}))) {
                    // legal
                  } else {
                    // check all authorized playertags
                    if (pvtype === `PvE `) {
                      if (checkAuthorizedSafezone(byWho)) {
                        bansHash[byWho].reason = message
                      }
                    } else if (pvtype = `PvP `) {
                      if (checkAuthorizedLEO(byWho)) {
                        bansHash[byWho].reason = message
                      }
                    }
                  }
                }
              }
              if ((who === 'NPC') && (byWho === 'UET Birdman') && (pvtype === 'PvE ')) {
                return
              }
              if ((who === 'NPC') && (byWho === 'DayzSmurf4132') && (pvtype === 'PvE ')) {
                return
              }
              if ((who === 'NPC') && (byWho === 'FOGG klub') && (pvtype === 'PvE ')) {
                return
              }
              return experimental.send(message)

            case 'kill:pve':
              if (event.players[0] !== `Unknown/Dead Entity`) {
                return experimental.send(`PvE \`${event.pve.trim()}\` **killed** \`${event.players[0]}\` <https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}>`)
              } else {
                return experimental
              }

            case 'suicide': return experimental.send(`PvE \`${event.players[0]}\` **committed suicide** <https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}>`)
            
            case 'hit:pve:trap': return experimental.send(`PvE \`${event.pve.trim()}\` **hit** \`${event.players[0]}\` <https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}>`)

          }
        }
      }

      if (event.killed) {
        if (event.pve) {
          emitter.emit('kill:pve', event)
        } else {
          const prevEvent = v2Feed[eventIndex - 1] ? v2Feed[eventIndex - 1] : false
          const { headshot, brainshot } = prevEvent
          emitter.emit('kill:pvp', { ...event, headshot, brainshot })
        }
      } else if (event.suicide) {
        emitter.emit('suicide', event)
      } else if (event.hit) {
        if (event.pve) {
          if (event.pve.trim().match(/Zmb[M|F]/g) && event.players[0] && !event.players[0].match(/Unknown\/Dead\sEntity/g)) {
            emitter.emit('hit:pve:zombie', event)
          } else if (event.pve.trim().match(/Grenade|Trap/g) && event.players[0] !== 'Unknown/Dead Entity') {
            emitter.emit('hit:pve:trap', event)
          } else if (event.pve.trim() === 'FallDamage') {
            emitter.emit('hit:pve:fall', event)
          }
        } else {
          if (event.melee) {
            if (!event.dead) {
              emitter.emit('hit:pvp:melee', event)
            }
          } else {
            if (event.players[0] === `Unknown/Dead Entity`) {
              emitter.emit('hit:pve:npc', event)
            } else {
              if (!event.dead) {
                emitter.emit('hit:pve:item', event)
              }
            }
          }
        }
      } else if (event.placed) {
        emitter.emit('placed:pve', event)
      } else if (event.connected) {
        emitter.emit('connected', event)
      } else if (event.disconnected) {
        emitter.emit('disconnected', event)
      }

      // if (event.killed) {
      //   if (event.pve) {
      //     if (event.players[0] !== `Unknown/Dead Entity`) {
      //       experimental.send(`PvE \`${event.pve.trim()}\` **killed** \`NPC\` <https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}>`)
      //     }
      //   } else {
      //     const prevEvent = v2Feed[eventIndex - 1] ? v2Feed[eventIndex - 1] : false
      //     if (event.players[0] === `Unknown/Dead Entity`) {
      //       experimental.send([
      //         `PvE \`${event.players[1]}\` **killed** \`NPC\` with *${event.item}*`,
      //         event.meters.length > 0 ? ` from __${event.meters}__ meters` : ``,
      //         prevEvent.headshot ? ` (headshot)` : ``,
      //         prevEvent.brainshot ? ` (brainshot)` : ``,
      //         ` <https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}>`
      //       ].join(''))
      //     } else {
      //       experimental.send(`\`${event.players[1]}\` **killed** \`${event.players[0]}\` with *${event.item}*${event.meters.length > 0 ? ` from __${event.meters}__ meters` : `` } <https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}>`)
      //     }
      //   }
      // } else if (event.suicide) {
      //   experimental.send(`PvE \`${event.players[0]}\` **committed suicide** <https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}>`)
      // } else if (event.hit) {
      //   if (event.pve) {
      //     if (event.pve.trim().match(/Zmb[M|F]/g) && !event.players[0].match(/Unknown\/Dead\sEntity/g)) {
      //       // experimental.send(`PvE \`${event.pve.trim()}\` **hit** \`${event.players[0]}\``)
      //     } else if (event.pve.trim().match(/Grenade|Trap/g) && event.players[0] !== 'Unknown/Dead Entity') {
      //       experimental.send(`PvE \`${event.pve.trim()}\` **hit** \`${event.players[0]}\` <https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}>`)
      //     } else if (event.pve.trim() === 'FallDamage') {
      //       // experimental.send(`PvE \`${event.players[0]}\` fell`)
      //     }
      //   } else {
      //     if (event.melee) {
      //       // experimental.send(`\`${event.players[1]}\` **hit** \`${event.players[0]}\` with ${event.melee}`)
      //     } else {
      //       if (event.players[0] === `Unknown/Dead Entity`) {
      //         // experimental.send(`PvE \`${event.players[1]}\` **hit** NPC with ${event.item}${event.meters.length > 0 ? ` from ${event.meters} meters` : `` } https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}`)
      //       } else {
      //         // experimental.send(`\`${event.players[1]}\` **hit** \`${event.players[0]}\` with ${event.item}${event.meters.length > 0 ? ` from ${event.meters} meters` : `` } https://dayz.ginfo.gg/#location=${event.coords[0]};${event.coords[1]}`)
      //       }
      //     }
      //   }
      // } else if (event.connected) {
      //   // experimental.send(`\`${event.players[0]}\` connected`)
      // } else if (event.disconnected) {
      //   // experimental.send(`\`${event.players[0]}\` disconnected`)
      // }

      // function check_a_point(a, b, x, y, r) {
      //     var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
      //     r *= r;
      //     if (dist_points < r) {
      //         return true;
      //     }
      //     return false;
      // }

      // 147.34, 10420.82
      // for isolate spy
      // try {
      //   const experimentalTrue = client.channels.cache.find(channel => `${channel.id}` === `${697563823594536972}`)
      //   const { coords, players } = event
      //   const [x, y] = coords
      //   const [player] = players
      //   [[147.34, 10420.82], [13451.06, 12130.22], [1400.49, 9268.08]].forEach(([_X,_Y]) => {
      //     const inCircle = check_a_point(_X, _Y, parseFloat(x), parseFloat(y), 200)
      //     if (inCircle && player && x && y && player !== 'Unknown/Dead Entity' && (`${sid}` === `${6196640}`)) {          
      //       const m = `🛰 **EPD SPY**: \`${player}\` <https://dayz.ginfo.gg/#location=${x};${y}> \`\`\`${event.original}\`\`\``
      //       experimentalTrue.send(m)
      //     }
      //   })
      // } catch (e) {
      //   console.log(' could not determine if in circle, spy')
      // }

      // for spy
      // try {
      //   const { coords, players } = event
      //   const [x, y] = coords
      //   const [player] = players
      //   // 12102.81 / 12477.11
      //   const inCircle = check_a_point(12102.81, 12477.11, parseFloat(x), parseFloat(y), 600)
      //   if (inCircle && player && x && y && player !== 'Unknown/Dead Entity' && (`${sid}` === `7039821`)) {          
      //     if (spyHash[`${player}`]) {
      //       if (spyHash[`${player}`][`${discordPlayerId}`]) {
      //         const discordUser = client.users.get(discordUserId)
      //         const m = `🛰 **EPD SPY**: \`${player}\` <https://dayz.ginfo.gg/#location=${x};${y}> \`\`\`${event.original}\`\`\``
      //         discordUser.send(m)
      //       }
      //     }
      //   }
      // } catch (e) {
      //   console.log(' could not determine if in circle, spy')
      // }

      // for trader
      // try {
      //   const { coords, players } = event
      //   const [x, y] = coords
      //   const [player] = players
      //   // 12102.81 / 12477.11
      //   const inCircle = check_a_point(12102.81, 12477.11, parseFloat(x), parseFloat(y), 600)
      //   if (inCircle && player && x && y && player !== 'Unknown/Dead Entity' && (`${sid}` === `7039821`)) {
      //     const channelJudges = client.channels.cache.find(channel => `${channel.id}` === `785334488229478431`)
      //     if (!whitelistHash[`${player}`]) {
      //       if (!safezoneHash[`${player}`]) {
      //         channelJudges.send(`⛔ **EPD TRESPASS**: \`${player}\` at __NEAF Trader Safe Zone__ <https://dayz.ginfo.gg/#location=${x};${y}> \`\`\`${event.original}\`\`\``)
      //       }
      //       if (safezoneHash[`${player}`]) {
      //         channelJudges.send(`✅ **EPD AUTHORIZED**: \`${player}\` at __NEAF Trader Safe Zone__ <https://dayz.ginfo.gg/#location=${x};${y}> \`\`\`${event.original}\`\`\``)
      //       }
      //     }
      //   }
      // } catch (e) {
      //   console.log('could not determine if in circle, trader')
      // }

      // for npc judges
      // try {
      //   const { coords, players } = event
      //   const [x, y] = coords
      //   const [player] = players

      //   const npcJudgeLocations = [
      //     {
      //       "x": "6815.72",
      //       "z": "3010.08"
      //     },
      //     {
      //       "x": "5814.01",
      //       "z": "2200.45"
      //     },
      //     {
      //       "x": "9929.78",
      //       "z": "1620.16"
      //     },
      //     {
      //       "x": "10596.32",
      //       "z": "2531.61"
      //     },
      //     {
      //       "x": "13019.1",
      //       "z": "10552.61"
      //     },
      //     {
      //       "x": "12053.54",
      //       "z": "9770.11"
      //     },
      //     {
      //       "x": "3039.97",
      //       "z": "13774.49"
      //     },
      //     {
      //       "x": "4163.89",
      //       "z": "11764.08"
      //     },
      //     {
      //       "x": "12004.95",
      //       "z": "14809.27"
      //     },
      //     {
      //       "x": "12111.97",
      //       "z": "13604.23"
      //     }
      //   ]

      //   npcJudgeLocations.forEach(npcJudgeLocation => {
      //     const inCircle = check_a_point(parseFloat(npcJudgeLocation.x), parseFloat(npcJudgeLocation.z), parseFloat(x), parseFloat(y), 50)
      //     if (inCircle && player && x && y && player !== 'Unknown/Dead Entity' && (`${sid}` === `7039821`)) {
      //       const channelJudges = client.channels.cache.find(channel => `${channel.id}` === `785334488229478431`)
      //       if (!whitelistHash[`${player}`]) {
      //         channelJudges.send(`<@&783137187403268147> **EPD ALERT**: \`${player}\` approaching __NPC JUDGE__ <https://dayz.ginfo.gg/#location=${x};${y}> \`\`\`${event.original}\`\`\``)
      //       }
      //     }
      //   })

      // } catch (e) {
      //   console.log('could not determine if in circle, judges')
      // }

    }
  })

  lineObjects = lineObjects.filter(line => line.length > 0)
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

      match = line.match(/\|\sPlayer\s\"[a0-z9\s\/\-]*\"/g)
      const player = match ? match[0].split('"')[1] : 'ParseWarning'
      match = line.match(/by\sPlayer\s\"[a0-z9\s\/\-]*\"/g)
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

      match = line.match(/with\s[a0-z9\/\-]*/g)
      const weapon = match ? match[0].split(' ')[1] : `Unknown`
      match = null

      return {
        line,
        fromMeters,
        time,
        player,
        byPlayer,
        type,
        forDamage,
        coords,
        weapon,
        dead: line.match(/\(DEAD\)/g),
        headshot: line.match(/Head\(0\)/g),
        brainshot: line.match(/Brain\(37\)/g)
      }
    })
    .filter(line => line.time !== 'Unknown')
    .filter(line => line.type.length > 0)
    .filter(line => line.player !== 'Unknown/Dead Entity')
    .filter(line => line.byPlayer !== 'Unknown/Dead Entity')

  // sync the database with the new stats
  await lineObjects
    .filter(lo => (lo.type === '##### PlayerList') || (lo.type === '\>\\)$') || (lo.type === `is connected`) || (lo.type === `hit by Player`) || (lo.type === `killed by Player`) || (lo.type === `has been disconnected`))
    .reduce(async (a, {
      line,
      fromMeters,
      time,
      player,
      byPlayer,
      type,
      forDamage,
      coords,
      weapon,
      headshot,
      brainshot,
      dead
    }, currentIndex, sourceArray) => {
      // console.log('lines>', {
      //   line,
      //   fromMeters,
      //   time,
      //   player,
      //   byPlayer,
      //   type,
      //   forDamage,
      //   coords,
      //   weapon,
      //   headshot,
      //   brainshot,
      //   dead
      // })
      switch (type) {

        case `is connected`: return await a.then(async r => {
          return await new Promise(async (resolve, reject) => {


            try {
              const pid = line.match(/(id=[a-zA-Z0-9_-]*)/g)[0].split('id=')[1]
              const pname = player

              const pquery = `select * from players where pid = $1 and pname = $2`
              const pparameters = [pid, pname]
              const presult = await db.query(pquery, pparameters)

              if (presult.rows.length === 0) {
                const pquery = `insert into players (pid, pname) values ($1, $2) returning *`
                const pparameters = [pid, pname]
                const presult1 = await db.query(pquery, pparameters)
                const psquery = `insert into playersservers (pid, sid, psstatus) values ($1, $2, 1) returning *`
                const psparameters = [pid, sid]
                const psresult = await db.query(psquery, psparameters)
              } else {
                const pquery = `select * from playersservers where pid = $1 and sid = $2`
                const pparameters = [pid, sid]
                const presult = await db.query(pquery, pparameters)
                if (presult.rows.length === 0) {
                  const psquery = `insert into playersservers (pid, sid, psstatus) values ($1, $2, 1) returning *`
                  const psparameters = [pid, sid]
                  const psresult = await db.query(psquery, psparameters)
                } else {
                  const psquery = `update playersservers set psstatus = 1 where pid = $1 and sid = $2 returning *`
                  const psparameters = [pid, sid]
                  const psresult = await db.query(psquery, psparameters)
                }
              }

            } catch (e) {
              console.log('could not update or create player', e, line)
            }

            resolve()


          })
        })

        case `hit by Player`: return await a.then(async r => {
          return await new Promise(async (resolve, reject) => {


            try {
              const prevEvent = sourceArray[currentIndex-1] ? sourceArray[currentIndex-1] : { headshot: null, brainshot: null }
              const { headshot: prevHeadshot, brainshot: prevBrainshot } = prevEvent
              const pid = line.match(/(id=[a-zA-Z0-9_-]*)/g)[1].split('id=')[1]
              const psquery = `
                update playersservers
                set psdamage = (psdamage + ($3 * 1.0000)),
                  psmeters = (case (psmeters < $4) when true then $4 else psmeters end),
                  psheadshots = psheadshots + $5,
                  psbrainshots = psbrainshots + $6
                  where pid = $1 and sid = $2 returning *
              `
              // const psparameters = [pid, sid, forDamage, fromMeters, (prevHeadshot !== null) ? 1 : 0, (prevBrainshot !== null) ? 1 : 0]
              const psparameters = [pid, sid, forDamage, fromMeters, 0, 0]
              // console.log(psparameters)
              const psresult = await db.query(psquery, psparameters)
            } catch (e) {
              console.log('could not update stats', e, line)
            }

            resolve()


          })
        })

        case `killed by Player`: return await a.then(async r => {
          return await new Promise(async (resolve, reject) => {


            try {
              const prevEvent = sourceArray[currentIndex-1] ? sourceArray[currentIndex-1] : { headshot: null, brainshot: null }
              const { headshot: prevHeadshot, brainshot: prevBrainshot } = prevEvent
              const pid = line.match(/(id=[a-zA-Z0-9_-]*)/g)[1].split('id=')[1]
              const psquery = `
                update playersservers
                set pskills = pskills + 1,
                  pskd = ((pskills + 1) / (case psdeaths when 0.0000 then 1.0000 else psdeaths end)),
                  psmeters = (case (psmeters < $3) when true then $3 else psmeters end),
                  psheadshots = psheadshots + $4,
                  psbrainshots = psbrainshots + $5,
                  pscurrentkillstreak = pscurrentkillstreak + 1
                  where pid = $1 and sid = $2 returning *
              `
              const psparameters = [pid, sid, fromMeters, (prevHeadshot !== null) ? 1 : 0, (prevBrainshot !== null) ? 1 : 0]
              const psresult = await db.query(psquery, psparameters)
              const pid1 = line.match(/(id=[a-zA-Z0-9_-]*)/g)[0].split('id=')[1]
              const psquery1 = `
                update playersservers
                set psdeaths = psdeaths + 1,
                  pskd = pskills/(psdeaths + 1.0000),
                  pskillstreak = (case (pskillstreak < pscurrentkillstreak) when true then pscurrentkillstreak else pskillstreak end),
                  pscurrentkillstreak = 0
                  where pid = $1 and sid = $2 returning *
              `
              const psparameters1 = [pid1, sid]
              const psresult1 = await db.query(psquery1, psparameters1)

              // console.log('should kill feed?', shouldKillfeed)

              // if (shouldKillfeed) {
              //   // killfeed
              //   const experimental = client.channels.cache.find(channel => `${channel.id}` === `${schannel}`)
              //   let feed = `__${byPlayer}__ killed _${player}_ with ${weapon}`
              //   feed = ((fromMeters === `0`) || (fromMeters === `0.0`) || (fromMeters === 0) || (fromMeters === 0.0)) ? feed : `${feed} from ${fromMeters} meters`
              //   feed = `${feed}.`
              //   console.log('feed', feed)
              //   experimental.send(feed)
              // }

            } catch (e) {
              console.log('could not update stats', e, line)
            }
            resolve()
          })
        })

        case `has been disconnected`: return await a.then(async r => {
          return await new Promise(async (resolve, reject) => {


            try {
              const pid = line.match(/(id=[a-zA-Z0-9_-]*)/g)[0].split('id=')[1]
              const psquery = `update playersservers set psstatus = 0 where pid = $1 and sid = $2 returning *`
              const psparameters = [pid, sid]
              const psresult = await db.query(psquery, psparameters)
            } catch (e) {
              console.log('could not update or create player', e, line)
            }

            resolve()


          })
        })

        case '##### PlayerList': return await a.then(async r => {
          return await new Promise(async (resolve, reject) => {


            // reset map

            if (playerMapsHash[schannel] && playerMapsHash[schannel].mapImage && playerMapsHash[schannel].playerImage && playerMapsHash[schannel].mapCanvas && playerMapsHash[schannel].mapCanvasCtx) {
              playerMapsHash[schannel].mapCanvasCtx.drawImage(playerMapsHash[schannel].mapImage, 0, 0)
            } else {
              initCanvas(schannel)
            }

            resolve()


          })
        })

        case '\>\\)$': return await a.then(async r => {
          return await new Promise(async (resolve, reject) => {


            // use coords

            if (playerMapsHash[schannel] && playerMapsHash[schannel].mapImage && playerMapsHash[schannel].playerImage && playerMapsHash[schannel].mapCanvas && playerMapsHash[schannel].mapCanvasCtx) {
              if (player === 'sundaysatan') {
                console.log('whisper')
              } else {
                playerMapsHash[schannel].mapCanvasCtx.drawImage(playerMapsHash[schannel].playerImage, ((coords.x * .1) / 2), (((15350 - coords.y) * .1) / 2))
                playerMapsHash[schannel].mapCanvasCtx.fillText(player, ((coords.x * .1) / 2), (((15350 - coords.y) * .1) / 2) - 5)
                // console.log(`${(coords.x * .1) / 4}, ${(coords.y * .1) / 4}`, coords.x, coords.y)
              }
            }

            resolve()


          })
        })

        default: return await a.then(async r => {
          return await new Promise(async (resolve, reject) => {
            resolve()
          })
        })


      }
    }, Promise.resolve())


  // do this again in 5 minutes (or try and get last timestamp and do it 5 minutes from then)
  const t = setTimeout(() => {
    initLiveKillFeed(sid, user, schannel, sportlist)
  }, 60000 * 5)
  // just additional timers for debugging/feedback
  setTimeout(() => { console.log('1min passed since set timeout for next killfeed', schannel) }, 60000)
  setTimeout(() => { console.log('2min passed since set timeout for next killfeed', schannel) }, 60000 * 2)
  setTimeout(() => { console.log('3min passed since set timeout for next killfeed', schannel) }, 60000 * 3)
  setTimeout(() => { console.log('4min passed since set timeout for next killfeed', schannel) }, 60000 * 4)
  setTimeout(() => { console.log('5min passed since set timeout for next killfeed', schannel) }, 60000 * 5)
  // save this particular interval incase the feed it turned off
  killFeedTimeouts.push({ i: t, sid })
  // store the new log size
  updateServerLogStore(sid, user, ftpPath, recentSize)
  doBans()
}

const initLiveKillFeed = async (sid, user, schannel, sportlist, _message) => {
  // go get server logs info from gameserver service
  const authBearer = user.nakey
  const gameserver = await getGameserver({ id: sid }, authBearer)
  const { log_files } = gameserver.game_specific
  // if there aren't any logs
  if (log_files.length < 1) {
    // check back in two minutes
    console.log('try back in two minutes', schannel)
    const i = setTimeout(() => {
      console.log('trying back', schannel)
      initLiveKillFeed(sid, user, schannel, sportlist)
    }, 60000 * 2)
    killFeedTimeouts.push({ i, sid, user, schannel, sportlist })
    return
  }
  // if there's a server log file
  const serverLogPath = log_files.filter(file => file.match(/ADM/g))[0].replace(`${sportlist}/`,'')
  // then fetch that server log's most recent size
  const lastServerLogSizeFromREST = await new Promise(async (resolve, reject) => {
    const method = `GET`
    const path = `/services/${sid}/gameservers/file_server/size?path=${gameserver.game_specific.path}${serverLogPath}`
    doNitradoApi(method, path, async (response) => {
      console.log('resolved', path)
      const f = () => {
        try {
          console.log(response.body)
          const json = JSON.parse(response.body)
          const serverLogSize = json.data ? json.data.size : 0
          resolve(serverLogSize)
        } catch (e) {
          console.log('illformed response')
          setTimeout(() => {
            f()
          }, 15000)
        }
      }
      f()
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
    const [row] = result.rows
    console.log(row ? { sname: row.sname, sid: row.sid, schannel: row.schannel } : {})
    if (result.rows.length > 0) {
      resolve(result.rows)
    } else {
      resolve([])
    }
  })
  const lastServerLogSizeFromStore = lastServerLogFromStore.reduce((a,c) => c.sloglastsize, 0)
  // calculate offset
  const length = lastServerLogSizeFromREST - lastServerLogSizeFromStore
  console.log('>>>>>>> length', schannel, lastServerLogSizeFromREST, lastServerLogSizeFromStore, length)
  try {
    const [row] = lastServerLogFromStore
    const killfeedObject = (row ? { sname: row.sname, sid: row.sid, schannel: row.schannel } : {})
    const message = [
      killfeedObject.sname,
      schannel,
      `lastServerLogSizeFromREST=${lastServerLogSizeFromREST}`,
      `lastServerLogSizeFromStore=${lastServerLogSizeFromStore}`,
      `length=${length}`,
    ].reduce((a,c) => `${a}\`${c}\` `, ``)
    getExperimentalChannel().send(message)
    if (_message) {
      _message.channel.send([
        `:dvd:`,
        `\`${killfeedObject.sname}\``,
        `**online!**`
      ].reduce((a,c) => `${a}${c} `, ``))
    }
  } catch (e) {
    console.log(e)
  }
  // if offset is zero there's no change
  if (length === 0) {
    // there are logs, but no change in logs
    // do this again in two minutes
    console.log('try back in two minutes', schannel)
    const i = setTimeout(() => {
      console.log('trying back', schannel)
      initLiveKillFeed(sid, user, schannel, sportlist)
    }, 60000 * 2)
    killFeedTimeouts.push({ i, sid, user, schannel, sportlist })
    return
  }
  // length is greater than zero so go get it
  const maxSafeSeek = 64512
  // two cases where you'll wanna fetch the entire log
  // 1 it's too bit for seek api (in which case length > maxseek)
  // 2 it's a new log like from a restart or reinstall (in which case length < 0)
  // TODO: doing it this way may allow the entire feed to get parsed again and duplicate stats
  // REMEDY: only read the part you need instead of the entire thing
  if (length < 0) {
    // use file download
    const serverLog = await getServerLog(sid, user, `${gameserver.game_specific.path}${serverLogPath}`, gameserver)
    // parse it
    console.log('got server log', `${gameserver.game_specific.path}${serverLogPath}`)
    // update db players status since they'll be no disconnected event from the logs
    try {
      const psquery = `update playersservers set psstatus = 0 where sid = $1`
      const psparameters = [sid]
      const psresult = await db.query(psquery, psparameters)
      console.log('fyi')
    } catch (e) {
      console.log('could not update or create player', e, line)
    }
    parseServerLog(sid, user, serverLog, `${gameserver.game_specific.path}${serverLogPath}`, lastServerLogSizeFromREST, 0, false, schannel, sportlist)
  } else if (length > maxSafeSeek) {
    // use file download
    const serverLog = await getServerLog(sid, user, `${gameserver.game_specific.path}${serverLogPath}`, gameserver)
    // parse it
    console.log('got server log', `${gameserver.game_specific.path}${serverLogPath}`)
    // update db players status since they'll be no disconnected event from the logs
    try {
      const psquery = `update playersservers set psstatus = 0 where sid = $1`
      const psparameters = [sid]
      const psresult = await db.query(psquery, psparameters)
      console.log('fyi')
    } catch (e) {
      console.log('could not update or create player', e, line)
    }
    parseServerLog(sid, user, serverLog, `${gameserver.game_specific.path}${serverLogPath}`, lastServerLogSizeFromREST, lastServerLogSizeFromStore + 1, false, schannel, sportlist)
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
    // console.log('singleUseUrlResponse', data)
    const { token: _token } = data
    const { url: serverLogUrl, token } = _token
    // console.log('url', serverLogUrl)
    // if serverLogUrl && token
    // fetch seek of file
    if (!serverLogUrl || !token) {
      // this is essentially an error, try again in two minutes
      console.log('no serverLogUrl or token', serverLogUrl, token)
      console.log('try back in two minutes', schannel)
      const i = setTimeout(() => {
        console.log('trying back', schannel)
        initLiveKillFeed(sid, user, schannel, sportlist)
      }, 60000 * 2)
      killFeedTimeouts.push({ i, sid, user, schannel, sportlist })
      return
    }
    // get server log
    const serverLog = await new Promise((resolve, reject) => {
      const method = 'GET'
      doNitradoFileServerApiProper(method, serverLogUrl, token, resolve, reject)
    })
    // parse it
    console.log('got server log', schannel, serverLogUrl)
    parseServerLog(sid, user, serverLog, `${gameserver.game_specific.path}${serverLogPath}`, lastServerLogSizeFromREST, 0, true, schannel, sportlist)
  }
  // nothing else to do, done
}

const destroyLiveKillFeed = (sid) => {
  const interval = killFeedTimeouts.filter((k) => k.sid === sid)
  interval.forEach(i => clearInterval(i))
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// set up discord bots
const discordClient = new DiscordClient()
const client = discordClient
const prefix = '!'

// killfeed
client.login(`ODA1OTMxNjU2Mjc0OTAzMDYw.YBiEWA.xcY7EEyn5qkVJfMcum7fLuEhCgU`)

// killfeed bot
client.once('ready', async () => {
  const channel = client.channels.cache
    .find(channel => `${channel.id}` === `805974579859816529`)
  channel.send(`Ready`)
  setExperimentalChannel(channel)
  // client.guilds.cache.find(guild => console.log(guild))
  // const experimental = client.channels.cache.find(channel => channel.name === 'experimental')
  // experimental.send('i have been summoned')
  // HERE
  // const onlineServers = await db.query(`
  //   select s.sid, convert_from(decrypt(u.nakey::bytea, 'secret-key', 'bf'), 'utf-8') as nakey, s.sportlist, s.schannel from servers s, users u where s.sactive = 1 and s.uid = u.uid
  // `, [])
  // onlineServers.rows.forEach(onlineServer => {
  //   try {
  //     console.log('=== online server', parseInt(onlineServer.sid), { nakey: onlineServer.nakey }, onlineServer.sportlist, onlineServer.schannel)
  //     setTimeout(() => {
  //       initLiveKillFeed(parseInt(onlineServer.sid), { nakey: onlineServer.nakey }, onlineServer.schannel, onlineServer.sportlist)
  //     }, 5000 * (killFeedTimeouts.length + 1))
  //   } catch (e) {
  //     console.log(e)
  //   }
  // })

  setInterval(async () => {
    const result = await db.query(`select * from (select count(*) as numsurvivors from playersservers) as a, (select count(*) as numonline from playersservers where psstatus = 1) as b`, [])
    result.rows.forEach(({ numsurvivors, numonline }) => {
      const status = `${numonline}/${numsurvivors} survivors on DayZ.`
      console.log(status)
      client.user.setActivity(status, { type: 'WATCHING' })
    })
  }, 1000 * 30)
})

// safezone interval
// client.once('ready', async () => {
//   const channel = client.channels.cache
//     .find(channel => `${channel.id}` === `785334488229478431`)
//   setInterval(() => {
//     Object
//       .keys(safezoneHash)
//       .filter((key) => {
//         const timeRemaining = ((new Date().getTime() - safezoneHash[key].expires)/60000).toFixed(0) * -1
//         return timeRemaining <= 0
//       })
//       .forEach((key) => {
//         const id = `${safezoneHash[key].id}`
//         delete safezoneHash[key]
//         fs.writeFileSync(safezoneDb, JSON.stringify(safezoneHash))
//         if (!safezoneHash[key]) {
//           channel.send(`<@${id}> Safezone access **expired** for \`${key}\`, removed from list`)
//         } else {
//           channel.send(`<@${id}> Safezone access **expired** for \`${key}\` for <@${id}>, but could not remove from list`)
//         }
//       })
//   }, 60000)
// })

client.on('message', async message => {
  // console.log(`bot recieved message`, message.channel.id, message.content, message.guild)
  // if (message.content.substring(0,5) === 'claim') {
  //   const pid = message.content.substring(6,message.content.length)
  //   const pdid = message.author.id
  //   const { username } = message.author
  //   const sql = `update players set pdid = $1 where pid = $2 returning *`
  //   const query = await db.query(sql, [pdid, pid])
  //   if (query.rows.length > 0) {
  //     const { pname } = query.rows.reduce((a,c) => c, {})
  //     message.reply(`Survivor _${pname}_ is now linked to your discord user _${username}_.`)
  //   } else {
  //     message.reply('Unable to claim. Note: The ID is case sensitive.')
  //   }
  // }
  // if (message.content.substring(0,9) === '!archaeon') {
  //   if (message.content.substring(10,18) === 'factions') {
  //     if (message.content.substring(19,25) === 'create') {
  //       const factionName = message.content.substring(25,message.content.length)
  //       const sql = `insert into factions (fname, pid) values ($1, $2) return *`
  //       const query = await db.query(sql, [factionName, pid])
  //     } else {
  //       const sidSql = `select sid from guilds where gid = $1`
  //       const sidQuery = await db.query(sidSql, [message.guild.id])
  //       if (sidQuery.rows.length > 0) {
  //         const factionsSql = `select f.fname from factions f, factionsservers fs where f.id = fs.fid and fs.sid = $1`
  //         const factionsQuery = await db.query(factionsSql, [sid])
  //         if (factionsQuery.rows.length > 0) {
  //           console.log('>>>>>>>', factionsQuery.rows)
  //           const factions = factionsQuery.rows
  //             .map(row => `${row.fname}`)
  //             .reduce((a,c) => {
  //               console.log('reducing', `${a}${c}\n`)
  //               return `${a}${c}\n`
  //             }, ``)
  //           message.channel.send(`There are ${factionsQuery.rows.length} factions.\n\`\`\`\n${factions}\`\`\``)
  //         } else {
  //           message.channel.send('There does not appear to be anyone online.')
  //         }
  //       } else {
  //         message.channel.send('There does not appear to be any factions.')
  //       }
  //     }
  //   }
  // }
  const reset = async (message) => {
    killFeedTimeouts.forEach((killfeedTimeout) => {
      const { i, sid, user, schannel, sportlist } = killfeedTimeout
      clearInterval(i)
      initLiveKillFeed(sid, user, schannel, sportlist, message)
    })
  }

  if (message.content.substring(0,9) === '!killfeed') {
    if (message.content.substring(0,15) === '!killfeed reset') {
      if (message.author.id === `804194483029671947`) {
        reset(message)
      } else {
        message.channel.send(`No`)
      }
    }
    if (message.content.substring(0,14) === '!killfeed stop') {
      if (message.author.id === `804194483029671947`) {
        stop(message)
      } else {
        message.channel.send(`No`)
      }
    }
    if (message.content.substring(0,14) === '!killfeed mint') {
      const targetPlayerName = message.content.substring(15, message.content.length)
      const rankQuery = await db.query(`
        select * from (
          select
            p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus, ps.pskillstreak, ps.pscurrentkillstreak,
            (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) as score,
            row_number() over(order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc) as rankk,
            (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $2) as of
          from
            playersservers ps,
            players p,
            servers s
          where
            ps.pid = p.pid and ps.sid = s.sid and s.schannel = $2
          group by
            p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus, ps.pskillstreak, ps.pscurrentkillstreak
          order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc
        ) as leaderboard where leaderboard.pname = $1
      `, [targetPlayerName, message.channel.id])
      console.log('ROWS=====', rankQuery.rows)
      const [rank] = rankQuery.rows
      if (rank) {
        const token = `Survivor _${rank.pname}_ ranked ${rank.rankk}/${rank.of} with ${rank.pskills} kills, ${rank.psdeaths} deaths, for a ${rank.pskd} k/d, dealing ${rank.psdamage} damage, with their longest kill shot from ${rank.psmeters} meters, as well as ${rank.psheadshots} headshots, ${rank.psbrainshots} brainshots, whose current kill streak is ${rank.pscurrentkillstreak}, and longest kill streak at ${rank.pskillstreak} for an overall score of ${rank.score} points.`
        message.channel.send(token)
      } else {
        message.channel.send(`Survivor _${targetPlayerName}_ not ranked.`)
      }
    }
    if (message.content.substring(0,14) === '!killfeed help') {
      message.channel.send(`usage: !killfeed <rank,mint,leaderboard,online,map,bans> [<args>] \n\te.g., try '!killfeed rank help' to see how to use the rank command`)
    }
    if (message.content.substring(0,16) === '!killfeed online') {
      if (message.content.substring(17, 28) === 'leaderboard') {
        const query = `
          select
            p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus,
            (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) as score,
            row_number() over(order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc) as rankk
          from
            playersservers ps,
            players p,
            servers s
          where
            ps.pid = p.pid and ps.psstatus = 1 and ps.sid = s.sid and s.schannel = $1
          group by
            p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus
          order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc
        `
        const rankQuery = await db.query(query, [message.channel.id])
  
        if (rankQuery.rows.length > 0) {
          const canvas = createCanvas(915, (rankQuery.rows.length + 3) * 12)
          const ctx = canvas.getContext('2d')
  
          // blue outline
          ctx.fillStyle = 'rgba(0,0,25,1)'
          ctx.beginPath()
          ctx.fillRect(18, 18, 890, ((rankQuery.rows.length + 1) * 12) + 8)
          ctx.stroke()
  
          // primary dark background
          ctx.fillStyle = 'rgba(50,50,50,1)'
          ctx.beginPath()
          ctx.fillRect(20, 20, 886, ((rankQuery.rows.length + 1) * 12) + 4)
          ctx.stroke()
          
          const rows = rankQuery.rows
          const x = [{
            pname: 'survivor',
            pskills: '#kills',
            psdeaths: '#deaths',
            pskd: 'k/d',
            psdamage: 'damage',
            psmeters: 'meters',
            psheadshots: 'headshots',
            psbrainshots: 'brainshots',
            psstatus: 'status',
            score: 'score',
            rankk: 'rank'
          }, ...rows]
  
          // console.log('rowslength', rows.length, x.length)
  
          for (let i = 0; i < x.length; i++) {
            ctx.fillStyle = i % 2 > 0 ? 'rgba(15,15,15,1)' : 'rgba(50,50,50,1)'
            if (x[i].psstatus === 1) {
              ctx.fillStyle = 'rgba(0,25,0,1)'
            }
            ctx.beginPath()
            ctx.fillRect(20, (i * 12) + 3 + 20, 886, 12)
            ctx.stroke()
          }
  
  
          x.map((n, o) => {
            // console.log('for each', o)
            const keys = Object.keys(n)
            const row = keys.map((key) => {
              let j, klength, r = null
              switch (key) {
                case 'rankk':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((4 - klength) + klength)
                  return r
                case 'psstatus':
                  j = `${n[key] === 1 ? 'online' : 'offline'}`
                  j = `${n[key] === `status` ? 'status' : j}`
                  klength = j.length
                  r = j.padStart((7 - klength) + klength)
                  return r
                case 'psheadshots':
                case 'psbrainshots':
                case 'psdeaths':
                case 'pskills':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((10 - klength) + klength)
                  return r
                case 'psmeters':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((11 - klength) + klength)
                  return r
                case 'score':
                case 'psdamage':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((13 - klength) + klength)
                  return r
                case 'pskd':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((10 - klength) + klength)
                  return r
                case 'pname':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padEnd((16 - klength) + klength)
                  return r
                default:
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((16 - klength) + klength)
                  return r
              }
            }).reduce((a,c) => `${a} | ${c}`, ``)
            return row
          }).forEach((n, i) => {
            ctx.font = '10px Courier'
            ctx.fillStyle = 'white'
            ctx.fillText(`${n} |`, 20, ((i + 1) * 12) + 20)
          })
  
          const attachment = new MessageAttachment(canvas.toBuffer(), 'leaderboard.png')
          message.channel.send(attachment)
        } else {
          message.channel.send('There does not appear to be anyone online.')
        }
      } else {
        const query = `select p.pname from playersservers ps, players p, servers s where ps.pid = p.pid and ps.psstatus = 1 and ps.sid = s.sid and s.schannel = $1;`
        const rankQuery = await db.query(query, [message.channel.id])
        if (rankQuery.rows.length > 0) {
          console.log('>>>>>>>', rankQuery.rows)
          const survivors = rankQuery.rows
            .map(row => `${row.pname}`)
            .reduce((a,c) => {
              // console.log('reducing', `${a}${c}\n`)
              return `${a}${c}\n`
            }, ``)
          message.channel.send(`There are ${rankQuery.rows.length} survivors online.\n\`\`\`\n${survivors}\`\`\``)
        } else {
          message.channel.send('There does not appear to be anyone online.')
        }
      }
    }
    if (message.content.substring(0,13) === '!killfeed map') {
      console.log(playerMapsHash[message.channel.id], message.channel.id)
      if (playerMapsHash[message.channel.id] && playerMapsHash[message.channel.id].mapImage && playerMapsHash[message.channel.id].playerImage && playerMapsHash[message.channel.id].mapCanvas && playerMapsHash[message.channel.id].mapCanvasCtx) {
        const attachment = new MessageAttachment(playerMapsHash[message.channel.id].mapCanvas.toBuffer(), 'player-map.png')
        message.channel.send(attachment)
      } else {
        message.channel.send(`Map unavailable`)
      }
    }
    if ((message.content.substring(0,13) === '!killfeed ban') && message.content.substring(13,14) !== 's') {
      if (message.author.id === `804194483029671947`) {
        const targetPlayerName = message.content.substring(14, message.content.length)
        console.log('targetPlayerName', targetPlayerName, bansHash[targetPlayerName])
        bansHash[targetPlayerName] = {
          until: new Date().getTime() + (60 * 60 * 24 * 1000),
          reason: `manual ban`
        }
        doBans()
        message.channel.send(`Ok, give it like 5 minutes`)
      } else {
        message.channel.send(`No`)
      }
    }
    if (message.content.substring(0,14) === '!killfeed bans') {
      const bansList = Object.keys(bansHash).map(key => {
        return `\`${key}\` **banned** until __${new Date(bansHash[key].until)}__ for -> ${bansHash[key].reason}`
      })
      if (bansList.length > 0) {
        bansList.forEach(ban => message.channel.send(ban))
      } else {
        message.channel.send(`There are no bans currently`)
      }
    }
    if (message.content.substring(0,15) === '!killfeed unban') {
      if (message.author.id === `804194483029671947`) {
        const targetPlayerName = message.content.substring(16, message.content.length)
        console.log('targetPlayerName', targetPlayerName, bansHash[targetPlayerName])
        if (bansHash[targetPlayerName]) {
          delete bansHash[targetPlayerName]
        }
        doBans()
        message.channel.send(`Ok, give it like 5 minutes`)
      } else {
        message.channel.send(`No`)
      }
    }
    if (message.content.substring(0,21) === '!killfeed unauthorize') {
      if (message.author.id === `804194483029671947`) {
        const targetPlayerName = message.content.substring(22, message.content.length)
        console.log('targetPlayerName', targetPlayerName, bansHash[targetPlayerName])
        if (tradersHash[targetPlayerName]) {
          delete tradersHash[targetPlayerName]
          saveTraders()
          message.channel.send(`Ok, give it like 5 minutes`)
        }
        if (leosHash[targetPlayerName]) {
          delete leosHash[targetPlayerName]
          saveLeos()
          message.channel.send(`Ok, give it like 5 minutes`)
        }
      } else {
        message.channel.send(`No`)
      }
    }
    if (message.content.substring(0,19) === '!killfeed authorize') {
      if (message.content.substring(20,26) === 'trader') {
        if (message.author.id === `804194483029671947`) {
          const targetPlayerName = message.content.substring(27, message.content.length)
          console.log('targetPlayerName', targetPlayerName, tradersHash[targetPlayerName])
          // delete bansHash[targetPlayerName]
          tradersHash[targetPlayerName] = new Date().getTime()
          saveTraders()
          message.channel.send(`Ok, give it like 5 minutes`)
        } else {
          message.channel.send(`No`)
        }
      } else if (message.content.substring(20,23) === 'leo') {
        if (message.author.id === `804194483029671947`) {
          const targetPlayerName = message.content.substring(24, message.content.length)
          console.log('targetPlayerName', targetPlayerName, leosHash[targetPlayerName])
          // delete bansHash[targetPlayerName]
          leosHash[targetPlayerName] = new Date().getTime()
          saveLeos()
          message.channel.send(`Ok, give it like 5 minutes`)
        } else {
          message.channel.send(`No`)
        }
      } else{
        message.channel.send(`Nah`)
      }
    }
    if (message.content.substring(0,14) === '!killfeed rank') {
      if (message.content.substring(15,17) === 'kd') {
        const targetPlayerName = message.content.substring(18,message.content.length)
        const rankQuery = await db.query(`
          select
            r.*, (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $2) as of
          from (
            select
              ps.pskd,
              p.pname,
              row_number() over(order by ps.pskd desc) as rankk
            from
              playersservers ps,
              players p,
              servers s
            where
              ps.pid = p.pid and ps.sid = s.sid and s.schannel = $2
            group by
              ps.pskd,
              p.pname
            order by ps.pskd desc
          ) r
          where
            r.pname = $1
        `, [targetPlayerName, message.channel.id])
        console.log('rankQuery', rankQuery, rankQuery.rows)
        const rank = rankQuery.rows
          .reduce((a,c,i) => `Survivor _${c.pname}_ ranked ${c.rankk}/${c.of} with a ${c.pskd} k/d ratio.`, `Survivor _${targetPlayerName}_ not ranked.`)
        if (rank.length > 1) {
          message.channel.send(rank)
        } else {
          message.channel.send(`Survivor _${targetPlayerName}_ not ranked.`)
        }
      } else if (message.content.substring(15,20) === 'kills') {
        const targetPlayerName = message.content.substring(21,message.content.length)
        const rankQuery = await db.query(`
          select
            r.*, (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $2) as of
          from (
            select
              ps.pskills,
              p.pname,
              row_number() over(order by ps.pskills desc) as rankk
            from
              playersservers ps,
              players p,
              servers s
            where
              ps.pid = p.pid and ps.sid = s.sid and s.schannel = $2
            group by
              ps.pskills,
              p.pname
            order by ps.pskills desc
          ) r
          where
            r.pname = $1
        `, [targetPlayerName, message.channel.id])
        console.log('rankQuery', rankQuery, rankQuery.rows)
        const rank = rankQuery.rows
          .reduce((a,c,i) => `Survivor _${c.pname}_ ranked ${c.rankk}/${c.of} with ${c.pskills} kills.`, `Survivor _${targetPlayerName}_ not ranked.`)
        if (rank.length > 1) {
          message.channel.send(rank)
        } else {
          message.channel.send(`Survivor _${targetPlayerName}_ not ranked.`)
        }
      } else if (message.content.substring(15,21) === 'deaths') {
        const targetPlayerName = message.content.substring(21,message.content.length)
        const rankQuery = await db.query(`
          select
            r.*, (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $2) as of
          from (
            select
              ps.psdeaths,
              p.pname,
              row_number() over(order by ps.psdeaths desc) as rankk
            from
              playersservers ps,
              players p,
              servers s
            where
              ps.pid = p.pid and ps.sid = s.sid and s.schannel = $2
            group by
              ps.psdeaths,
              p.pname
            order by ps.psdeaths desc
          ) r
          where
            r.pname = $1
        `, [targetPlayerName, message.channel.id])
        console.log('rankQuery', rankQuery, rankQuery.rows)
        const rank = rankQuery.rows
          .reduce((a,c,i) => `Survivor _${c.pname}_ ranked ${c.rankk}/${c.of} with ${c.psdeaths} deaths.`, `Survivor _${targetPlayerName}_ not ranked.`)
        if (rank.length > 1) {
          message.channel.send(rank)
        } else {
          message.channel.send(`Survivor _${targetPlayerName}_ not ranked.`)
        }
      } else if (message.content.substring(15,21) === 'damage') {
        const targetPlayerName = message.content.substring(22,message.content.length)
        const rankQuery = await db.query(`
          select
            r.*, (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $2) as of
          from (
            select
              ps.psdamage,
              p.pname,
              row_number() over(order by ps.psdamage desc) as rankk
            from
              playersservers ps,
              players p,
              servers s
            where
              ps.pid = p.pid and ps.sid = s.sid and s.schannel = $2
            group by
              ps.psdamage,
              p.pname
            order by ps.psdamage desc
          ) r
          where
            r.pname = $1
        `, [targetPlayerName, message.channel.id])
        console.log('rankQuery', rankQuery, rankQuery.rows)
        const rank = rankQuery.rows
          .reduce((a,c,i) => `Survivor _${c.pname}_ ranked ${c.rankk}/${c.of} dealing ${c.psdamage} damage.`, `Survivor _${targetPlayerName}_ not ranked.`)
        if (rank.length > 1) {
          message.channel.send(rank)
        } else {
          message.channel.send(`Survivor _${targetPlayerName}_ not ranked.`)
        }
      } else if (message.content.substring(15,21) === 'meters') {
        const targetPlayerName = message.content.substring(22,message.content.length)
        const rankQuery = await db.query(`
          select
            r.*, (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $2) as of
          from (
            select
              ps.psmeters,
              p.pname,
              row_number() over(order by ps.psmeters desc) as rankk
            from
              playersservers ps,
              players p,
              servers s
            where
              ps.pid = p.pid and ps.sid = s.sid and s.schannel = $2
            group by
              ps.psmeters,
              p.pname
            order by ps.psmeters desc
          ) r
          where
            r.pname = $1
        `, [targetPlayerName, message.channel.id])
        console.log('rankQuery', rankQuery, rankQuery.rows)
        const rank = rankQuery.rows
          .reduce((a,c,i) => `Survivor _${c.pname}_ ranked ${c.rankk}/${c.of} with their longest shot from ${c.psmeters} meters.`, `Survivor _${targetPlayerName}_ not ranked.`)
        if (rank.length > 1) {
          message.channel.send(rank)
        } else {
          message.channel.send(`Survivor _${targetPlayerName}_ not ranked.`)
        }
      } else if (message.content.substring(15,24) === 'headshots') {
        const targetPlayerName = message.content.substring(25,message.content.length)
        const rankQuery = await db.query(`
          select
            r.*, (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $2) as of
          from (
            select
              ps.psheadshots,
              p.pname,
              row_number() over(order by ps.psheadshots desc) as rankk
            from
              playersservers ps,
              players p,
              servers s
            where
              ps.pid = p.pid and ps.sid = s.sid and s.schannel = $2
            group by
              ps.psheadshots,
              p.pname
            order by ps.psheadshots desc
          ) r
          where
            r.pname = $1
        `, [targetPlayerName, message.channel.id])
        console.log('rankQuery', rankQuery, rankQuery.rows)
        const rank = rankQuery.rows
          .reduce((a,c,i) => `Survivor _${c.pname}_ ranked ${c.rankk}/${c.of} with ${c.psheadshots} headshots.`, `Survivor _${targetPlayerName}_ not ranked.`)
        if (rank.length > 1) {
          message.channel.send(rank)
        } else {
          message.channel.send(`Survivor _${targetPlayerName}_ not ranked.`)
        }
      } else if (message.content.substring(15,25) === 'brainshots') {
        const targetPlayerName = message.content.substring(25,message.content.length)
        const rankQuery = await db.query(`
          select
            r.*, (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $2) as of
          from (
            select
              ps.psbrainshots,
              p.pname,
              row_number() over(order by ps.psbrainshots desc) as rankk
            from
              playersservers ps,
              players p,
              servers s
            where
              ps.pid = p.pid and ps.sid = s.sid and s.schannel = $2
            group by
              ps.psbrainshots,
              p.pname
            order by ps.psbrainshots desc
          ) r
          where
            r.pname = $1
        `, [targetPlayerName, message.channel.id])
        console.log('rankQuery', rankQuery, rankQuery.rows)
        const rank = rankQuery.rows
          .reduce((a,c,i) => `Survivor _${c.pname}_ ranked ${c.rankk}/${c.of} with ${c.psbrainshots} brainshots.`, `Survivor _${targetPlayerName}_ not ranked.`)
        if (rank.length > 1) {
          message.channel.send(rank)
        } else {
          message.channel.send(`Survivor _${targetPlayerName}_ not ranked.`)
        }
      } else if (message.content.substring(15,26) === 'leaderboard') {
        const targetPlayerName = message.content.substring(27,message.content.length)
        const rankQuery = await db.query(`
          select * from (
            select
              p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus,
              (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) as score,
              row_number() over(order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc) as rankk,
              (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $2) as of
            from
              playersservers ps,
              players p,
              servers s
            where
              ps.pid = p.pid and ps.sid = s.sid and s.schannel = $2
            group by
              p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus
            order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc
          ) as leaderboard where leaderboard.pname = $1
        `, [targetPlayerName, message.channel.id])
        const placementString = rankQuery.rows
          .reduce((a,c,i) => `Survivor _${c.pname}_ ranked ${c.rankk}/${c.of} with ${c.pskills} kills, ${c.psdeaths} deaths, for a ${c.pskd} k/d, dealing ${c.psdamage} damage, with their longest kill shot from ${c.psmeters} meters, as well as ${c.psheadshots} headshots, and ${c.psbrainshots} brainshots for an overall score of ${c.score} points.`, `Survivor _${targetPlayerName}_ not ranked.`)
        if (placementString.length > 1) {
          const placement = rankQuery.rows.reduce((a,c) => c, {})
          const rank = placement.rankk
          const desc = rankQuery.rows
            .reduce((a,c,i) => `with ${c.pskills} kills, ${c.psdeaths} deaths, for a ${c.pskd} k/d, dealing ${c.psdamage} damage, their longest kill shot from ${c.psmeters} meters, as well as ${c.psheadshots} headshots, and ${c.psbrainshots} brainshots for an overall score of ${c.score} points.`, `Survivor _${targetPlayerName}_ not ranked.`)
          if (parseInt(rank) === 1) {
            const embed = new MessageEmbed()
              .setTitle(`${placement.pname} is ranked ${rank} of out of ${placement.of} survivors`)
              .setFooter('brought to you by archaeon', 'attachment://th-archaeon-db-purple.png')
              .setColor('#000000')
              .setTimestamp()
              .setDescription(desc)
              .attachFiles(['./src/assets/th-archaeon-db-purple.png', './src/assets/rank-first.png'])
              .setThumbnail('attachment://rank-first.png')
            message.channel.send(embed)
          } else if (parseInt(rank) === 2) {
            const embed = new MessageEmbed()
              .setTitle(`${placement.pname} is ranked ${rank} of out of ${placement.of} survivors`)
              .setFooter('brought to you by archaeon', 'attachment://th-archaeon-db-purple.png')
              .setColor('#000000')
              .setTimestamp()
              .setDescription(desc)
              .attachFiles(['./src/assets/th-archaeon-db-purple.png', './src/assets/rank-second.png'])
              .setThumbnail('attachment://rank-second.png')
            message.channel.send(embed)
          } else if (parseInt(rank) === 3) {
            const embed = new MessageEmbed()
              .setTitle(`${placement.pname} is ranked ${rank} of out of ${placement.of} survivors`)
              .setFooter('brought to you by archaeon', 'attachment://th-archaeon-db-purple.png')
              .setColor('#000000')
              .setTimestamp()
              .setDescription(desc)
              .attachFiles(['./src/assets/th-archaeon-db-purple.png', './src/assets/rank-third.png'])
              .setThumbnail('attachment://rank-third.png')
            message.channel.send(embed)
          } else{
            message.channel.send(placementString)
          }
        } else {
          message.channel.send(`Survivor _${targetPlayerName}_ not ranked.`)
        }
      } else {
        message.channel.send(`usage: !killfeed rank <kd,kills,deaths,damage,meters,headshots,brainshots,leaderboard> <survivor-name> \n\te.g., !killfeed rank kd sundaysatan\n\tnote: player names are case sensitive`)
      }
    }
    if (message.content.substring(0,21) === '!killfeed leaderboard') {
      if (message.content.substring(22,24) === 'kd') {
        const rankQuery = await db.query(`
          select
            p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus,
            (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) as score,
            row_number() over(order by ps.pskd desc) as rankk,
            (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $1) as of
          from
            playersservers ps,
            players p,
            servers s
          where
            ps.pid = p.pid and ps.sid = s.sid and s.schannel = $1
          group by
            p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus
          order by ps.pskd desc
          limit 50
        `, [message.channel.id])
  
        if (rankQuery.rows.length > 0) {
          const canvas = createCanvas(915, 640)
          const ctx = canvas.getContext('2d')
  
          ctx.fillStyle = 'rgba(0,0,25,1)'
          ctx.beginPath()
          ctx.fillRect(18, 18, 890, 608)
          ctx.stroke()
  
          ctx.fillStyle = 'rgba(50,50,50,1)'
          ctx.beginPath()
          ctx.fillRect(20, 20, 886, 600 + 4)
          ctx.stroke()
          
          rankQuery.rows.pop()
          const rows = rankQuery.rows
          const x = [{
            pname: 'survivor',
            pskills: '#kills',
            psdeaths: '#deaths',
            pskd: 'k/d',
            psdamage: 'damage',
            psmeters: 'meters',
            psheadshots: 'headshots',
            psbrainshots: 'brainshots',
            psstatus: 'status',
            score: 'score',
            rankk: 'rank'
          }, ...rows]
  
          for (let i = 1; i < 50; i++) {
            ctx.fillStyle = i % 2 > 0 ? 'rgba(15,0,0,1)' : 'rgba(50,50,50,1)'
            if (rows[i-1].psstatus === 1) {
              ctx.fillStyle = 'rgba(0,25,0,1)'
            }
            ctx.beginPath()
            ctx.fillRect(20, (i * 12) + 3 + 20, 886, 12)
            ctx.stroke()
          }
  
          x.map((n) => {
            const keys = Object.keys(n)
            const row = keys.map((key) => {
              let j, klength, r = null
              switch (key) {
                case 'rankk':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((4 - klength) + klength)
                  return r
                case 'psstatus':
                  j = `${n[key] === 1 ? 'online' : 'offline'}`
                  j = `${n[key] === `status` ? 'status' : j}`
                  klength = j.length
                  r = j.padStart((7 - klength) + klength)
                  return r
                case 'psheadshots':
                case 'psbrainshots':
                case 'psdeaths':
                case 'pskills':
                case 'psmeters':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((10 - klength) + klength)
                  return r
                case 'score':
                case 'psdamage':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((13 - klength) + klength)
                  return r
                case 'pskd':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((10 - klength) + klength)
                  return r
                case 'pname':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padEnd((16 - klength) + klength)
                  return r
                default:
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((16 - klength) + klength)
                  return r
              }
            }).reduce((a,c) => `${a} | ${c}`, ``)
            return row
          }).forEach((n, i) => {
            // write the text
            ctx.font = '10px Courier'
            ctx.fillStyle = 'white'
            ctx.fillText(`${n} |`, 20, ((i + 1) * 12) + 20)
          })
  
          const attachment = new MessageAttachment(canvas.toBuffer(), 'leaderboard.png')
          const embed = new MessageEmbed()
            .setTitle(`k/d leaderboard, out of ${x[1].of} survivors`)
            .setFooter('brought to you by archaeon', 'attachment://th-archaeon-db-purple.png')
            .setColor('#000000')
            .setDescription('rows in green signify players currently online, score is the same as leaderboard')
            .attachFiles(['./src/assets/th-archaeon-db-purple.png', './src/assets/leaderboard-rank.png', attachment])
            .setThumbnail('attachment://leaderboard-rank.png')
            .setImage('attachment://leaderboard.png')
          message.channel.send(embed)
        }
      } else if (message.content.substring(22,28) === 'meters') {
        const rankQuery = await db.query(`
          select
            p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus,
            (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) as score,
            row_number() over(order by ps.psmeters desc) as rankk,
            (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $1) as of
          from
            playersservers ps,
            players p,
            servers s
          where
            ps.pid = p.pid and ps.sid = s.sid and s.schannel = $1
          group by
            p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus
          order by ps.psmeters desc
          limit 50
        `, [message.channel.id])
  
        if (rankQuery.rows.length > 0) {
          const canvas = createCanvas(915, 640)
          const ctx = canvas.getContext('2d')
  
          ctx.fillStyle = 'rgba(0,0,25,1)'
          ctx.beginPath()
          ctx.fillRect(18, 18, 890, 608)
          ctx.stroke()
  
          ctx.fillStyle = 'rgba(50,50,50,1)'
          ctx.beginPath()
          ctx.fillRect(20, 20, 886, 600 + 4)
          ctx.stroke()
          
          rankQuery.rows.pop()
          const rows = rankQuery.rows
          const x = [{
            pname: 'survivor',
            pskills: '#kills',
            psdeaths: '#deaths',
            pskd: 'k/d',
            psdamage: 'damage',
            psmeters: 'meters',
            psheadshots: 'headshots',
            psbrainshots: 'brainshots',
            psstatus: 'status',
            score: 'score',
            rankk: 'rank'
          }, ...rows]
  
          for (let i = 1; i < 50; i++) {
            ctx.fillStyle = i % 2 > 0 ? 'rgba(15,0,0,1)' : 'rgba(50,50,50,1)'
            if (rows[i-1].psstatus === 1) {
              ctx.fillStyle = 'rgba(0,25,0,1)'
            }
            ctx.beginPath()
            ctx.fillRect(20, (i * 12) + 3 + 20, 886, 12)
            ctx.stroke()
          }
  
          x.map((n) => {
            const keys = Object.keys(n)
            const row = keys.map((key) => {
              let j, klength, r = null
              switch (key) {
                case 'rankk':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((4 - klength) + klength)
                  return r
                case 'psstatus':
                  j = `${n[key] === 1 ? 'online' : 'offline'}`
                  j = `${n[key] === `status` ? 'status' : j}`
                  klength = j.length
                  r = j.padStart((7 - klength) + klength)
                  return r
                case 'psheadshots':
                case 'psbrainshots':
                case 'psdeaths':
                case 'pskills':
                case 'psmeters':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((10 - klength) + klength)
                  return r
                case 'score':
                case 'psdamage':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((13 - klength) + klength)
                  return r
                case 'pskd':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((10 - klength) + klength)
                  return r
                case 'pname':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padEnd((16 - klength) + klength)
                  return r
                default:
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((16 - klength) + klength)
                  return r
              }
            }).reduce((a,c) => `${a} | ${c}`, ``)
            return row
          }).forEach((n, i) => {
            // write the text
            ctx.font = '10px Courier'
            ctx.fillStyle = 'white'
            ctx.fillText(`${n} |`, 20, ((i + 1) * 12) + 20)
          })
  
          const attachment = new MessageAttachment(canvas.toBuffer(), 'leaderboard.png')
          const embed = new MessageEmbed()
            .setTitle(`meters leaderboard, out of ${x[1].of} survivors`)
            .setFooter('brought to you by archaeon', 'attachment://th-archaeon-db-purple.png')
            .setColor('#000000')
            .setDescription('longest killshot, rows in green signify players currently online, score is the same as leaderboard')
            .attachFiles(['./src/assets/th-archaeon-db-purple.png', './src/assets/leaderboard-rank.png', attachment])
            .setThumbnail('attachment://leaderboard-rank.png')
            .setImage('attachment://leaderboard.png')
          message.channel.send(embed)
        }
      } else {
        const rankQuery = await db.query(`
          select
            p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus,
            (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) as score,
            row_number() over(order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc) as rankk,
            (select count(*) from playersservers ps, servers s where ps.sid = s.sid and s.schannel = $1) as of
          from
            playersservers ps,
            players p,
            servers s
          where
            ps.pid = p.pid and ps.sid = s.sid and s.schannel = $1
          group by
            p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus
          order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc
          limit 50
        `, [message.channel.id])
  
        if (rankQuery.rows.length > 0) {
          const canvas = createCanvas(915, 640)
          const ctx = canvas.getContext('2d')
  
          ctx.fillStyle = 'rgba(0,0,25,1)'
          ctx.beginPath()
          ctx.fillRect(18, 18, 890, 608)
          ctx.stroke()
  
          ctx.fillStyle = 'rgba(50,50,50,1)'
          ctx.beginPath()
          ctx.fillRect(20, 20, 886, 600 + 4)
          ctx.stroke()
          
          // rankQuery.rows.pop()
          const rows = rankQuery.rows
          const x = [{
            pname: 'survivor',
            pskills: '#kills',
            psdeaths: '#deaths',
            pskd: 'k/d',
            psdamage: 'damage',
            psmeters: 'meters',
            psheadshots: 'headshots',
            psbrainshots: 'brainshots',
            psstatus: 'status',
            score: 'score',
            rankk: 'rank'
          }, ...rows]
  
          for (let i = 0; i < 50; i++) {
            ctx.fillStyle = i % 2 > 0 ? 'rgba(15,0,0,1)' : 'rgba(50,50,50,1)'
            if (rows[i-1] && rows[i-1].psstatus === 1) {
              ctx.fillStyle = 'rgba(0,25,0,1)'
            }
            ctx.beginPath()
            ctx.fillRect(20, (i * 12) + 3 + 20, 886, 12)
            ctx.stroke()
          }
  
          x.map((n) => {
            const keys = Object.keys(n)
            const row = keys.map((key) => {
              let j, klength, r = null
              switch (key) {
                case 'rankk':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((4 - klength) + klength)
                  return r
                case 'psstatus':
                  j = `${n[key] === 1 ? 'online' : 'offline'}`
                  j = `${n[key] === `status` ? 'status' : j}`
                  klength = j.length
                  r = j.padStart((7 - klength) + klength)
                  return r
                case 'psheadshots':
                case 'psbrainshots':
                case 'psdeaths':
                case 'pskills':
                case 'psmeters':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((10 - klength) + klength)
                  return r
                case 'score':
                case 'psdamage':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((13 - klength) + klength)
                  return r
                case 'pskd':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((10 - klength) + klength)
                  return r
                case 'pname':
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padEnd((16 - klength) + klength)
                  return r
                default:
                  j = `${n[key]}`
                  klength = j.length
                  r = j.padStart((16 - klength) + klength)
                  return r
              }
            }).reduce((a,c) => `${a} | ${c}`, ``)
            return row
          }).forEach((n, i) => {
            // write the text
            ctx.font = '10px Courier'
            ctx.fillStyle = 'white'
            ctx.fillText(`${n} |`, 20, ((i + 1) * 12) + 20)
          })
  
          const attachment = new MessageAttachment(canvas.toBuffer(), 'leaderboard.png')
          const embed = new MessageEmbed()
            .setTitle(`leaderboard by overall score, out of ${x[1].of} survivors`)
            .setFooter('brought to you by archaeon', 'attachment://th-archaeon-db-purple.png')
            .setColor('#000000')
            .setDescription('Score is determined by an aggregate of survivor stats to ensure fairness.')
            .attachFiles(['./src/assets/th-archaeon-db-purple.png', './src/assets/th-leaderboard-gold.png', attachment])
            .setThumbnail('attachment://th-leaderboard-gold.png')
            .setImage('attachment://leaderboard.png')
          message.channel.send(embed)
        }
      }
    }
  }
  // if (message.content.substring(0,13) === '!jurisdiction') {

  // }
})

// spyHash
// client.on('message', async (message) => {
//   const { content, author } = message
//   const { id } = author
//   const epdSpy = `!epd-spy `
//   const add = `add `
//   const remove = `remove `
//   const list = `list`

//   if (content.substring(0,epdSpy.length) === epdSpy) {

//     if (content.substring(epdSpy.length, epdSpy.length + add.length) === add) {
//       const targetPlayerName = message.content.substring(epdSpy.length + add.length, content.length)
//       const expires = new Date().getTime() + FOURTY_EIGHT_HOURS
//       spyHash[`${targetPlayerName}`][`${id}`] = {
//         expires,
//         id
//       }
//       fs.writeFileSync(spyDb, JSON.stringify(spyHash))
//       if (spyHash[`${targetPlayerName}`][`${id}`]) {
//         message.channel.send(`Citizen \`${targetPlayerName}\` will be traced for 48 hours.`)
//       } else {
//         message.channel.send(`Could not add \`${targetPlayerName}\`.`)
//       }
//     } else if (content.substring(epdSpy.length, epdSpy.length + remove.length) === remove) {
//       const targetPlayerName = message.content.substring(epdSpy.length + remove.length, content.length)
//       delete spyHash[`${targetPlayerName}`][`${id}`]
//       fs.writeFileSync(spyDb, JSON.stringify(spyHash))
//       if (!spyHash[`${targetPlayerName}`][`${id}`]) {
//         message.channel.send(`Removed \`${targetPlayerName}\` from surveillance list.`)
//       } else {
//         message.channel.send(`Could not remove \`${targetPlayerName}\`.`)
//       }
//     } else if (content.substring(epdSpy.length, epdSpy.length + list.length) === list) {
//       if (Object.keys(spyHash).length > 0) {
//         Object
//           .keys(spyHash)
//           .forEach(key => message.channel
//             .send(`Surveillance of \`${key}\` requested by <@${spyHash[key][`${id}`].id}> expires in ${(((new Date().getTime() - spyHash[key].expires)/60000)/60).toFixed(0) * -1} hours.`))
//       } else {
//         message.channel.send(`EPD Spy is idle.`)
//       }
//     }

//   }

// })

// safezone handler
// client.on('message', async (message) => {
//   const { content, author } = message
//   const { id } = author
//   const safezone = `!safezone `
//   const add = `add `
//   const remove = `remove `
//   const list = `list`

//   if (content.substring(0,safezone.length) === safezone) {

//     if (content.substring(safezone.length, safezone.length + add.length) === add) {
//       const targetPlayerName = message.content.substring(safezone.length + add.length, content.length)
//       const expires = new Date().getTime() + THREE_HOURS
//       safezoneHash[`${targetPlayerName}`] = {
//         expires,
//         id
//       }
//       fs.writeFileSync(safezoneDb, JSON.stringify(safezoneHash))
//       if (safezoneHash[`${targetPlayerName}`]) {
//         message.channel.send(`Citizen \`${targetPlayerName}\` authorized by <@${id}> for 3 hours`)
//       } else {
//         message.channel.send(`Could not add \`${targetPlayerName}\` <@${id}>`)
//       }
//     } else if (content.substring(safezone.length, safezone.length + remove.length) === remove) {
//       const targetPlayerName = message.content.substring(safezone.length + remove.length, content.length)
//       delete safezoneHash[`${targetPlayerName}`]
//       fs.writeFileSync(safezoneDb, JSON.stringify(safezoneHash))
//       if (!safezoneHash[`${targetPlayerName}`]) {
//         message.channel.send(`Removed \`${targetPlayerName}\` <@${id}>`)
//       } else {
//         message.channel.send(`Could not remove \`${targetPlayerName}\` <@${id}>`)
//       }
//     } else if (content.substring(safezone.length, safezone.length + list.length) === list) {
//       if (Object.keys(safezoneHash).length > 0) {
//         Object
//           .keys(safezoneHash)
//           .forEach(key => message.channel
//             .send(`\`${key}\` authorized by <@${safezoneHash[key].id}> expires in ${((new Date().getTime() - safezoneHash[key].expires)/60000).toFixed(0) * -1} minutes`))
//       } else {
//         message.channel.send(`Zero authorized access`)
//       }
//     }

//   }

// })

// judges handler
// client.on('message', async (message) => {
//   const { content, author } = message
//   const { id } = author
//   const judges = `!judges `
//   const add = `add `
//   const remove = `remove `
//   const list = `list`

//   if (content.substring(0,judges.length) === judges) {

//     if (content.substring(judges.length, judges.length + add.length) === add) {
//       const targetPlayerName = message.content.substring(judges.length + add.length, content.length)
//       whitelistHash[`${targetPlayerName}`] = id
//       fs.writeFileSync(whitelistDb, JSON.stringify(whitelistHash))
//       if (whitelistHash[`${targetPlayerName}`]) {
//         message.channel.send(`Judge \`${targetPlayerName}\` authorized by <@${id}>`)
//       } else {
//         message.channel.send(`Could not add \`${targetPlayerName}\` <@${id}>`)
//       }
//     } else if (content.substring(judges.length, judges.length + remove.length) === remove) {
//       const targetPlayerName = message.content.substring(judges.length + remove.length, content.length)
//       delete whitelistHash[`${targetPlayerName}`]
//       fs.writeFileSync(whitelistDb, JSON.stringify(whitelistHash))
//       if (!whitelistHash[`${targetPlayerName}`]) {
//         message.channel.send(`Removed \`${targetPlayerName}\` <@${id}>`)
//       } else {
//         message.channel.send(`Could not remove \`${targetPlayerName}\` <@${id}>`)
//       }
//     } else if (content.substring(judges.length, judges.length + list.length) === list) {
//       if (Object.keys(whitelistHash).length > 0) {
//         Object
//           .keys(whitelistHash)
//           .forEach(key => message.channel
//             .send(`Judge \`${key}\` authorized by <@${whitelistHash[key]}>`))
//       } else {
//         message.channel.send(`Zero authorized access`)
//       }
//     }

//   }

// })

const bailbondsClient = new DiscordClient()

// bailbondsClient.once('ready', async () => {
//   setInterval(async () => {
//     // get all bounties for this server
//     const sql = `select count(p.pname) as numbounties from bountys b, playersservers ps, players p, servers s where b.btargetpsid = ps.psid and ps.sid = s.sid and p.pid = ps.pid`
//     const query = await db.query(sql, [])
//     query.rows.forEach(({ numbounties }) => {
//       const status = `out for ${numbounties} bounties on DayZ.`
//       // console.log(status)
//       bailbondsClient.user.setActivity(status, { type: 'WATCHING' })
//     })
//   }, 1000 * 30)
// })

// bailbondsClient.on('message', async (message) => {
//   // console.log(`bot recieved message`, message.content)
//   // has guild, is in channel
//   // !rooster bounty c1000 sunday satan 002
//   if (message.content.substring(0,10) === '!bailbonds') {
//     if (message.content.substring(11,19) === 'bounties') {
//       if (message.content.substring(20,21) === 'c') {
//         const split = message.content.split(' ')
//         const n = split[2].split('c')[1]
//         const bountyWorth = parseInt(n)
//         const targetPlayer = message.content.substring(22 + n.length, message.content.length)
//         const pdid = message.author.id
//         const { username } = message.author
//         const discordIssuerName = username
//         const survivorSql = `select ps.psid, p.pname, ps.pscredits from playersservers ps, players p where ps.pid = p.pid and p.pdid = $1`
//         const survivorQuery = await db.query(survivorSql, [pdid])
//         if (survivorQuery.rows.length > 0) {
//           const { pscredits, pname, psid: psidSurvivor } = survivorQuery.rows.reduce((a,c) => c, null)
//           const psidTargetSql = `select ps.psid from playersservers ps, players p where ps.pid = p.pid and p.pname = $1`
//           const psidTargetQuery = await db.query(psidTargetSql, [targetPlayer])
//           if (psidTargetQuery.rows.length > 0) {
//             const { psid: psidTarget } = psidTargetQuery.rows.reduce((a,c) => c, null)
//             if (pscredits < bountyWorth) {
//               message.channel.send(`Survivor _${pname}_ (_${discordIssuerName}_) cannot afford a c${bountyWorth} bounty.`)
//             } else {
//               const bountysSql = `insert into bountys (bissuerpsid, btargetpsid, bworth) values ($1, $2, $3)`
//               const bountysQuery = await db.query(bountysSql, [psidSurvivor, psidTarget, bountyWorth])
//               if (bountysQuery.rows.length > 0) {
//                 message.channel.send(`Bounty worth c${bountyWorth} issued against survivor _${targetPlayer}_.`)
//               } else {
//                 message.channel.send(`Bounties are currently unavailable at the time, sorry..`)
//               }
//             }
//           } else {
//             message.channel.send(`Could not issue bounty, unable to find any survivor by the name of _${targetPlayer}_.`)
//           }
//         } else {
//           message.channel.send(`Unable to pinpoint _${username}_'s survivor. Have they claimed it?`)
//         }
//       } else {
//         // get all bounties for this server
//         const sidSql = `select sid from servers where sdchannel = $1`
//         const sidQuery = await db.query(sidSql, [message.channel.id])
//         if (sidQuery.rows.length > 0) {
//           const { sid } = sidQuery.rows.reduce((a,c) => c, null)
//           const sql = `select b.bworth, b.bborn, p.pname from bountys b, playersservers ps, players p, servers s where b.btargetpsid = ps.psid and ps.sid = s.sid and ps.pid = p.pid and s.sid = $1 limit 50`
//           const query = await db.query(sql, [sid])
//           const m = query.rows.map(row => `Survivor _${row.pname}_ is wanted for c${b.bworth} since ${b.bborn}.\n`)
//           message.channel.send(m)
//         } else {
//           message.channel.send(`Could not find any servers for this channel.`)
//         }
//       }
//     }
//   }
// })

// bailbondsClient.login('NzQxNzAyNTgxMTg0NjI2Nzk4.Xy7aWw.ZPSXU31BnKRRazJWq_aoWBfUzIU')

// @archaeon link #inception-servers <nitrado_service_id>

// const archaeonClient = new DiscordClient()

// archaeonClient.once('ready', async () => {
//   setInterval(async () => {
//     const status = `0 factions across 1 servers on DayZ.`
//     // console.log(status)
//     archaeonClient.user.setActivity(status, { type: 'WATCHING' })
//   }, 1000 * 30)
// })

// archaeonClient.on('message', async (message) => {
//   // console.log(`bot recieved message`, message.content)
//   // has guild, is in channel
//   // !rooster bounty c1000 sunday satan 002
//   if (message.content.substring(0,10) === '!bailbonds') {
//     if (message.content.substring(11,19) === 'bounties') {
//       if (message.content.substring(20,21) === 'c') {
//         const split = message.content.split(' ')
//         const n = split[2].split('c')[1]
//         const bountyWorth = parseInt(n)
//         const targetPlayer = message.content.substring(22 + n.length, message.content.length)
//         const pdid = message.author.id
//         const { username } = message.author
//         const discordIssuerName = username
//         const survivorSql = `select ps.psid, p.pname, ps.pscredits from playersservers ps, players p where ps.pid = p.pid and p.pdid = $1`
//         const survivorQuery = await db.query(survivorSql, [pdid])
//         if (survivorQuery.rows.length > 0) {
//           const { pscredits, pname, psid: psidSurvivor } = survivorQuery.rows.reduce((a,c) => c, null)
//           const psidTargetSql = `select ps.psid from playersservers ps, players p where ps.pid = p.pid and p.pname = $1`
//           const psidTargetQuery = await db.query(psidTargetSql, [targetPlayer])
//           if (psidTargetQuery.rows.length > 0) {
//             const { psid: psidTarget } = psidTargetQuery.rows.reduce((a,c) => c, null)
//             if (pscredits < bountyWorth) {
//               message.channel.send(`Survivor _${pname}_ (_${discordIssuerName}_) cannot afford a c${bountyWorth} bounty.`)
//             } else {
//               const bountysSql = `insert into bountys (bissuerpsid, btargetpsid, bworth) values ($1, $2, $3)`
//               const bountysQuery = await db.query(bountysSql, [psidSurvivor, psidTarget, bountyWorth])
//               if (bountysQuery.rows.length > 0) {
//                 message.channel.send(`Bounty worth c${bountyWorth} issued against survivor _${targetPlayer}_.`)
//               } else {
//                 message.channel.send(`Bounties are currently unavailable at the time, sorry..`)
//               }
//             }
//           } else {
//             message.channel.send(`Could not issue bounty, unable to find any survivor by the name of _${targetPlayer}_.`)
//           }
//         } else {
//           message.channel.send(`Unable to pinpoint _${username}_'s survivor. Have they claimed it?`)
//         }
//       } else {
//         // get all bounties for this server
//         const sidSql = `select sid from servers where sdchannel = $1`
//         const sidQuery = await db.query(sidSql, [message.channel.id])
//         if (sidQuery.rows.length > 0) {
//           const { sid } = sidQuery.rows.reduce((a,c) => c, null)
//           const sql = `select b.bworth, b.bborn, p.pname from bountys b, playersservers ps, players p, servers s where b.btargetpsid = ps.psid and ps.sid = s.sid and ps.pid = p.pid and s.sid = $1 limit 50`
//           const query = await db.query(sql, [sid])
//           const m = query.rows.map(row => `Survivor _${row.pname}_ is wanted for c${b.bworth} since ${b.bborn}.\n`)
//           message.channel.send(m)
//         } else {
//           message.channel.send(`Could not find any servers for this channel.`)
//         }
//       }
//     }
//   }
// })

// archaeonClient.login('NzUwNDYwNDMxNDc0MjI5MzYx.X062vQ.s0TB1-zFsLgJNXfFioKIvXs0-zA')

let killFeedTimeouts = []

// ------------------------------------------------------------------------------------------------------------------------------------------------------

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
    const query = 'select uid, uname, uborn, uconfirmed from users where uname = $1 and upassword = crypt($2, upassword)'
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

// ------------------------------------------------------------------------------------------------------------------------------------------------------

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
      uemail,
      uconfirmed
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

// ------------------------------------------------------------------------------------------------------------------------------------------------------

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
  const { uname, uconfirmed } = user
  console.log('uconfirmed', uconfirmed)
  if (`${uconfirmed}` === `${1}`) {
    res.redirect(`/api/v2/users/${uname}`)
  } else {
    res.status(400)
    res.send({ uconfirmed: uconfirmed })
    res.end()
  }
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
      `select a.uname, a.uborn,
        convert_from(decrypt(a.nakey::bytea, 'secret-key', 'bf'), 'utf-8') as nakey,
        convert_from(decrypt(a.dakey::bytea, 'secret-key', 'bf'), 'utf-8') as dakey,
        b.* from users a, servers b where a.uname = $1 and b.uid = a.uid`,
      [username],
      () => {
        // in case they haven't registered a server yet, send this back
        simpleQuery(
          req, res, 
          `select 
            a.uname,
            a.uborn,
            convert_from(decrypt(a.nakey::bytea, 'secret-key', 'bf'), 'utf-8') as nakey,
            convert_from(decrypt(a.dakey::bytea, 'secret-key', 'bf'), 'utf-8') as dakey
          from 
            users a
          where a.uname = $1`,
          [username],
          () => {}
        )
      },
      true, // compress,
      true // dilute
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

app.put('/api/v2/servers/:sid/:sportlist/live/:schannel', db.connected(), authorized(), (req, res) => {
  const { params, user } = req
  const { sid, schannel, sportlist } = params
  const { uid } = user
  simpleQuery(req, res, `update servers set sactive = 1, schannel = $3, sportlist = $4 where sid = $1 and uid = $2`, [parseInt(sid), uid, schannel, sportlist], () => {
    initLiveKillFeed(sid, user, schannel, sportlist)
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
    const key = await new Promise((resolve, reject) => {
      const key = crypto.randomBytes(48, (error, buffer) => {
        const key = buffer.toString('hex')
        resolve(key)
      })
    })
    // will error if exists, else continue and insert
    const result = await new Promise(async (resolve, reject) => {
      try {
        const query = `
          insert into users (uname, uemail, upassword, uconfirmkey, nakey, dakey)
          values (
            $1,
            $2,
            crypt($3, gen_salt('bf')),
            $4,
            encrypt(bytea '', 'secret-key', 'bf'),
            encrypt(bytea '', 'secret-key', 'bf')
          )
          returning uname, uborn
        `
        console.log('insert into user', username, email, password)
        const parameters = [username, email, password, key]
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
    const mailOptions = {
      from: 'Archaeon Platform <no-reply@archaeon.io>',
      to: 'braungoodson@gmail.com', // email
      priority: 'high',
      subject: 'Welcome to Archaeon. Confirm your e-mail within.',
      text: getEmailText(username, email, password, key)
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log(info)
      }
    })
  } catch (error) {
    console.log(error)
    res.status(401)
    res.send(error)
    res.end()
  }
})

app.post('/api/v2/confirm-email/:key', db.connected(), async (req, res) => {
  const { params } = req
  const { key } = params
  try {
    const query = `
      update users set uconfirmkey = null, uconfirmed = 1
      where uconfirmkey = $1
      returning uname, uborn
    `
    const parameters = [key]
    const result = await db.query(query, parameters)
    if (result.rows.length > 0) {
      res.status(201)
      res.send(result.rows)
      res.end()
    } else {
      console.log(result)
      res.status(500)
      res.end()
    }
  } catch (error) {
    console.log(error)
    res.status(401)
    res.send(error)
    res.end()
  }
})

// web app serverp
app.listen(port, () => console.log(`Archaeon API listening at http://localhost:${port}`))
// https.createServer(sslOptions, app).listen(9001)
