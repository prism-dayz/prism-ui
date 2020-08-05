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
                      <b-button v-if="user.uname" class="button is-light" :loading="busy" @click="isAccountModalActive = !isAccountModalActive" outlined>
                        <i class="fa fa-cog" /> &nbsp; {{user.uname}}
                      </b-button>
                      <b-button @click="open = true" class="button is-warning">
                        <i class="fa fa-tools" /> &nbsp; Mission Editor
                      </b-button>
                      <b-button v-if="user.uname" @click="openPlayerStats = true" class="button is-success">
                        <i class="fa fa-tools" /> &nbsp; Player Stats
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
      :key="Math.random()"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      :can-cancel="false"
      aria-role="dialog"
      aria-modal
      >
      <account-modal :account="accountForm" :header="`Archaeon - Account`" @account="onAccount"></account-modal>
    </b-modal>

    <div id="archaeon-terminal-container" :class="{ 'grow-up': terminalExpanded, 'shrink-down': !terminalExpanded }" style="z-index:2;">
      <div id="archaeon-terminal-toggle">
        <b-button v-if="!services.length" type="is-dark" @click="onGetServices" :loading="servicesBusy" :disabled="!accountForm.nitradoApiKey">
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
        <div id="archaeon-terminal" :style="{ 'height': `${(windowHeight/2) - 65}px`, 'border': '1px solid #999', 'borderRadius': '3px' }">
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
          <b-button outlined type="is-link" size="is-small" style="margin-right:5px;" icon-left="random"
            :disabled="!accountForm.nitradoApiKey"
            >
            Transfer
          </b-button>

          <!-- DOWNLOAD -->
          <b-button type="is-info" size="is-small" style="margin-right:5px;" icon-left="file-download">
            Download
          </b-button>

          <!-- SETTINGS SELECTION -->
          <b-dropdown v-model="selectedGameserverSetting" aria-role="list" :disabled="!accountForm.nitradoApikey">
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
          <b-button type="is-warning" size="is-small" style="margin-right:5px;" icon-left="sign-out-alt"
            :disabled="!accountForm.nitradoApiKey || !selectedGameserverSetting.id"
            >
           Hard Deploy
          </b-button>

          <!-- DEPLOY -->
          <b-button outlined type="is-warning" size="is-small" style="margin-right:5px;" icon-left="sign-in-alt"
            @click="uploadFilesToGameserver(selectedService.id, ftpuname, files)"
            :disabled="!accountForm.nitradoApiKey || !selectedGameserverSetting.id">
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

    <b-sidebar
      class="archaeon-panel"
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="openPlayerStats"
      :can-cancel="false"
    >
      <div class="p-1">

        <!-- ROW (TOP TOOL BAR) -->
        <div class="menu">


          <b-switch v-model="discordBot.on"
            @input="onTurnOnDiscordBotKillfeed"
            type="is-success"
            :disabled="!turnOnPlayerStats && !playerStats.busy"
            >
              <span style="color:white;">Killfeed</span>
          </b-switch>

          <b-switch v-model="turnOnPlayerStats"
            @input="onTurnOnPlayerStats"
            type="is-success"
            :disabled="!accountForm.nitradoApiKey"
            >
              <span v-if="!playerStats.busy" style="color:white;">Stats (idle) {{playerStats.timer}} seconds until refresh</span>
              <span v-if="playerStats.busy" style="color:white;">Stats (busy)</span>
          </b-switch>

          <!-- TOGGLE -->
          <b-button rounded outlined @click="openPlayerStats = !openPlayerStats" type="is-danger" size="is-small" style="margin-left:25px;">
            <b-icon icon="times"></b-icon>
          </b-button>

        </div>

        <!-- STAGE -->
        <div style="display:flex;flex-direction:column;">

          <!-- STATS -->
          <div style="display:flex;flex-drection:row;margin-bottom:10px;justify-content:space-evenly;">

            <div style="overflow-y:scroll;padding:5px;border:1px solid #999;border-radius: 3px;width:250px;"
              :style="{
                'height': `${(windowHeight/2)-60}px`
              }"
              >
              <div style="font-weight:bold;color:orange;">kills</div>
              <div v-for="(kill, key) in playerStats.kills" :key="key" :style="{ 'color': kill.status === 'online' ? 'lime' : '#eee' }">
                <div style="display:flex;justify-content: space-between;">
                  <div>{{ kill.player }}</div>
                  <div>{{ kill.kills }}</div>
                </div>
              </div>
            </div>

            <div style="overflow-y:scroll;padding:5px;border:1px solid #999;border-radius: 3px;width:250px;"
              :style="{
                'height': `${(windowHeight/2)-60}px`
              }"
              >
              <div style="font-weight:bold;color:orange;">deaths</div>
              <div v-for="(death, key) in playerStats.deaths" :key="key" :style="{ 'color': death.status === 'online' ? 'lime' : '#eee' }">
                <div style="display:flex;justify-content: space-between;">
                  <div>{{ death.player }}</div>
                  <div>{{ death.deaths }}</div>
                </div>
              </div>
            </div>

            <div style="overflow-y:scroll;padding:5px;border:1px solid #999;border-radius: 3px;width:250px;"
              :style="{
                'height': `${(windowHeight/2)-60}px`
              }"
              >
              <div style="font-weight:bold;color:orange;">k/d</div>
              <div v-for="(kd, key) in playerStats.kds" :key="key" :style="{ 'color': kd.status === 'online' ? 'lime' : '#eee' }">
                <div style="display:flex;justify-content: space-between;">
                  <div>{{ kd.player }}</div>
                  <div>{{ kd.kds }}</div>
                </div>
              </div>
            </div>

            <div style="overflow-y:scroll;padding:5px;border:1px solid #999;border-radius: 3px;width:250px;"
              :style="{
                'height': `${(windowHeight/2)-60}px`
              }"
              >
              <div style="font-weight:bold;color:orange;">damage</div>
              <div v-for="(damage, key) in playerStats.damage" :key="key" :style="{ 'color': damage.status === 'online' ? 'lime' : '#eee' }">
                <div style="display:flex;justify-content: space-between;">
                  <div>{{ damage.player }}</div>
                  <div>{{ damage.damage }}</div>
                </div>
              </div>
            </div>

            <div style="overflow-y:scroll;padding:5px;border:1px solid #999;border-radius: 3px;width:250px;"
              :style="{
                'height': `${(windowHeight/2)-60}px`
              }"
              >
              <div style="font-weight:bold;color:orange;">meters</div>
              <div v-for="(meter, key) in playerStats.meters" :key="key" :style="{ 'color': meter.status === 'online' ? 'lime' : '#eee' }">
                <div style="display:flex;justify-content: space-between;">
                  <div>{{ meter.player }}</div>
                  <div>{{ meter.meters }}</div>
                </div>
              </div>
            </div>

          </div>

          <!-- SERVER LOG -->
          <pre id="archaeon-server-logs" style="white-space: break-spaces;overflow-y:scroll;width:100%;color:white;background-color:#222;border:1px solid #999;"
            :style="{
              'height': `${(windowHeight/2)-50}px`
            }"
            >
            {{serverLog}}
          </pre>

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
import { Uint8ArrayToStringsTransformer } from '@/utils'
import { Client, MessageEmbed, MessageAttachment, RichEmbed } from 'discord.js'
import html2canvas from 'html2canvas'
import { Buffer } from 'buffer'

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
      serverLog: ``,
      playerStats: {
        timer: 120,
        timeoutTimer: null,
        timeout: null,
        busy: false,
        markers: [],
        meters: [],
        damage: [],
        kills: [],
        deaths: [],
        kds: []
      },
      turnOnPlayerStats: false,
      discordBot: {
        client: null,
        on: false
      },
      openPlayerStats: false,
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
        nitradoApiKey: null,
        discordApiKey: null
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
  watch: {
    serverLog (newValue, oldValue) {
      const terminal = document.getElementById('archaeon-server-logs')
      console.log(terminal.scrollTop, terminal.scrollHeight)
      this.$nextTick(() => {
        terminal.scrollTop = terminal.scrollHeight
      })
    },
    terminalOutput (newValue, oldValue) {
      const terminal = document.getElementById('archaeon-terminal')
      console.log(terminal.scrollTop, terminal.scrollHeight)
      this.$nextTick(() => {
        terminal.scrollTop = terminal.scrollHeight
      })
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
    parseServerLogFromString (serverLogString) {
      this.playerStats.markers.forEach(m => {
        iZurvive._map.removeLayer(m)
        // console.log(m)
      })
      this.playerStats.markers = []
      const playerPositionsHash = {}
      const split = serverLogString.split('\n')
      const transform = split
        .filter(line => line.length > 0)
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

          match = line.match(/\|\sPlayer\s\"[a0-z9\s\/]*\"/g)
          const player = match ? match[0].split('"')[1] : 'ParseWarning'
          match = line.match(/by\sPlayer\s\"[a0-z9\s\/]*\"/g)
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

          return {
            line,
            fromMeters,
            time,
            player,
            byPlayer,
            type,
            forDamage,
            coords
          }
        })
        .filter(line => line.time !== 'Unknown')
        .filter(line => line.type.length > 0)
        .filter(line => line.player !== 'Unknown/Dead Entity')
        .filter(line => line.byPlayer !== 'Unknown/Dead Entity')
      
      // .filter(pc => pc.player.match(/sundaysatan/g))
      transform
        // .filter(pc => pc.player.match(/sundaysatan/g))
        // .filter(pc => {
          // console.log(pc, pc.coords, pc.coords.x && pc.coords.y)
        //   return pc.coords.x && pc.coords.y
        // })
        .forEach(pc => {

          // console.log(pc)
          // console.log(pc.type === '##### PlayerList', pc.type)
          if (pc.type === '##### PlayerList') {
            // console.log('pl')
            Object.keys(playerPositionsHash)
              .forEach(key => iZurvive._map.removeLayer(playerPositionsHash[key]))
          } else if (pc.coords.x && pc.coords.y) {
            const { x, y } = pc.coords

            let color = 'black', fillColor = 'black'

            switch (pc.type) {
              case 'is connected': fillColor = 'lime'; break;
              case 'has been disconnected': fillColor = 'black'; break;
              case 'hit by Player': fillColor = 'orange'; break;
              case 'hit by Infected': fillColor = 'green'; break;
              case 'hit by FallDamage': fillColor = 'yellow'; break;
              case 'killed by Player': fillColor = 'red'; break;
              case '\>\\)$': fillColor = 'aqua'; break;
            }

            const options = (fillColor === 'aqua') ? {
              weight: 5,
              color: 'blue',
              fillColor: fillColor,
              fillOpacity: 0.5,
              radius: 16000
            } : {
              weight: 2,
              color: 'red',
              fillColor: fillColor,
              fillOpacity: 0.75,
              radius: 4000
            }

            // console.log(x, y, pc)

            if (fillColor === 'aqua') {
              const latlng = L.LocUtil.locToCoords({
                loc1: x,
                loc2: y
              }, {
                kx: 0.00039746552365541434,
                ky: 0.00039747543741573465,
                dx: 7961.677966525134,
                dy: 7961.958744725942,
                switchedCoords: false
              })

              playerPositionsHash[pc.player] = L
                .circle([latlng.lat, latlng.lng], options)

              this.playerStats.markers.push(playerPositionsHash[pc.player])

              playerPositionsHash[pc.player].on('mouseover', (e) => {
                const content = `${pc.player} @${pc.time}`
                L.popup()
                  .setLatLng(e.latlng) 
                  .setContent(content)
                  .openOn(iZurvive._map)
              })
              playerPositionsHash[pc.player].addTo(iZurvive._map)
            } else {
              const latlng = L.LocUtil.locToCoords({
                loc1: x,
                loc2: y
              }, {
                kx: 0.00039746552365541434,
                ky: 0.00039747543741573465,
                dx: 7961.677966525134,
                dy: 7961.958744725942,
                switchedCoords: false
              })

              const marker = L
                .circle([latlng.lat, latlng.lng], options)

              marker.on('mouseover', (e) => {
                const content = `${pc.player} ${pc.type} ${pc.byPlayer} from ${pc.fromMeters} meters @${pc.time}`
                L.popup()
                  .setLatLng(e.latlng) 
                  .setContent(content)
                  .openOn(iZurvive._map)
              })
              marker.addTo(iZurvive._map)
              this.playerStats.markers.push(marker)
            }
          }

        })

      const damageHash = {}
      const metersHash = {}
      const killsHash = {}
      const deathsHash = {}
      const statusHash = {}
      const kdsHash = {}

      transform
        .forEach(line => {
          if (line.type === 'is connected') {
            statusHash[line.player] = 'online'
          }
          if (line.type === 'has been disconnected') {
            statusHash[line.player] = 'offline'
          }
        })

      transform
        .forEach(line => {
          if (!damageHash[line.byPlayer]) {
            damageHash[line.byPlayer] = 0
          }
          damageHash[line.byPlayer] += line.forDamage
        })

      transform
        .forEach(line => {
          if (!metersHash[line.byPlayer]) {
            metersHash[line.byPlayer] = line.fromMeters
          }
          metersHash[line.byPlayer] = line.fromMeters > metersHash[line.byPlayer] ? line.fromMeters : metersHash[line.byPlayer]
        })

      transform
        .filter(line => line.byPlayer !== 'Unknown')
        .filter(line => {
          return line.type === 'killed by Player'
        })
        // A killed by Player B
        .forEach(line => {
          killsHash[`${line.byPlayer}`] = killsHash[`${line.byPlayer}`] !== undefined ? killsHash[`${line.byPlayer}`] + 1 : 1
          deathsHash[`${line.player}`] = deathsHash[`${line.player}`] !== undefined ? deathsHash[`${line.player}`] + 1 : 1
        })

      transform
        .filter(line => line.byPlayer !== 'Unknown')
        .forEach(line => {
          const { player, byPlayer } = line
          const playerKills = killsHash[player] ? killsHash[player] : 0
          const playerDeaths = deathsHash[player] ? deathsHash[player] : 0
          if ((playerKills < 1) && (playerDeaths < 1)) {
            kdsHash[`${player}`] = 0
          } else {
            kdsHash[`${player}`] = (playerKills/(playerDeaths + 1)).toFixed(2)
          }
        })

      const metersKeys = Object.keys(metersHash)
      const meters = metersKeys.map(key => ({
        player: key,
        meters: metersHash[key],
        status: statusHash[key]
      }))

      const damageKeys = Object.keys(damageHash)
      const damage = damageKeys.map(key => ({
        player: key,
        damage: damageHash[key],
        status: statusHash[key]
      }))

      const killsKeys = Object.keys(killsHash)
      const kills = killsKeys.map(key => ({
        player: key,
        kills: killsHash[key],
        status: statusHash[key]
      }))

      const deathsKeys = Object.keys(deathsHash)
      const deaths = deathsKeys.map(key => ({
        player: key,
        deaths: deathsHash[key],
        status: statusHash[key]
      }))

      const kdsKeys = Object.keys(kdsHash)
      const kds = kdsKeys.map(key => ({
        player: key,
        kds: kdsHash[key],
        status: statusHash[key]
      }))

      meters.sort((a,b) => parseFloat(b.meters) - parseFloat(a.meters))
      this.playerStats.meters = meters.map((stat, i) => ({ ...stat, rank: i + 1 }))
      damage.sort((a,b) => b.damage - a.damage)
      this.playerStats.damage = damage.map((stat, i) => ({ ...stat, rank: i + 1 }))
      kills.sort((a,b) => b.kills - a.kills)
      this.playerStats.kills = kills.map((stat, i) => ({ ...stat, rank: i + 1 }))
      deaths.sort((a,b) => b.deaths - a.deaths)
      this.playerStats.deaths = deaths.map((stat, i) => ({ ...stat, rank: i + 1 }))
      kds.sort((a,b) => b.kds - a.kds)
      this.playerStats.kds = kds.map((stat, i) => ({ ...stat, rank: i + 1 }))
    },
    nitradoApiRequest (method, path) {
      const options = {
        'method': method,
        'headers': {
          'Authorization': `Bearer ${this.accountForm.nitradoApiKey}`
        }
      }
      return fetch(`https://api.nitrado.net${path}`, options)
    },
    onTurnOnDiscordBotKillfeed (value) {
      if (value === true) {
        this.discordBot.client = new Client()
        const client = this.discordBot.client
        const prefix = '!'

        client.once('ready', () => {
          client.guilds.cache.find(guild => console.log(guild))
          const experimental = client.channels.cache.find(channel => channel.name === 'killbox')
          // experimental.send('i have been summoned')
        })

        client.on('message', async message => {
          console.log(`bot recieved message`, message)
          if (message.content.substring(0,5) === '!rank') {
            if (message.content.substring(6,8) === 'kd') {
              const targetPlayerName = message.content.substring(9,message.content.length)
              const rank = this.playerStats.kds
                .filter(({ player }) => player === targetPlayerName)
                .reduce((a,c,i) => `Player _${c.player}_ ranked ${c.rank}/${this.playerStats.kds.length} with a ${c.kds} k/d ratio.`, ``)
              if (rank.length > 1) {
                message.channel.send(rank)
              } else {
                message.channel.send(`Player _${targetPlayerName}_ not ranked.`)
              }
            } else if (message.content.substring(6,11) === 'kills') {
              const targetPlayerName = message.content.substring(12,message.content.length)
              const rank = this.playerStats.kills
                .filter(({ player }) => player === targetPlayerName)
                .reduce((a,c,i) => `Player _${c.player}_ ranked ${c.rank}/${this.playerStats.kills.length} with ${c.kills} kills.`, ``)
              if (rank.length > 1) {
                message.channel.send(rank)
              } else {
                message.channel.send(`Player _${targetPlayerName}_ not ranked.`)
              }
            } else if (message.content.substring(6,12) === 'deaths') {
              const targetPlayerName = message.content.substring(13,message.content.length)
              const rank = this.playerStats.deaths
                .filter(({ player }) => player === targetPlayerName)
                .reduce((a,c,i) => `Player _${c.player}_ ranked ${c.rank}/${this.playerStats.deaths.length} with ${c.deaths} deaths.`, ``)
              if (rank.length > 1) {
                message.channel.send(rank)
              } else {
                message.channel.send(`Player _${targetPlayerName}_ not ranked.`)
              }
            } else if (message.content.substring(6,12) === 'damage') {
              const targetPlayerName = message.content.substring(13,message.content.length)
              const rank = this.playerStats.damage
                .filter(({ player }) => player === targetPlayerName)
                .reduce((a,c,i) => `Player _${c.player}_ ranked ${c.rank}/${this.playerStats.damage.length} causing ${c.damage} damage.`, ``)
              if (rank.length > 1) {
                message.channel.send(rank)
              } else {
                message.channel.send(`Player _${targetPlayerName}_ not ranked.`)
              }
            } else if (message.content.substring(6,12) === 'meters') {
              const targetPlayerName = message.content.substring(13,message.content.length)
              const rank = this.playerStats.meters
                .filter(({ player }) => player === targetPlayerName)
                .reduce((a,c,i) => `Player _${c.player}_ ranked ${c.rank}/${this.playerStats.kills.length} with longest shot ${c.meters} meters.`, ``)
              if (rank.length > 1) {
                message.channel.send(rank)
              } else {
                message.channel.send(`Player _${targetPlayerName}_ not ranked.`)
              }
            } else {
              message.channel.send(`usage: !rank <kd,kills,deaths,damage,meters> <player-name> \n\te.g., !rank kd sundaysatan\n\tnote: player names are case sensitive`)
            }
          }
          if (message.content.substring(0,12) === '!leaderboard') {
            console.log('leaderboard')
            if (message.content.substring(13,15) === 'kd') {
              const stats = this.playerStats.kds
                .map(({ player, kds, rank }) => `${(parseInt(rank) < 10 ? ` ${rank}` : rank)} | ${(kds < 10) ? ` ${kds}` : kds} | ${player}\n`)
                .filter((stat, i) => i < 25)
                .reduce((a,c) => `${a}${c}`, ``)
              const statsWrapper = `\`\`\` # | k/d   | survivor\n${stats}\`\`\``
              console.log(statsWrapper)
              message.channel.send(statsWrapper)
            } else if (message.content.substring(13,18) === 'kills') {
              const stats = this.playerStats.kills
                .map(({ player, kills, rank }) => `${(parseInt(rank) < 10 ? ` ${rank}` : rank)} |   ${(kills < 10) ? `  ${kills}` : ((kills < 100) ? ` ${kills}` : kills)} | ${player}\n`)
                .filter((stat, i) => i < 25)
                .reduce((a,c) => `${a}${c}`, ``)
              const statsWrapper = `\`\`\` # | kills | survivor\n${stats}\`\`\``
              console.log(statsWrapper)
              message.channel.send(statsWrapper)
            } else {
              message.channel.send(`usage: !leaderboard <kd,kills> \n\te.g., !leaderboard kd`)
            }
          }
          if (message.content.substring(0,5) === '!map') {
            html2canvas(document.querySelector('#map'), { allowTaint: true, foreignObjectRendering: true, useCORS: true })
              .then(canvas => {
                canvas.toBlob(async blob => {
                  const uintArrayBuffer = await blob.arrayBuffer()
                  const attachment = new MessageAttachment(uintArrayBuffer, 'heatmap.png')
                  message.channel.send(attachment)
                })

                // const imageDataUrl = canvas.toDataURL('image/png')
                // console.log('imagedata', imageDataUrl)
                // const encoder = new TextEncoder()
                // const uintArrayBuffer = encoder.encode(imageDataUrl)
                // const attachment = new MessageAttachment(uintArrayBuffer.buffer, 'heatmap.png')
                // message.channel.send(attachment)

                // const imageDataUrl = canvas.toDataURL('image/png')
                // console.log('imagedata', imageDataUrl)
                // const encoder = new TextEncoder()
                // const uintArrayBuffer = encoder.encode(imageDataUrl)
                // const attachment = new MessageEmbed(uintArrayBuffer.buffer, 'heatmap.png')
                // message.channel.send({ embed: attachment })
              })
          }
          // const guildMembers = message.mentions.members.array()
          // guildMembers.filter(({ user }) => user.username === 'rooster')
          //   .forEach(() => {
          //     message.reply('oy')
          //   })
        })

        client.login(this.accountForm.discordApiKey)
        
      } else {
        if (this.discordBot.client) {
          this.discordBot.client.destroy()
        }
      }
    },
    async onTurnOnPlayerStats (value) {
      if (value === true) {
        try {
          this.playerStats.busy = true
          const method = 'GET'
          const sid = this.selectedService.id
          const gameserver = this.selectedServer.data.gameserver
          const logFile = gameserver.game_specific.log_files.length > 0 ? gameserver.game_specific.log_files[0].replace('dayzxb/','') : ``
          const filePath = gameserver.game_specific.path
          if (logFile.length > 0) {
            const file = `${filePath}${logFile}`
            const path = `/services/${sid}/gameservers/file_server/download?file=${file}`
            const response = await this.nitradoApiRequest(method, path)
              .then(response => response.json())
            console.log('log', response)
            const url = response.data.token.url
            console.log('url', url)
            const method1 = 'GET'
            const path1 = url
            const response1 = await fetch(path1, { method: method1 })
              .then(response => response.body)
            const readableStream = response1
            console.log('response1', response1)
            const ts = new TransformStream(new Uint8ArrayToStringsTransformer())
            const reader = readableStream.pipeThrough(ts).getReader()
            let i = 0, accumulator = ``
            while (true) {
                const { done, value } = await reader.read()
                if (value) {
                  accumulator = `${accumulator}${value}\n`
                }
                if (done) break
            }
            this.serverLog = accumulator
            if (this.serverLogPrevLength < 1) {
              this.serverLogPrevLength = this.serverLog.length
            }
            if (this.serverLog.length > this.serverLogPrevLength) {
              const newLines = this.serverLog.substring(this.serverLogPrevLength, this.serverLog.length)
              newLines.split('\n')
                .forEach(value => {
                  if (value.match(/killed by Player/g)) {
                    console.log(value)
                    const victim = value.match(/\|\sPlayer\s\"[a0-z9\s\/]*\"/g)
                      .reduce((a,c) => c.split('"')[1], ``)
                    const killer = value.match(/by\sPlayer\s\"[a0-z9\s\/]*\"/g)
                      .reduce((a,c) => c.split('"')[1], ``)
                    const weapon = value.match(/with\s[a0-z9\/\-]*/g)[0]
                      .split(' ')[1]
                    // cuz sometimes it's not there
                    let meters = value.match(/from\s[0-9]*\.[0-9]*\smeters/g)
                    meters = meters ? meters.reduce((a,c) => c.split(' ')[1], ``) : `0`
                    console.log(victim, killer, weapon, meters)
                    const client = this.discordBot.client
                    client.guilds.cache.find(guild => console.log(guild))
                    const experimental = client.channels.cache.find(channel => channel.name === 'killbox')
                    let feed = `__${killer}__ killed _${victim}_ with ${weapon}`
                    feed = meters === `0` ? feed : `${feed} from ${meters} meters`
                    feed = `${feed}.`
                    experimental.send(feed)
                  }
                })
            }
            this.serverLogPrevLength = this.serverLog.length
            this.parseServerLogFromString(this.serverLog)
            this.playerStats.timer = 120
            this.playerStats.timeout = setTimeout(() => {
              this.onTurnOnPlayerStats(true)
            }, 120000)
            clearInterval(this.playerStats.timeoutTimer)
            this.playerStats.timeoutTimer = setInterval(() => {
              this.playerStats.timer--
            }, 1000)
            this.playerStats.busy = false
          }
        } catch (e) {
          console.log(e)
        }
      } else {
        clearInterval(this.playerStats.timeoutTimer)
        clearTimeout(this.playerStats.timeout)
      }
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
      console.log('on account from app', account)
      this.accountForm = { ...account }
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
        nitradoApiKey: user.nakey,
        discordApiKey: user.dakey
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
