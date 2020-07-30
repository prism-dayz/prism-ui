const LoginButton = {
  props: ['user'],
  data () {
    return {
      busy: false,
      success: false,
      error: false
    }
  },
  async mounted () {
    await this.getMe()
  },
  methods: {
    async getMe () {
      this.busy = true
      this.error = false
      this.success = false
      try {
        const response = await this.$http.get('http://localhost:8001/api/v2/me', null, {
          withCredentials: true,
          emulateJSON: true
        })
        this.success = true
        this.busy = false
        const { body: users } = response
        const user = users.reduce((a,c) => c, {})
        this.$emit('loggedin', user)
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
    <b-button class="button is-info" @click="$emit('login')" :disabled="busy" :loading="busy">
      Log in
    </b-button>
  `
}

export default LoginButton
