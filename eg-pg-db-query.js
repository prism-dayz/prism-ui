const a = []

for (let i = 0; i < 10; i++) {
  a.push({ i })
}

const g = async () => {
  return await a.reduce(async (a, { i }) => {
    return await a.then(async r => {
      return await new Promise((resolve, reject) => {
        const r = Math.ceil(Math.random() * 10)
        console.log('new async call that should take ', r, ' seconds')
        setTimeout(() => {
          console.log('resolve async call', i, ' after ', r, 'seconds')
          resolve()
        }, r * 1000)
      })
    })
  }, Promise.resolve())
}

const f = async () => {
  console.log('f')
  return await Promise.all(a.map(({ i }) => {
    console.log('a.map(i)', i)
    return new Promise((resolve, reject) => {
      const r = Math.ceil(Math.random() * 10)
      console.log('r', r)
      setTimeout(() => {
        console.log('timeout', r, i)
        resolve()
      }, r * 1000)
    })
  }))
}

g()

// const pg = require('pg')
// // connect to db
// const { Client } = pg
// const dbClient = new Client({
//   host: 'localhost',
//   port: 5432,
//   user: 'methanogen',
//   password: 'methane',
//   database: 'archaeon'
// })

// const db = {
//   $connected: false,
//   query (query, params) {
//     console.log(query, params)
//     return dbClient.query(query, params)
//   },
//   async connect () {
//     await dbClient.connect()
//     this.$connected = true
//   },
//   connected () {
//     return (req, res, next) => {
//       if (this.$connected) {
//         next()
//       } else {
//         //console.log('not connected to db', this)
//         res.status(500)
//         res.end()
//       }
//     }
//   }
// }

// const f = async () => {
//   try {
//     await db.connect()
//     const players = await db.query('select * from players where pid = $1', ['9CC9D103B33C5CC168454E58595E062331958694']);
//     console.log(players.rows)
//     if (!players.rows.length) {
//       console.log('nah yo')
//     }
//   } catch (error) {
//     console.log('could not connect to db', error)
//   }
// }

// f()