<template>
  <b-menu :accordion="accordion" style="
      border: 1px solid #4b4b4b;
      padding: 5px;
      background-color: #222;
      margin-bottom: 15px;
      height: 300px;
      overflow-y: scroll;
    ">
    <b-menu-list label="Interactive Editor" :accordion="accordion">
      <b-menu-item v-for="(branch, b) in getBranches" :key="b">
        <template slot="label" slot-scope="props">
          &lt;{{ branch.path }}&gt;
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
        </template>

        <Tree :branches="[branch.xmlDoc.documentElement]" />

      </b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
import Tree from '@/components/Tree'
const parser = new DOMParser()
export default {
  name: 'DayzXMLTree',
  props: ['files'],
  components: {
    Tree
  },
  data () {
    return {
      accordion: false
    }
  },
  computed: {
    getBranches () {
      const branches = this.files
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
