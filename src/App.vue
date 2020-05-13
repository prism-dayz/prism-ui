<template>
  <div id="app">
    <div id="nav">
      <div v-if="!($route.name === 'Login')">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | 
        <router-link to="/login">Login</router-link> | 
        <router-link to="/register">Register</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.onTraffic()
  },
  methods: {
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
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

header.modal-card-head, footer.modal-card-foot {
  padding: 0px;
  border-radius: 0px;
  font-family: monospace;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 2px;
}

button.button {
  font-family: monospace;
  padding: 0px;
  height: inherit;
  border-radius: 0px;
  padding-left: 5px;
  padding-right: 5px;
}

footer > button.button {
  margin-top:3px;
  margin-bottom:2px;
}

section.modal-card-body {
  padding: 0px;
  padding-left: 5px;
  padding-right: 5px;
}

/* div.field {
  margin: 0px;
} */
div.field:not(:last-child) {
  margin-bottom:0px;
}

label.label:not(:last-child) {
  margin-bottom: 0em;
}
input.input {
  border-radius: 0px;
  padding: 0px;
  height: inherit;
  padding-left: 4px;
  padding-right: 4px;
  font-family: monospace;
}
</style>
