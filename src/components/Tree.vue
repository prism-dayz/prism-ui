<template>
  <div>
    <div v-for="(branch, i) in branches" :key="i">
      <b-menu-item>
        <template slot="label" slot-scope="props">
          <span v-if="branch.nodeType === 3">
            <mutable-input :thing="branch.nodeValue" @mutated="onMutateNodeValue($event, branch)" />
          </span>
          <span v-if="branch.nodeType === 1">
            &lt;{{ branch.nodeName }}
            <span v-for="(attributeName, j) in branch.getAttributeNames()" :key="j">
              {{ attributeName }}="<mutable-input :thing="branch.getAttribute(attributeName)" @mutated="onMutateAttributeValue($event, branch, attributeName)" />" &nbsp;
            </span>
            &gt;
          </span>
          <b-icon v-if="branch.childNodes.length" :icon="props.expanded ? 'caret-down' : 'caret-up'"></b-icon>
        </template>
        <Tree v-if="branch.childNodes" :branches="branch.childNodes" />
      </b-menu-item>
    </div>
  </div>
</template>

<script>
import MutableInput from '@/components/MutableInput'
import Tree from '@/components/Tree'
export default {
  name: 'Tree',
  props: ['branches'],
  components: {
    MutableInput,
    Tree
  },
  mounted () {
    console.log()
  },
  methods: {
    onMutateAttributeValue (newAttributeValue, branch, attributeName) {
      branch.setAttribute(attributeName, newAttributeValue)
      this.$forceUpdate()
    },
    onMutateNodeValue (newNodeValue, branch) {
      branch.nodeValue = newNodeValue
      this.$forceUpdate()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
