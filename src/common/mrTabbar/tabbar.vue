<template>
    <cube-tab-bar
        v-model="selectedLabelSlots"
        @click="clickHandler"
        @change="changeHandler">
        <cube-tab v-for="(item) in tabs" :icon="item.icon" :label="item.label" :key="item.path">
        </cube-tab>
    </cube-tab-bar>
</template>
<script>
export default {
  data () {
    return {
      selectedLabelSlots: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home',
        name: 'index',
        path: '/index'
      }, {
        label: '喜欢',
        icon: 'cubeic-like',
        name: 'second',
        path: '/second'

      }, {
        label: 'Vip',
        icon: 'cubeic-vip',
        name: 'third',
        path: '/third'
      }, {
        label: '我的',
        icon: 'cubeic-person',
        name: 'four',
        path: '/four'
      }]
    }
  },
  methods: {
    clickHandler (label) {
    },
    changeHandler (label) {
      console.log(label)
      var that = this
      this.tabs.forEach(function (info) {
        if (info.label === label) {
          console.log(info)
          that.$router.replace(info.path)
        }
      })
    }
  },
  watch: {
    selectedLabelSlots (newV) {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    
    .tab-bar-view
        .section
        margin-bottom: 10px
        background-color: white
        .option-list
        .group
            margin-bottom: 15px
        .item
            height: 52px
            border: 1px solid rgba(0, 0, 0, .1)
            background-color: white
            border-radius: 5px
    .cube-tab-bar
        border-top: 1px solid #19191D
        position: fixed!important
        width: 100%
        bottom: 0
        left: 0
        z-index: 1
        cursor: pointer
        background-color: white
</style>
