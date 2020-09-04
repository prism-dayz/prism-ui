<template>
  <span class="mutable-input-container">
    <span v-on:dblclick="showInput = true">
      <span v-if="!showInput" class="tree-leaf">{{thing}}</span>
      <input v-if="showInput" class="tree-leaf-input" v-model="thingLocal" :placeholder="thing" v-on:keyup.enter="onValueChange" v-on:keyup.esc="showInput = false" />
    </span>
  </span>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'mutable-input',
  props: ['thing'],
  data () {
    return {
      showInput: false,
      thingLocal: null
    }
  },
  methods: {
    onValueChange (newThing) {
      this.showInput = false
      this.$emit('mutated', this.thingLocal)
    }
  },
  mounted () {
    this.thingLocal = this.thing
  }
}
</script>

<style lang="css">
  .tree-leaf-input {
    outline: none;
    background-color:#333;
    border:0px;
    padding:0px;
    margin:0px;
    color: lime;
    font-size: 12px;
    font-family: monospace;
  }
  .tree-leaf-input:focus {
    box-shadow: 0 0 5px lime;
  }
  .tree-leaf {
    background-color:#333;
    color:lime;
  }
</style>
