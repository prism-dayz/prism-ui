<template>
  <div class="register">
    <section>
      <b-modal :active.sync="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        :can-cancel="false"
        aria-role="dialog"
        aria-modal
        >
        <register-modal v-bind="formProps" :header="getHeader()"></register-modal>
      </b-modal>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RegisterModal from '@/components/RegisterModal'
export default {
  name: 'Register',
  components: {
    RegisterModal
  },
  data () {
    return {
      isComponentModalActive: true,
      formProps: {
        email: 'rainbows@clouds.io',
        password: 'sugarcane'
      }
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
