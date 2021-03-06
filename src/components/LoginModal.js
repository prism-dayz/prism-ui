const LoginModal = {
  props: ['header', 'uname'],
  data () {
      return {
          uconfirmed: null,
          rememberMe: false,
          username: null,
          password: null,
          ok: true,
          success: false,
          error: false,
          busy: false
      }
  },
  mounted () {
      console.log(this)
      if (this.uname) {
          this.username = this.uname
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
      async onLogin (event, username, password, rememberMe) {
          event.preventDefault()
          this.busy = true
          this.error = false
          this.success = false
          this.uconfirmed = null
          try {
              const body = {
                  remember_me: rememberMe,
                  username: username,
                  password
              }
              const response = await this.$http.post('http://localhost:8001/api/v2/authenticate', body, {
                  withCredentials: true,
                  emulateJSON: true
              })
              const { body: users } = response
              const user = users.reduce((a,c) => c, {})
              this.success = true
              this.busy = false
              setTimeout(() => {
                  this.$emit('authenticated', user)
                  this.$parent.close()
              }, 1500)
          } catch (error) {
              console.log(error)
              this.ok = false
              this.error = true
              this.busy = false
              if (error.body && error.body.uconfirmed === 0) {
                  this.uconfirmed = 0
              }
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

                <b-message v-if="uconfirmed === 0" type="is-warning" has-icon>
                    Looks like you haven't confirmed your e-mail address yet. Click here to resend confirmation e-mail.
                </b-message>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary"
                    :class="{
                        'is-success': success,
                        'is-danger': error,
                        'is-warning': busy
                    }"
                    @click="onLogin($event, username, password, rememberMe)"
                    style="width:75px;"
                    :disabled="busy || success">
                    <span v-if="!busy && !success && ok">Login</span>
                    <span v-if="busy && !success"><i class="fa fa-sync spin" /></span>
                    <span v-if="!busy && success"><i class="fa fa-check" /></span>
                    <span v-if="!busy && !success && error && !ok"><i class="fa fa-times" /></span>
                </button>
                <b-checkbox v-model="rememberMe">
                    Remember me
                </b-checkbox>
            </footer>
        </div>
    </form>
  `
}

export default LoginModal
