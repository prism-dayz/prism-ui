const https = require('https')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// assets. Static JS, CSS, fonts
app.use(express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// start server
const server = app.listen(8080, () => {
	console.log(`server running on port ${server.address().port}`)
})

const sslOptions = {
  key: fs.readFileSync('/Users/bgoodson/Desktop/benches/2020-06-08/archaeon/archaeon-ssl.key'),
  cert: fs.readFileSync('/Users/bgoodson/Desktop/benches/2020-06-08/archaeon/archaeon-ssl.pem')
}

https.createServer(sslOptions, app).listen(8081)