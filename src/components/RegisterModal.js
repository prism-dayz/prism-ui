const RegisterModal = {
  props: ['header'],
  data () {
      return {
          ok: true,
          email: null,
          username: null,
          password: null,
          passwordConfirm: null,
          passwordsMatch: true,
          success: false,
          error: false,
          busy: false
      }
  },
  methods: {
      async onRegister (event, email, username, password, passwordConfirm) {
          event.preventDefault()
          this.error = false
          this.success = false
          this.passwordsMatch = true
          if (!this.$refs.registerForm.checkValidity()) {
              this.error = true
              this.ok = false
              this.passwordsMatch = false
              setTimeout(() => {
                  this.ok = true
              }, 1500)
              return
          }
          if (password !== passwordConfirm) {
              this.error = true
              this.ok = false
              this.passwordsMatch = false
              setTimeout(() => {
                  this.ok = true
              }, 1500)
              return
          }
          this.busy = true
          try {
              const body = {
                  email,
                  username,
                  password
              }
              const response = await this.$http.post('http://localhost:8001/api/v2/register', body, {
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
              this.error = true
              this.busy = false
          }
      }
  },
  template: `
    <form action="" ref="registerForm">
        <div class="modal-card" style="width: 500px;">
            <header class="modal-card-head">
                <p class="modal-card-title">{{header}}</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Email">
                    <b-input
                        type="email"
                        v-model="email"
                        placeholder="Your email"
                        max-length="50"
                        min-length="10"
                        :disabled="busy || success"
                        :class="{
                            'is-success': success,
                            'is-danger': error,
                            'is-warning': busy
                        }"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Username">
                    <b-input
                        type="text"
                        v-model="username"
                        placeholder="Your username"
                        max-length="12"
                        min-length="3"
                        :disabled="busy || success"
                        :class="{
                            'is-success': success,
                            'is-danger': error,
                            'is-warning': busy
                        }"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Password">
                    <b-input
                        type="password"
                        v-model="password"
                        placeholder="Your password"
                        max-length="16"
                        min-length="8"
                        :disabled="busy || success"
                        :class="{
                            'is-success': success,
                            'is-danger': !passwordsMatch || error,
                            'is-warning': busy
                        }"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Password Confirm">
                    <b-input
                        type="password"
                        v-model="passwordConfirm"
                        placeholder="Confirm password"
                        max-length="16"
                        min-length="8"
                        :disabled="busy || success"
                        :class="{
                            'is-success': success,
                            'is-danger': !passwordsMatch || error,
                            'is-warning': busy
                        }"
                        required>
                    </b-input>
                </b-field>

                <b-checkbox style="margin-top:8px;">Remember me</b-checkbox>
                <br />
                <router-link to="/login" :disabled="busy || success">
                    <span style="font-size:10px;">Login</span>
                </router-link>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-primary"
                    :class="{
                        'is-success': success,
                        'is-danger': error,
                        'is-warning': busy
                    }"
                    @click="onRegister($event, email, username, password, passwordConfirm)"
                    style="width:85px;"
                    :disabled="busy || success">
                    <span v-if="!busy && !success && ok">Register</span>
                    <span v-if="busy && !success"><i class="fa fa-sync spin" /></span>
                    <span v-if="!busy && success"><i class="fa fa-check" /></span>
                    <span v-if="!busy && !success && error && !ok"><i class="fa fa-times" /></span>
                </button>
            </footer>
        </div>
    </form>
  `
}

export default RegisterModal
