<template>
  <b-menu :accordion="accordion" style="
      padding: 5px;
      background-color: #222;
      margin-bottom: 15px;
      height: 300px;
      overflow-y: scroll;
    " :style="{ 'border': getBorderColor() }">
    <b-menu-list label="Interactive Editor" :accordion="accordion">
      <b-menu-item v-for="(branch, b) in branches" :key="b" :disabled="freeze">
        <template slot="label" slot-scope="props">
          &lt;{{ branch.path }}&gt;
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
        </template>

        <Tree
          :key="treeKey"
          :branches="[branch.xmlDoc.documentElement]"
          @mutate="onMutate"
          :freeze="freeze"
          :circle-color="circleColor"
          :circle-opacity="circleOpacity"
          :circle-radius="circleRadius"
          :circle-weight="circleWeight"
        />

      </b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
import Tree from '@/components/Tree'
const parser = new DOMParser()
export default {
  name: 'DayzXMLTree',
  props: ['files', 'freeze', 'dirty', 'circleColor', 'circleOpacity', 'circleRadius', 'circleWeight'],
  components: {
    Tree
  },
  data () {
    const branches = this.files
      .filter(f => f !== null)
      .map(f => {
        let contents = f.contents.replace(/[\t]*\<\!\-\-[\s]*[\n]*[a0-z9\s\t\n\-\+\.\|\'\/']*\-\-\>/g,'')
        contents = contents.replace(/\n[\s]*/g,'')
        contents = contents.replace(/[↵]*/g,'')
        return {
          ...f,
          xmlDoc: parser.parseFromString(contents, 'text/xml')
        }
      })
    return {
      treeKey: null,
      accordion: false,
      branches
    }
  },
  mounted () {
    this.treeKey = Math.random()
  },
  computed: {
    getBranches () {
      const branches = this.files
        .filter(f => f !== null)
        .map(f => {
          let contents = f.contents.replace(/[\t]*\<\!\-\-[\s]*[\n]*[a0-z9\s\t\n\-\+\.\|\'\/']*\-\-\>/g,'')
          contents = contents.replace(/\n[\s]*/g,'')
          contents = contents.replace(/[↵]*/g,'')
          return {
            ...f,
            xmlDoc: parser.parseFromString(contents, 'text/xml')
          }
        })
      return branches
    }
  },
  methods: {
    getBorderColor () {
      if (this.freeze) {
        return `1px solid blue`
      }
      if (this.dirty) {
        return `1px solid orange`
      }
      return `1px solid #4b4b4b;`
    },
    onMutate () {
      // const serializer = new XMLSerializer()
      // const xmlString = serializer.serializeToString(branch)
      this.$emit('evolve')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
