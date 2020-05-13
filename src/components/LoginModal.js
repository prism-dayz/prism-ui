const LoginModal = {
  props: ['header'],
  data () {
      return {
          username: null,
          password: null,
          ok: true,
          success: false,
          error: false,
          busy: false
      }
  },
  methods: {
      getType () {
          if (this.success) {
              return 'is-success'
          }
          if (this.error) {
              return 'is-danger'
          }
          if (this.busy) {
              return 'is-warning'
          }
      },
      async onLogin (event, username, password) {
          event.preventDefault()
          this.busy = true
          this.error = false
          this.success = false
          try {
              const body = {
                  username: username,
                  password
              }
              const response = await this.$http.post('http://localhost:8001/api/v2/authenticate', body, {
                  withCredentials: true,
                  emulateJSON: true
              })
              this.success = true
              this.busy = false
              setTimeout(() => {
                  this.$router.push({
                      path: '/dashboard'
                  })
              }, 1500)
          } catch (error) {
              console.log(error)
              this.ok = false
              this.error = true
              this.busy = false
              setTimeout(() => {
                  this.ok = true
              }, 1500)
          }
      }
  },
  template: `
    <form action="">
        <div class="modal-card" style="width: 500px;">
            <header class="modal-card-head">
                <p class="modal-card-title">{{header}}</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Username" :type="getType()">
                    <b-input
                        type="username"
                        v-model="username"
                        placeholder="Your username"
                        :disabled="busy || success"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Password" :type="getType()">
                    <b-input
                        type="password"
                        v-model="password"
                        password-reveal
                        placeholder="Your password"
                        :disabled="busy || success"
                        required>
                    </b-input>
                </b-field>

                <b-checkbox style="margin-top:8px;" :disabled="busy || success">Remember me</b-checkbox>
                <div style="height: 15px;
                    padding-bottom: -10px;
                    line-height: 9px;
                    margin-bottom: 3px;"
                    >
                    <router-link to="/register" :disabled="busy || success">
                        <span style="font-size:10px;">Register</span>
                    </router-link>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-primary"
                    :class="{
                        'is-success': success,
                        'is-danger': error,
                        'is-warning': busy
                    }"
                    @click="onLogin($event, username, password)"
                    style="width:75px;"
                    :disabled="busy || success">
                    <span v-if="!busy && !success && ok">Login</span>
                    <span v-if="busy && !success"><i class="fa fa-sync spin" /></span>
                    <span v-if="!busy && success"><i class="fa fa-check" /></span>
                    <span v-if="!busy && !success && error && !ok"><i class="fa fa-times" /></span>
                </button>
            </footer>
        </div>
    </form>
  `
}

export default LoginModal
