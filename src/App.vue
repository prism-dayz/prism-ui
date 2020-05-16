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
                      <b-button v-if="user.uname" class="button is-light" :disabled="true" :loading="busy">
                        <i class="fa fa-user" /> &nbsp; {{user.uname}}
                      </b-button>
                      <b-button @click="open = true" class="button is-danger">
                        <i class="fa fa-cogs" /> &nbsp; Panel
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

    <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="open"
    >
      <div class="p-1">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" label="Info"></b-menu-item>
            <b-menu-item icon="settings">
              <template slot="label" slot-scope="props">
                Administrator
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <b-menu-item icon="account" label="Users"></b-menu-item>
              <b-menu-item icon="cellphone-link">
                <template slot="label">
                  Devices
                  <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                    <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                    <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-menu-item>
              <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="account" label="My Account">
              <b-menu-item label="Account data"></b-menu-item>
              <b-menu-item label="Addresses"></b-menu-item>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list>
            <b-menu-item label="Expo" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
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
export default {
  name: 'app',
  data () {
    return {
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
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: true
    }
  },
  components: {
    LoginButton,
    LogoutButton,
    RegisterModal,
    LoginModal
  },
  mounted () {
    this.onTraffic()
  },
  computed: {
    ...mapGetters([
      'getPackageVersion'
    ])
  },
  methods: {
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


</style>
