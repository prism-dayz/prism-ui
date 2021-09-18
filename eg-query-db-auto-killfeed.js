const pg = require('pg')

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

const f = async () => {
  const onlineServers = await db.query(`
    select s.sid, s.schannel, convert_from(decrypt(u.nakey::bytea, 'secret-key', 'bf'), 'utf-8') as nakey
    from servers s, users u
    where s.sactive = 1 and s.uid = u.uid
  `, [])
  onlineServers.rows.forEach(onlineServer => {
    console.log(`initKillfeed(${onlineServer.sid}, { nakey: '${onlineServer.nakey}' }, ${onlineServer.schannel})`)
  })
}

f()