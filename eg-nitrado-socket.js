const WebSocket = require('ws')

class NitradoSocketConnector {

  ws = new WebSocket('wss://websocket.nitrado.net/')

  terminalOutput = {
    push: (message) => console.log(message)
  }

  $buefy = {
    snackbar: {
      open: (config) => {
        console.log(config.message)
      }
    }
  }
  
  restartingGameserver = false

  startGameserver (sid) {

  }

  constructor (sid, wstoken) {
    ws.addEventListener('open', () => {
      this.terminalOutput.push(`* Opened secure real-time connection.`)
      this.terminalOutput.push(`* Attempting to login...`)
      const pojo = {
        action: 'login',
        data: {
          service_id: sid,
          label: 'ni',
          token: wstoken
        }
      }
      const jsonString = JSON.stringify(pojo)
      ws.send(jsonString)
      resolve()
    })
    
    ws.addEventListener('close', () => {
      console.log({content:`connection closed!`})
      this.terminalOutput.push(`* Connection closed.`)
    })
    
    ws.addEventListener('message', async (message) => {
      console.log('message', message)
      const wsMessage = JSON.parse(message.data)
      if (this.restartingGameserver === true) {
        if (wsMessage.type === 'status') {
          const serverState = wsMessage.data
          this.terminalOutput.push(`restart> gameserver is ${serverState}`)
          if (serverState === 'started') {
            this.terminalOutput.push(`restart> success ` + `${new Date()}`.match(/[0-9]*:[0-9]*:[0-9]*/g).join(''))
            this.restartingGameserver = false
          }
          if (serverState === 'stopped') {
            this.terminalOutput.push(`restart> rebooting in 30 seconds`)
            if (this.restartTimeout === false) {
              this.restartTimeout = true
              setTimeout(() => {
                this.terminalOutput.push(`restart> starting`)
                this.startGameserver(sid)
              }, 30000)
            }
          }
        }
      }
      if (wsMessage.type === 'query') {
        this.terminalOutput.push(`query> ${wsMessage.data.player_current} players`)
          this.$buefy.snackbar.open({
              message: `There are ${wsMessage.data.player_current} players online.`,
              type: 'is-white',
              position: 'is-top-left',
              actionText: 'OK',
              indefinite: false,
              queue: false,
              duration: 15000
          })
      }
    })
    
    ws.addEventListener('error', (error) => {
      this.terminalOutput.push(`* Error: ${error}`)
      reject(error)
    })

  }

}

