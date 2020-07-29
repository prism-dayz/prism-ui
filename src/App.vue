<template>
  <div id="app">

    <div id="nav">
      <div>
        <b-navbar :fixed-top="true" type="is-dark">
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <b-tag type="is-light" style="font-size:20px;background-color: #11d9d4;color:white;font-weight:bold;">Archaeon</b-tag>
                    <b-tag type="is-dark" style="margin-left:5px;" rounded>v{{getPackageVersion}}</b-tag>
                </b-navbar-item>
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                      <b-button v-if="user.uname" class="button is-light" :loading="busy" @click="isAccountModalActive = !isAccountModalActive">
                        <i class="fa fa-cog" /> &nbsp; {{user.uname}}
                      </b-button>
                      <b-button @click="open = true" class="button is-danger">
                        <i class="fa fa-tools" /> &nbsp; Panel
                      </b-button>
                      <a v-if="!user.uname" class="button is-primary" @click="isRegisterModalActive = !isRegisterModalActive">
                          <strong>Register</strong>
                      </a>
                      <login-button v-if="!user.uname" @loggedin="onLoggedin" @login="onLogin" />
                      <logout-button v-if="user.uname" :user="user" @loggedout="onLoggedout" />
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
      </div>
    </div>

    <div id="map" style="display:flex;" :style="{ 'height': `${windowHeight - 56}px`, 'width': `${windowWidth}`, 'top': '4px', 'z-index': 1 }"></div>

    <b-modal :active.sync="isLoginModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      :can-cancel="false"
      aria-role="dialog"
      aria-modal
      >
      <login-modal v-bind="loginForm" :header="`Archaeon - Login`" @authenticated="onAuthenticated"></login-modal>
    </b-modal>

    <b-modal :active.sync="isRegisterModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      :can-cancel="false"
      aria-role="dialog"
      aria-modal
      >
      <register-modal :header="`Archaeon - Register`" @registered="onRegistered"></register-modal>
    </b-modal>

    <b-modal :active.sync="isAccountModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      :can-cancel="false"
      aria-role="dialog"
      aria-modal
      >
      <account-modal v-bind="accountForm" :header="`Archaeon - Account`" @account="onAccount"></account-modal>
    </b-modal>

    <div id="archaeon-terminal-container" :class="{ 'grow-up': terminalExpanded, 'shrink-down': !terminalExpanded }" style="z-index:2;">
      <div id="archaeon-terminal-toggle">
        <b-button v-if="!services.length" type="is-dark" @click="onGetServices" :loading="servicesBusy">
          <b-icon icon="taxi"></b-icon>
        </b-button>
        <b-dropdown v-else v-model="selectedService" aria-role="list">
            <button class="button" :class="{ 'is-warning': !selectedService, 'is-primary': selectedService }" type="button" slot="trigger">
                <template>
                    <b-icon icon="taxi"></b-icon>
                    <span>{{selectedService ? selectedService.details.name : `Select service`}}</span>
                </template>
                <b-icon icon="caret-down"></b-icon>
            </button>

            <b-dropdown-item v-for="(service, i) in services" :key="i" :value="service" aria-role="listitem" @click="onGetServerByService(service)">
                <div class="media">
                    <b-icon class="media-left" icon="server"></b-icon>
                    <div class="media-content">
                        <h3>{{service.details.name}}</h3>
                        <small>{{service.details.game}} #{{service.id}}</small>
                    </div>
                </div>
            </b-dropdown-item>

        </b-dropdown>

        <b-button v-if="selectedService" type="is-success" :loading="serversBusy">
          <b-icon icon="server"></b-icon>
          <!-- <span v-if="selectedServer">{{selectedServer.data ? selectedServer.data.gameserver.query.server_name : `Invalid`}}</span> -->
        </b-button>
        <!-- 
        <b-dropdown v-model="selectedServer" aria-role="list">
            <button class="button is-dark" type="button" slot="trigger">
                <template>
                    <b-icon icon="plug"></b-icon>
                    <span>{{selectedServer ? selectedServer.name : ``}}</span>
                </template>
                <b-icon icon="caret-down"></b-icon>
            </button>

            <b-dropdown-item v-for="(server, i) in servers" :key="i" :value="server" aria-role="listitem">
                <div class="media">
                    <b-icon class="media-left" icon="server"></b-icon>
                    <div class="media-content">
                        <h3>{{server.name}}</h3>
                        <small>{{server.id}}</small>
                    </div>
                </div>
            </b-dropdown-item>

        </b-dropdown> -->

        <b-button type="is-dark" @click="terminalExpanded = !terminalExpanded">
          <b-icon :icon="terminalExpanded ? 'arrow-down' : 'arrow-up'"></b-icon>
        </b-button>
      </div>
      <div id="archaeon-terminal-wrapper">
        <div id="archaeon-terminal">
          <div v-for="(line, i) in terminalOutput" :key="i">
            {{line}}
          </div>
        </div>
      </div>
    </div>

    <b-sidebar
      class="archaeon-panel"
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="open"
      :can-cancel="false"
    >
      <div class="p-1">

        <!-- ROW (TOP TOOL BAR) -->
        <div class="menu">

          <!-- OPEN -->
          <b-field class="file" style="display:inline-flex;font-size:12px;">
              <b-upload ref="filesInput" webkitdirectory multiple>
                  <a class="button is-primary">
                      <b-icon icon="upload"></b-icon>
                      <span>Open</span>
                  </a>
                  <span v-if="files.length" class="file-name" style="font-size:12px;">
                      {{ files.length }}
                  </span>
              </b-upload>
          </b-field>

          <!-- DOWNLOAD -->
          <b-button outlined type="is-link" size="is-small" style="margin-right:5px;" icon-left="random">
            Transfer
          </b-button>

          <!-- DOWNLOAD -->
          <b-button type="is-info" size="is-small" style="margin-right:5px;" icon-left="file-download">
            Download
          </b-button>

          <!-- SETTINGS SELECTION -->
          <b-dropdown v-model="selectedGameserverSetting" aria-role="list">
              <button class="button is-info is-small" type="button" style="margin-right:5px;" slot="trigger" outlined>
                  <template v-if="selectedGameserverSetting.id">
                      <b-icon icon="tasks"></b-icon>
                      <span>{{selectedGameserverSetting.name}}</span>
                  </template>
                  <template v-else>
                      <b-icon icon="tasks"></b-icon>
                      <span>Setting</span>
                  </template>
                  <b-icon icon="caret-down"></b-icon>
              </button>

              <b-dropdown-item v-for="(setting, i) in gameserverSettings" :key="i" :value="setting" aria-role="listitem">
                  <div class="media">
                      <b-icon class="media-left" icon="earth"></b-icon>
                      <div class="media-content">
                          <h3>{{setting.name}}</h3>
                          <small>{{setting.data.config.hostname}}</small>
                      </div>
                  </div>
              </b-dropdown-item>

          </b-dropdown>

          <!-- DEPLOY -->
          <b-button type="is-warning" size="is-small" style="margin-right:5px;" icon-left="sign-out-alt">
           Hard Deploy
          </b-button>

          <!-- DEPLOY -->
          <b-button outlined type="is-warning" size="is-small" style="margin-right:5px;" icon-left="sign-in-alt"
            @click="uploadFilesToGameserver(selectedService.id, ftpuname, files)">
            Soft Deploy
          </b-button>

          <!-- COMMIT -->
          <b-button outlined type="is-success" size="is-small" style="margin-right:5px;" icon-left="gavel" @click="onCommit" :loading="busyCommit">
            Commit
          </b-button>

          <!-- TOGGLE -->
          <b-button rounded outlined @click="open = !open" type="is-danger" size="is-small">
            <b-icon icon="times"></b-icon>
          </b-button>

        </div>

        <!-- ROW (FILE TREE, XML EDITOR) -->
        <div style="display:flex;flex-direction:row;">

          <!-- FILE TREE -->
          <div style="width:300px;margin-right:15px;">
            <b-menu class="archaeon-file-menu">

              <b-menu-list label="Files">
                <div v-for="(fileKey, f) in Object.keys(filesTreeHash)" :key="f">
                  <b-menu-item v-if="isFile(filesTreeHash[fileKey])" icon="file">
                    <template slot="label" slot-scope="props">
                      {{fileKey}}
                      <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                        <b-icon icon="caret-down" slot="trigger"></b-icon>
                        <b-dropdown-item aria-role="listitem" @click="onLoadFile(filesTreeHash[fileKey], [fileKey])">Open</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">Draw All</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">Erase All</b-dropdown-item>
                      </b-dropdown>
                    </template>
                  </b-menu-item>
                  <b-menu-item v-else icon="folder">
                    <template slot="label" slot-scope="props">
                      {{fileKey}}
                      <!-- <b-icon class="is-pulled-right" :icon="props.expanded ? 'arrow-down' : 'arrow-up'"></b-icon> -->
                    </template>
                    <div v-for="(ffileKey, ff) in Object.keys(filesTreeHash[fileKey])" :key="ff">
                      <b-menu-item v-if="isFile(filesTreeHash[fileKey][ffileKey])" icon="file">
                        <template slot="label" slot-scope="props">
                          {{ffileKey}}
                          <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                            <b-icon icon="caret-down" slot="trigger"></b-icon>
                            <b-dropdown-item aria-role="listitem" @click="onLoadFile(filesTreeHash[fileKey][ffileKey], [fileKey, ffileKey])">Open</b-dropdown-item>
                            <b-dropdown-item aria-role="listitem" @click="onDrawAll(filesTreeHash[fileKey][ffileKey], [fileKey, ffileKey])">Draw All</b-dropdown-item>
                            <b-dropdown-item aria-role="listitem">Erase All</b-dropdown-item>
                          </b-dropdown>
                        </template>
                      </b-menu-item>
                      <b-menu-item v-else icon="folder">
                        <template slot="label" slot-scope="props">
                          {{ffileKey}}
                          <!-- <b-icon class="is-pulled-right" :icon="props.expanded ? 'arrow-down' : 'arrow-up'"></b-icon> -->
                        </template>

                        <div v-for="(fffileKey, fff) in Object.keys(filesTreeHash[fileKey][ffileKey])" :key="fff">
                          <b-menu-item v-if="isFile(filesTreeHash[fileKey][ffileKey][fffileKey])" icon="file">
                            <template slot="label" slot-scope="props">
                              {{fffileKey}}
                              <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                                <b-icon icon="caret-down" slot="trigger"></b-icon>
                                <b-dropdown-item aria-role="listitem" @click="onLoadFile(filesTreeHash[fileKey][ffileKey][fffileKey], [fileKey, ffileKey, fffileKey])">Open</b-dropdown-item>
                                <b-dropdown-item aria-role="listitem">Draw All</b-dropdown-item>
                                <b-dropdown-item aria-role="listitem">Erase All</b-dropdown-item>
                              </b-dropdown>
                            </template>
                          </b-menu-item>
                          <b-menu-item v-else icon="folder">
                            <template slot="label" slot-scope="props">
                              {{fffileKey}}
                              <!-- <b-icon class="is-pulled-right" :icon="props.expanded ? 'arrow-down' : 'arrow-up'"></b-icon> -->
                            </template>
                          </b-menu-item>
                        </div>
                      </b-menu-item>
                    </div>
                  </b-menu-item>
                </div>

                <b-menu-item v-if="files.length < 1" icon="info" label="No files..."></b-menu-item>

              </b-menu-list>

            </b-menu>
          </div>

          <!-- XML EDITOR -->
          <div style="flex-grow:2">
            <div id="archaeon-xml-editor" style="height:800px;">
              
            </div>
          </div>

        </div>

      </div>
    </b-sidebar>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { vueWindowSizeMixin } from 'vue-window-size'
import LoginModal from '@/components/LoginModal'
import RegisterModal from '@/components/RegisterModal'
import LogoutButton from '@/components/LogoutButton'
import LoginButton from '@/components/LoginButton'
import AccountModal from '@/components/AccountModal'

const getIZurvive = () => new Promise((resolve, reject) => {
    const i = setInterval(() => {
      if (window.iZurvive) {
        clearInterval(i)
        resolve()
      }
    }, 100)
})

const readyiZurvive = (state) => new Promise((resolve, reject) => {
  window.izurviveDeps(state)
  resolve()
})

export default {
  name: 'app',
  mixins: [vueWindowSizeMixin],
  data () {
    return {
      selectedGameserverSetting: {
        id: null
      },
      gameserverSettings: [],
      selectedService: {
        id: null
      },
      lastRestart: false,
      unsavedChanges: false,
      busyCommit: false,
      loadedFile: {},
      terminalOutput: [`* Welcome to Archaeon, a Nitrado DayZ Server Tool.`],
      selectedServer: null,
      serversBusy: false,
      serversError: false,
      servers: [],
      selectedService: null,
      servicesBusy: false,
      servicesError: false,
      services: [],
      lastMove: {
        lat: null, lng: null, x: null, y: null
      },
      isAccountModalActive: false,
      accountForm: {
        username: null,
        nitradoApiKey: null
      },
      terminalExpanded: false,
      editor: null,
      filesTreeHash: {},
      files: [],
      busy: false,
      user: {
        uname: null,
        uborn: null
      },
      isRegisterModalActive: false,
      isLoginModalActive: false,
      loginForm: {
        uname: null
      },
      open: false,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: true
    }
  },
  components: {
    AccountModal,
    LoginButton,
    LogoutButton,
    RegisterModal,
    LoginModal
  },
  async mounted () {
    this.onTraffic()
    this.initXmlEditor()
    this.initOpenFiles()
    this.initResizeObserver()
    await readyiZurvive(this.$data)
    // readyLivonia()
    readyChernarus()
    await getIZurvive()
  },
  computed: {
    ...mapGetters([
      'getPackageVersion'
    ]),
    ftpuname () {
      return this.selectedServer.data ? this.selectedServer.data.gameserver.credentials.ftp.username : null
    }
  },
  methods: {
    nitradoApiRequest (method, path) {
      const options = {
        'method': method,
        'headers': {
          'Authorization': `Bearer ${this.accountForm.nitradoApiKey}`
        }
      }
      return fetch(`https://api.nitrado.net${path}`, options)
    },
    async getGameserverSettings (sid) {
      const method = `GET`
      const path = `/services/${sid}/gameservers/settings/sets`
      const response = await this.nitradoApiRequest(method, path)
      console.log('gameserver settings', response)
      return response
    },
    async stopGameserver (sid) {
      const method = 'POST'
      const path = `/services/${sid}/gameservers/stop`
      const response = await this.nitradoApiRequest(method, path)
      console.log('stop response', response)
      return response
    },
    async startGameserver (sid) {
      const method = 'POST'
      const path = `/services/${sid}/gameservers/restart`
      const response = await this.nitradoApiRequest(method, path)
      console.log('start response', response)
      return response
    },
    async restoreGameServerSettings (sid, setId) {
      const method = 'POST'
      const path = `/services/${sid}/gameservers/settings/sets/${stid}/restore`
      const response = await this.nitradoApiRequest(method, path)
      console.log('restore settings response', response)
      return response
    },
    async getUploadRequest (resolve, reject, file, sid, ftpuname)  {
      const ftpFileNameSplit = file.split('\/')
      const appendix = ftpFileNameSplit
        .filter(x => x.length && (x.length > 0))
        .filter(x => !x.match(/xml/g))
        .reduce((a,c) => `${a}/${c}`, ``)
      const ftpFilePath = `/games/${ftpuname}/ftproot/dayzxb_missions${appendix}`
      const ftpFileName = ftpFileNameSplit[ftpFileNameSplit.length - 1]
      const path = `/services/${sid}/gameservers/file_server/upload?path=${ftpFilePath}&file=${ftpFileName}`
      const method = 'POST'
      console.log('doing ', method, path)
      try {
        const response = await this.nitradoApiRequest(method, path)
        resolve(response)
        return response
      } catch (e) {
        console.log(e)
        return reject(e)
      }
    },
    async uploadFile (sid, ftpuname, filePath, bufferContents) {
      return new Promise(async (resolve, reject) => {
        const uploadRequest = await new Promise((resolve1, reject1) => {
          this.getUploadRequest(resolve1, reject1, filePath, sid, ftpuname)
        }).then(r => r.json())
        console.log('uploadRequest', uploadRequest)
        await new Promise(async (resolve1, reject1) => {
          const token = uploadRequest.data.token.token
          const url = uploadRequest.data.token.url
          const options = {
            'method': 'POST',
            'headers': {
              'token': token
            },
            'encoding': null,
            'body': bufferContents
          }
          try {
            const response = await fetch(url, options)
            resolve1(response)
          } catch (e) {
            reject1(e)
          }
        })
        resolve()
      })
    },
    async uploadFilesToGameserver (sid, ftpuname, files) {
      console.log(sid, ftpuname, files)
      await new Promise(async (resolve, reject) => {
        for (let i = 0; i < files.length; i++) {
          console.log(i, files[i])
          try {
            this.terminalOutput.push(`ftp> uploading file ${files[i].path}`)
            await this.uploadFile(sid, ftpuname, files[i].path, Buffer.from(files[i].contents, 'utf-8'))
            this.terminalOutput.push(`ftp> uploaded file ${files[i].path}`)
          } catch (e) {
            console.log('could not upload file', files[i], e)
            this.terminalOutput.push(`ftp> could not upload file ${files[i].path}`)
          }
        }
        resolve()
      })
    },
    connectToWebSocket (sid, wstoken) {
      return new Promise((resolve, reject) => {
        const ws = new WebSocket('wss://websocket.nitrado.net/')

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
          if (this.hardDeploying) {
            const setId = this.selectedGameserverSetting.id
            const sid = this.selectedService.id
            const gameserver = this.selectedServer.data.gameserver
            const ftpuname = gameserver.credentials.ftp.username
            const files = null
            if (wsMessage.type === 'service-log') {
              this.terminalOutput.push(`> reinstalling gameserver since ${wsMessage.data.created_at}`)
            } else if (wsMessage.type === 'status') {
              const serverState = wsMessage.data
              this.terminalOutput.push(`> gameserver is ${serverState}`)
              if (serverState === 'started') {
                if (!this.lastRestart) {
                  this.lastRestart = true
                  this.terminalOutput.push(`> reinstalled`)
                  this.stopGameserver(sid)
                } else {
                  this.lastRestart = false
                  this.terminalOutput.push(`> deploy complete`)
                }
              }
              if ((serverState === 'stopped') && lastRestart) {
                this.terminalOutput.push(`> restoring settings ${setId}`)
                await this.restoreGameServerSettings(sid, setId)
                this.terminalOutput.push(`> uploading xml files to ${ftpuname}`)
                await this.uploadFilesToGameserver(sid, ftpuname, files, res)
                await this.startGameserver(sid)
              }
            } else {
              console.log('hmmmm', wsMessage)
            }
          } else {
            if (wsMessage.type === 'status') {
              this.terminalOutput.push(`status> ${wsMessage.data}`)
            }
            if (wsMessage.type === 'query') {
              const keys = Object.keys(wsMessage.data)
              keys.forEach(key => this.terminalOutput.push(`query> ${key} ${wsMessage.data[key]}`))
            }
          }
        })

        ws.addEventListener('error', (error) => {
          this.terminalOutput.push(`* Error: ${error}`)
          reject(error)
        })

      })
    },
    async onGetServerByService (selectedService) {
      this.serversBusy = true
      this.terminalOutput = []
      this.selectedService = selectedService
      try {
        const options = {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${this.accountForm.nitradoApiKey}`
          }
        }
        this.selectedServer = await fetch(`https://api.nitrado.net/services/${selectedService.id}/gameservers`, options)
          .then(response => response.json())
          .then(json => {
            console.log(json)
            return json
          })
        console.log('onGetServerByService', this.selectedServer)
        const gameserver = this.selectedServer.data.gameserver
        this.terminalOutput.push(`* Acquired gameserver info for ${gameserver.query.server_name} @${gameserver.query.version} running ${gameserver.query.map} for ${gameserver.game_human}.`)
        this.terminalOutput.push(`* Server is ${gameserver.status}, with ${gameserver.query.player_current}/${gameserver.query.player_max} players.`)
      } catch (e) {
        console.log(e)
        this.serversError = e
      }
      try {
        this.connectToWebSocket(selectedService.id, selectedService.websocket_token)
      } catch (e) {
        console.log(e)
        this.serversError = e
      }
      try {
        this.gameserverSettings = await this.getGameserverSettings(selectedService.id)
          .then(response => {
            console.log('response here', response)
            return response.json()
          })
          .then(json => {
            console.log(json)
            return json.data.sets
          })
      } catch (e) {
        console.log(e)
        this.serverError = e
      }
      this.serversBusy = false
    },
    async onGetServices () {
      this.servicesBusy = true
      try {
        const options = {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${this.accountForm.nitradoApiKey}`
          }
        }
        this.services = await fetch(`https://api.nitrado.net/services`, options)
          .then(response => response.json())
          .then(json => json.data.services)
      } catch (e) {
        this.servicesError = e
      }
      this.servicesBusy = false
    },
    onAccount (account) {
      this.accountForm.nitradoApiKey = account.nakey
    },
    async onLoadFile (fileContent, paths) {
      let confirmation = false
      if (this.unsavedChanges) {
        confirmation = await new Promise((resolve, reject) => {
          this.$buefy.dialog.confirm({
            message: 'Commit changes before they are lost?',
            onConfirm: () => resolve(true),
            onCancel: () => resolve(false)
          })
        })
      }
      if (confirmation) {
        this.onCommit()
      }
      this.loadedFile = { fileContent, path: paths.join('/') }
      const content = this.files
        .filter(file => file.path === this.loadedFile.path)
        .reduce((a, c) => c.contents, ``)
      this.editor.session.setValue(content)
      this.unsavedChanges = false
    },
    onDrawAll (fileContent, paths) {
      console.log(fileContent, paths)
    },
    isFile (x) {
      return typeof x === 'string'
    },
    deepObjectSet (path, value) {
      let schema = this.filesTreeHash
      let pList = path.split('/')
      let len = pList.length
      for (let i = 0; i < len - 1; i++) {
        let elem = pList[i]
        if (!schema[elem]) {
          schema[elem] = {}
        }
        schema = schema[elem]
      }

      schema[pList[len - 1]] = value
    },
    onOpenFile (file) {
      const { webkitRelativePath } = file
      const reader = new FileReader()
      reader.onload = (event) => {
        const { target: { result } } = event
        const filePath = webkitRelativePath
        this.files.push({
          path: filePath,
          contents: result
        })
        this.deepObjectSet(filePath, result)
        this.$forceUpdate()
      }
      reader.readAsText(file)
    },
    onOpenFiles (event) {
      const { target: { files } } = event
      files.forEach(this.onOpenFile)
    },
    initResizeObserver () {
      const container = document.getElementsByClassName('sidebar-content')[0]
      const resizeObserver = new ResizeObserver(entries => {
        const height = entries[0].contentRect.height
        document.getElementById('archaeon-xml-editor').style.height = `${height - 50}px`
        document.getElementsByClassName('archaeon-file-menu')[0].style.height = `${height - 50}px`
      })
      resizeObserver.observe(container)
    },
    initOpenFiles () {
      const filesRef = this.$refs['filesInput'].$el.getElementsByTagName('input')[0]
      filesRef.addEventListener('change', this.onOpenFiles)
    },
    onCommit () {
      this.busyCommit = true
      const newContents = this.editor.getValue()
      this.files = [
        ...this.files.filter(file => file.path !== this.loadedFile.path),
        ...this.files.filter(file => file.path === this.loadedFile.path)
          .reduce((accumulator, currentValue) => {
            return [
              {
                ...currentValue,
                contents: newContents
              }
            ]
          }, [])
      ]
      this.busyCommit = false
      this.unsavedChanges = false
    },
    initXmlEditor () {
      this.editor = ace.edit('archaeon-xml-editor')
      this.editor.setTheme('ace/theme/pastel_on_dark')
      this.editor.session.setMode('ace/mode/xml')
      this.editor.session.on('change', (delta) => {
        this.unsavedChanges = true
      })
    },
    onRegistered (user) {
      this.loginForm = {
        uname: user.uname
      }
      this.isLoginModalActive = true
    },
    onLoggedin (user) {
      this.onAuthenticated(user)
    },
    onLogin () {
      this.isLoginModalActive = true
    },
    onLoggedout () {
      this.user = { uname: null, uborn: null }
    },
    onAuthenticated (user) {
      this.user = user
      this.accountForm = {
        username: user.uname,
        nitradoApiKey: user.nakey
      }
    },
    getHeader () {
      const version = this.getPackageVersion
      return `Archaeon v${version}`
    },
    async onTraffic () {
      // this.busy = true
      // this.error = false
      // this.success = false
      try {
        const response = await this.$http.post('http://localhost:8001/api/v2/traffic')
        // this.success = true
        // this.busy = false
      } catch (error) {
        console.log(error)
        // this.error = true
        // this.busy = false
      }
    }
  }
}
</script>

<style>

.spin {
  /* border: 1px solid red; */
  animation: accelerated-spin infinite 3s ease-in-out;
}
@keyframes accelerated-spin {
  to {
    transform: rotate(3600deg);
  }
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
}

#nav a {
  /* font-weight: bold; */
  /* color: #2c3e50; */
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
}

div.archaeon-panel.b-sidebar > div.sidebar-content {
  width: calc(60% + 0px);
  background: rgba(0,0,0,0.8);
  padding: 25px;
  overflow-y: hidden;
}

div.p-1 div.menu {
  margin-bottom: 15px;
  background: rgb(35, 35, 35);
  padding: 5px;
  border: 1px solid #444444;
}

ul.menu-list a {
  color:#ccc;
  padding: 0;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 2px;
  font-size: 12px;
}

ul.menu-list li ul {
  border-left: 0;
  margin: 0;
}

span.file-name {
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
}

div.field.file:not(:last-child) {
  margin-bottom: 0rem;
  margin-right: 5px;
}

label.upload.control > a.button {
  font-size: 12px;
}

span.icon > i.fa-folder {
  color: #ffcb84;;
}

span.icon.is-small {
  height: 1.4rem;
}

div.dialog.modal {
  z-index:100;
}

#archaeon-terminal-container {
  position: fixed;
  bottom:0px;
  width: calc(40%);
  display:flex;
  flex-direction:column;
}

#archaeon-terminal-wrapper {
  border: 1px solid #2f2f2f;
  padding: 10px;
  background-color: rgba(0,0,0,.8);
  height:100%;
}

#archaeon-terminal {
  padding: 10px;
  background-color: rgba(25,25,25);
  color:white;
  font-family: monospace;
  height:100%;
  overflow-y: scroll;
}

.grow-up {
  height: calc(50%);
  animation: animation-grow-up;
  animation-duration: .25s;
  animation-timing-function: ease;
}

.shrink-down {
  height: calc(0% + 46px);
  animation: animation-shrink-down;
  animation-duration: .25s;
  animation-timing-function: ease;
}

@keyframes animation-grow-up {
  from {
    height: calc(0% + 46px);
  }
  to {
    height: calc(50%);
  }
}

@keyframes animation-shrink-down {
  from {
    height: calc(50%);
  }
  to {
    height: calc(0% + 46px);
  }
}

#archaeon-terminal-toggle {
  margin: 5px;
}

#archaeon-terminal-toggle > button, #archaeon-terminal-toggle > div {
  margin-right: 5px;
}

</style>
