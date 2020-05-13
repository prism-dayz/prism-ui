<template>
  <div class="dashboard">
    <section>
      dashboard
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'getPackageVersion'
    ])
  },
  methods: {

  }
}
</script>
