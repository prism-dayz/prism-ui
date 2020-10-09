<template>
  <div class="confirm-email">
    <section>
      <b-modal :active.sync="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        :can-cancel="false"
        aria-role="dialog"
        aria-modal
        >
        <confirm-email-modal :header="getHeader()" :token="$route.params.token"></confirm-email-modal>
      </b-modal>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ConfirmEmailModal from '@/components/ConfirmEmailModal'
export default {
  name: 'Login',
  components: {
    ConfirmEmailModal
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
