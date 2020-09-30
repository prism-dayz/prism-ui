<template>
  <div :key="Math.random()">
    <div v-for="(branch, i) in branches" :key="i">
      <b-menu-item :disabled="freeze">
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
          <b-icon v-if="branch.childNodes.length" style="font-size:12px;width:20px;padding-right:8px;" :icon="props.expanded ? 'caret-down' : 'caret-up'"></b-icon>
          <b-icon :icon="'clone'" style="font-size:8px;width:12px;color:magenta;opacity:.5;" @click.native="onClone(branch, i)"></b-icon>
          <b-icon :icon="'eye-dropper'" style="font-size:8px;width:12px;color:aqua;opacity:.5;" @click.native="onCloneAndAug(branch, i)"></b-icon>
          <b-icon :icon="'times'" style="font-size:8px;width:12px;color:red;opacity:.5;" @click.native="onDelete(branch, i)"></b-icon>
        </template>
        <Tree v-if="branch.childNodes" :branches="branch.childNodes" :key="Math.random()" @mutate="$emit('mutate')" :freeze="freeze" />
      </b-menu-item>
    </div>
  </div>
</template>

<script>
import MutableInput from '@/components/MutableInput'
import Tree from '@/components/Tree'
export default {
  name: 'Tree',
  props: ['branches','freeze'],
  components: {
    MutableInput,
    Tree
  },
  mounted () {
    console.log()
  },
  methods: {
    onClone (branch, i) {
      console.log(branch, i)
      const clone = branch.cloneNode(true)
      branch.parentNode.appendChild(clone)
      this.onUpdate()
    },
    onCloneAndAug (branch, i) {
      console.log(branch, i)
      const clone = branch.cloneNode(true)
      branch.parentNode.appendChild(clone)
      this.onUpdate()
    },
    onDelete (branch, i) {
      console.log(branch, i)
      branch.parentNode.removeChild(branch)
      this.onUpdate()
    },
    onMutateAttributeValue (newAttributeValue, branch, attributeName) {
      branch.setAttribute(attributeName, newAttributeValue)
      this.onUpdate()
    },
    onMutateNodeValue (newNodeValue, branch) {
      branch.nodeValue = newNodeValue
      this.onUpdate()
    },
    onUpdate () {
      this.$emit('mutate')
      this.$forceUpdate()
      console.log('updated')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
