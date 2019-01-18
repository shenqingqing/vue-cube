<template>
  <div class="wrapper">
    <transition name="fade">
    <keep-alive><router-view></router-view></keep-alive>
    </transition>
    <m-tabbar></m-tabbar>
  </div>
</template>
<script type="text/ecmascript-6">
  import mTabbar from './mrTabbar/tabbar.vue'
  export default {
    components: {
      mTabbar
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.wrapper 
  .page 
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  
</style>