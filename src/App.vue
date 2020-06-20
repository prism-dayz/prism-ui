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

    <section class="hero is-fullheight" style="min-height:calc(100vh - 52px);">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <span style="background-color:#333;color:white;font-size:30px;">Archaeon</span>
          </h1>
          <h2 class="subtitle">
            <span style="background-color:#333;color:white;font-size:20px;">DayZ Nitrado Gameserver Customization</span>
          </h2>
        </div>
      </div>
    </section>

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

    <div id="archaeon-terminal-container" :class="{ 'grow-up': terminalExpanded, 'shrink-down': !terminalExpanded }">
      <div id="archaeon-terminal-toggle">
        <b-button type="is-dark" @click="terminalExpanded = !terminalExpanded">
          <b-icon icon="server"></b-icon>
          <b-icon :icon="terminalExpanded ? 'arrow-down' : 'arrow-up'"></b-icon>
        </b-button>
      </div>
      <div id="archaeon-terminal-wrapper">
        <div id="archaeon-terminal">Output here...</div>
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

          <!-- UPLOAD -->
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
          <b-button type="is-info" size="is-small" style="margin-right:5px;">
            Download
          </b-button>

          <!-- DOWNLOAD -->
          <b-button type="is-warning" size="is-small" style="margin-right:5px;">
            Deploy
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
                  <b-menu-item v-if="isFile(filesTreeHash[fileKey])" icon="file" :label="fileKey" @click="onLoadFile(filesTreeHash[fileKey], fileKey)"></b-menu-item>
                  <b-menu-item v-else icon="folder">
                    <template slot="label" slot-scope="props">
                      {{fileKey}}
                      <!-- <b-icon class="is-pulled-right" :icon="props.expanded ? 'arrow-down' : 'arrow-up'"></b-icon> -->
                    </template>
                    <div v-for="(ffileKey, ff) in Object.keys(filesTreeHash[fileKey])" :key="ff">
                      <b-menu-item v-if="isFile(filesTreeHash[fileKey][ffileKey])" icon="file" :label="ffileKey" @click="onLoadFile(filesTreeHash[fileKey][ffileKey], [fileKey, ffileKey])"></b-menu-item>
                      <b-menu-item v-else icon="folder">
                        <template slot="label" slot-scope="props">
                          {{ffileKey}}
                          <!-- <b-icon class="is-pulled-right" :icon="props.expanded ? 'arrow-down' : 'arrow-up'"></b-icon> -->
                        </template>

                        <div v-for="(fffileKey, fff) in Object.keys(filesTreeHash[fileKey][ffileKey])" :key="fff">
                          <b-menu-item v-if="isFile(filesTreeHash[fileKey][ffileKey][fffileKey])" icon="file" :label="fffileKey" @click="onLoadFile(filesTreeHash[fileKey][ffileKey][fffileKey], [fileKey, ffileKey, fffileKey])"></b-menu-item>
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
import LoginModal from '@/components/LoginModal'
import RegisterModal from '@/components/RegisterModal'
import LogoutButton from '@/components/LogoutButton'
import LoginButton from '@/components/LoginButton'
import AccountModal from '@/components/AccountModal'
export default {
  name: 'app',
  data () {
    return {
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
  mounted () {
    this.onTraffic()
    this.initXmlEditor()
    this.initOpenFiles()
    this.initResizeObserver()
  },
  computed: {
    ...mapGetters([
      'getPackageVersion'
    ])
  },
  methods: {
    onAccount (account) {
      this.accountForm.nitradoApiKey = account.nakey
    },
    onLoadFile (fileContent, paths) {
      this.editor.session.setValue(fileContent)
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
    initXmlEditor () {
      this.editor = ace.edit('archaeon-xml-editor')
      this.editor.setTheme('ace/theme/pastel_on_dark')
      this.editor.session.setMode('ace/mode/xml')
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

div.field:not(:last-child) {
  margin-bottom: 0rem;
  margin-right: 5px;
}

label.upload.control > a.button {
  font-size: 12px;
}

span.icon > i.fa-folder {
  color: #ffcb84;;
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
  color:#ccc;
  font-family: monospace;
  height:100%;
}

.grow-up {
  height: calc(50%);
  animation: animation-grow-up;
  animation-duration: .25s;
  animation-timing-function: ease;
}

.shrink-down {
  height: calc(0% + 50px);
  animation: animation-shrink-down;
  animation-duration: .25s;
  animation-timing-function: ease;
}

@keyframes animation-grow-up {
  from {
    height: calc(0% + 50px);
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
    height: calc(0% + 50px);
  }
}

#archaeon-terminal-toggle {
  margin: 5px;
}

</style>
