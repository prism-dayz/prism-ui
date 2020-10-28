<template>
  <div>
    <div v-for="(branch, i) in branches" :key="i">
      <b-menu-item :disabled="freeze">
        
        <template slot="label" slot-scope="props">

          <span v-if="branch.nodeType === 3">
            <mutable-input :thing="branch.nodeValue" @mutated="onMutateNodeValue($event, branch)" />
          </span>

          <span v-if="branch.nodeType === 1">
            &lt;{{ branch.nodeName }}
            <span v-for="(attributeName, j) in branch.getAttributeNames()" :key="j">
              {{ attributeName }}="<mutable-input :thing="branch.getAttribute(attributeName)" @mutated="onMutateAttributeValue($event, branch, attributeName, i)" />" &nbsp;
            </span>
            &gt;
          </span>

          <b-icon v-if="branch.childNodes.length" style="font-size:12px;width:20px;padding-right:8px;" :icon="props.expanded ? 'caret-down' : 'caret-up'"></b-icon>
          <b-icon v-if="branch.childNodes.length" :icon="'pencil-alt'" style="font-size:8px;width:12px;color:aqua;opacity:.5;" @click.native="onDraw(branch, i)"></b-icon>
          <b-icon :icon="'clone'" style="font-size:8px;width:12px;color:magenta;opacity:.5;" @click.native="onClone(branch, i)"></b-icon>
          <b-icon v-if="!branch.childNodes.length" :icon="'eye-dropper'" style="font-size:8px;width:12px;color:aqua;opacity:.5;" @click.native="onCloneAndAug(branch, i)"></b-icon>
          <b-icon :icon="'times'" style="font-size:8px;width:12px;color:red;opacity:.5;" @click.native="onDelete(branch, i)"></b-icon>

        </template>

        <Tree ref="treeRef" :key="treeId" v-if="branch.childNodes" :branches="branch.childNodes" @mutate="onMutate" :freeze="freeze" />

      </b-menu-item>
    </div>
  </div>
</template>

<script>
import MutableInput from '@/components/MutableInput'
import Tree from '@/components/Tree'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default {
  name: 'Tree',
  props: ['branches','freeze'],
  components: {
    MutableInput,
    Tree
  },
  data () {
    return {
      shouldEmitMutate: false,
      treeId: null
    }
  },
  mounted () {
    console.log()
    this.treeId = Math.random()
  },
  methods: {
    onDraw (branch, i) {
      const fillColor = getRandomColor()
      const circles = [ ...branch.childNodes ]
        .filter(childNode => childNode.nodeName === 'pos')
        .map((childNode, childNodeIndex) => {
          const latLng = L.LocUtil.locToCoords({
            loc1: childNode.getAttribute('x'),
            loc2: childNode.getAttribute('z')
          }, {
            kx: 0.00039746552365541434,
            ky: 0.00039747543741573465,
            dx: 7961.677966525134,
            dy: 7961.958744725942,
            switchedCoords: false
          })
          // const marker = L.marker(latLng, {
          //   icon: L.divIcon({
          //     className: 'olga',
          //     iconAnchor: [-375,850],
          //     iconSize: [25,25]
          //   })
          // })
          const circle = L.circle(latLng, {
            color: 'cyan',
            fillColor: fillColor,
            opacity: 1.0,
            weight: 1,
            fillOpacity: 1.0,
            radius: 1500
          })
          circle.on('mouseover', (e) => {
            const content = `${branch.getAttribute('name')}\n${childNode.getAttribute('x')}/${childNode.getAttribute('z')}&nbsp;&nbsp;&nbsp;&nbsp;`
            L.popup()
              .setLatLng(e.latlng) 
              .setContent(content)
              .openOn(iZurvive._map)
          })
          circle.on('mousedown', () => {
            window.iZurvive._map.dragging.disable()
            window.iZurvive._map.on('mousemove', (e) => {
              // marker.setLatLng(e.latlng)
              circle.setLatLng(e.latlng)
              const yX = L.LocUtil.coordsToYx(e.latlng, {
                kx: 0.00039746552365541434,
                ky: 0.00039747543741573465,
                dx: 7961.677966525134,
                dy: 7961.958744725942,
                switchedCoords: false
              })
              const x = Math.floor((yX.loc1) * 100) / 100
              const y = Math.floor((yX.loc2) * 100) / 100
              const doSet = (node, attributeName, attributeValue) => {
                node.setAttribute(attributeName, attributeValue)
              }
              doSet(childNode, 'x', x)
              doSet(childNode, 'z', y)
              this.$refs['treeRef'][i].$forceUpdate()
              this.shouldEmitMutate = true
            })
          })
          window.iZurvive._map.on('mouseup', (e) => {
            window.iZurvive._map.dragging.enable()
            window.iZurvive._map.removeEventListener('mousemove')
            if (this.shouldEmitMutate) {
              this.onMutate()
              this.shouldEmitMutate = false
            }
          })
          circle.addTo(window.iZurvive._map)
          // marker.addTo(window.iZurvive._map)
        })
    },
    onClone (branch, i) {
      console.log(branch, i)
      const clone = branch.cloneNode(true)
      branch.parentNode.appendChild(clone)
      this.$parent.$forceUpdate()
      this.onUpdate(branch)
    },
    onCloneAndAug (branch, i) {
      console.log(branch, i)
      const clone = branch.cloneNode(true)
      branch.parentNode.appendChild(clone)
      this.onUpdate(branch)
    },
    onDelete (branch, i) {
      console.log(branch, i)
      branch.parentNode.removeChild(branch)
      this.onUpdate(branch)
    },
    onMutateAttributeValue (newAttributeValue, branch, attributeName, i) {
      branch.setAttribute(attributeName, newAttributeValue)
      this.onUpdate(branch)
    },
    onMutateNodeValue (newNodeValue, branch) {
      branch.nodeValue = newNodeValue
      this.onUpdate(branch)
    },
    onMutate () {
      this.$emit('mutate')
    },
    onUpdate (branch) { 
      this.$emit('mutate')
      // this.onMutate()
      // console.log('updated')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
