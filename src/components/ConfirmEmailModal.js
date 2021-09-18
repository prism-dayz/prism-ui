const LoginModal = {
  props: ['header', 'token'],
  data () {
      return {
          ok: true,
          success: false,
          error: false,
          busy: false
      }
  },
  mounted () {
    this.onConfirmEmail(this.token)
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
      async onConfirmEmail (token) {
          this.busy = true
          this.error = false
          this.success = false
          try {
              const body = {

              }
              const response = await this.$http.post(`http://localhost:8001/api/v2/confirm-email/${token}`, body, {
                  withCredentials: true,
                  emulateJSON: true
              })
              const { body: userInfo } = response
              console.log(userInfo)
              this.success = true
              this.busy = false
              this.ok = true
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
                <b-field label="Token" :type="getType()">
                    <b-input
                        type="text"
                        v-model="token"
                        placeholder="Token"
                        :disabled="busy || success"
                        required>
                    </b-input>
                </b-field>

                <b-message v-if="success === true" type="is-success" has-icon>
                    Thank you for confirming your email. Click here to login.
                </b-message>
                <b-message v-if="error === true" type="is-danger" has-icon>
                    Something went wrong.
                </b-message>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$router.push({ path: '/' })">Close</button>
                <button class="button is-primary"
                    :class="{
                        'is-success': success,
                        'is-danger': error,
                        'is-warning': busy
                    }"
                    style="width:75px;"
                    :disabled="busy || success">
                    <span v-if="!busy && !success && ok">Confirm</span>
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
