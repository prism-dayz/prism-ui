const AccountModal = {
  props: ['header', 'nitradoApiKey', 'username'],
  data () {
      return {
          _nitradoApiKey: null,
          ok: true,
          success: false,
          error: false,
          busy: false
      }
  },
  async mounted () {
      console.log(this)
      if (this.nitradoApiKey) {
          this._nitradoApiKey = this.nitradoApiKey
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
      async fetchAccount () {
          this.busy = true
          this.error = false
          this.success = false
          try {
              const { nitradoApiKey } = this
              const body = {
                  nitradoApiKey
              }
              const response = await this.$http.get(`http://localhost:8001/api/v2/users/${this.username}`, body, {
                  withCredentials: true,
                  emulateJSON: true
              })
              this.success = true
              this.busy = false
              setTimeout(() => {
                  this.$emit('account')
                  this.$parent.close()
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
      },
      async onAccount (event, nitradoApiKey) {
          event.preventDefault()
          this.busy = true
          this.error = false
          this.success = false
          try {
              const body = {
                  nitradoApiKey
              }
              const response = await this.$http.put(`http://localhost:8001/api/v2/users/${this.username}`, body, {
                  withCredentials: true,
                  emulateJSON: true
              })
              this.success = true
              this.busy = false
              setTimeout(() => {
                  this.$emit('account', { nitradoApiKey })
                  this.$parent.close()
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
                <b-field label="Nitrado API Key" :type="getType()">
                    <b-input
                        type="key"
                        v-model="nitradoApiKey"
                        placeholder="Nitrado API Key"
                        :disabled="busy || success"
                        required>
                    </b-input>
                </b-field>

            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary"
                    :class="{
                        'is-success': success,
                        'is-danger': error,
                        'is-warning': busy
                    }"
                    @click="onAccount($event, nitradoApiKey)"
                    style="width:75px;"
                    :disabled="busy || success">
                    <span v-if="!busy && !success && ok">Account</span>
                    <span v-if="busy && !success"><i class="fa fa-sync spin" /></span>
                    <span v-if="!busy && success"><i class="fa fa-check" /></span>
                    <span v-if="!busy && !success && error && !ok"><i class="fa fa-times" /></span>
                </button>
            </footer>
        </div>
    </form>
  `
}

export default AccountModal
