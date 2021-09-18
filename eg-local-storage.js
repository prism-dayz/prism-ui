const fs = require('fs')

const localDb = './eg-local.db'
const buffer = fs.readFileSync(localDb)
const safe = JSON.parse(buffer.toString())

const player = 'sundaysatan'
delete safe[player]

safe[`eg-player`] = 1

fs.writeFileSync(localDb, JSON.stringify(safe, null, 2))
