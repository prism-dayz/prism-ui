const LogoutButton = {
  props: ['user'],
  data () {
      return {
        busy: false,
        success: false,
        error: false
      }
  },
  methods: {
      async onLogout () {
          this.busy = true
          this.error = false
          this.success = false
          try {
              const response = await this.$http.get('http://localhost:8001/api/v2/unauthenticate', null, {
                  withCredentials: true
              })
              this.success = true
              this.busy = false
              this.$emit('loggedout')
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
    <b-button class="button is-danger" @click="onLogout" :disabled="busy" :loading="busy">
      Log out
    </b-button>
  `
}

export default LogoutButton
