<template>
  <div class="login">
    <section>
      <b-modal :active.sync="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        :can-cancel="false"
        aria-role="dialog"
        aria-modal
        >
        <login-modal :header="getHeader()"></login-modal>
      </b-modal>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoginModal from '@/components/LoginModal'
export default {
  name: 'Login',
  components: {
    LoginModal
  },
  data () {
    return {
      isComponentModalActive: true
    }
  },
  computed: {
    ...mapGetters([
      'getPackageVersion'
    ])
  },
  methods: {
    getHeader () {
      const version = this.getPackageVersion
      return `Archaeon v${version}`
    }
  }
}
</script>
