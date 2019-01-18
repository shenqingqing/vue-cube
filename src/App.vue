<template>
  <div id="app" :class="gradeClass">
   <transition >
      <router-view></router-view>
   </transition>
   </div>
</template>

<script>
export default {
    name: 'app',
    data () {
      return {
        gradeClass: '',
      }
    },
    created () {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        this.gradeClass = 'mobile-ios'
      } else {
        this.gradeClass = 'mobile-android'
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.mobile-ios .vux-pop-in-enter-active,
.mobile-ios .vux-pop-in-leave-active,
.mobile-ios .vux-pop-out-enter-active,
.mobile-ios .vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active,
.vux-pop-out-enter-active,
.vux-pop-out-leave-active
  transition-duration:.5s;
  transition-timing-function:cubic-bezier(.36,.66,.04,1)
  transition-property:opacity,transform
  opacity:1
.mobile-android .vux-pop-in-enter-active,
.mobile-android .vux-pop-in-leave-active,
.mobile-android .vux-pop-out-enter-active,
.mobile-android .vux-pop-out-leave-active
  transition-duration:.2s
  transition-timing-function:cubic-bezier(.4,.6,.2,1)
  opacity: 1

.vux-pop-in-enter 
  -webkit-transform:translate3d(100%,0,0)
  transform:translate3d(100%,0,0)
  opacity:1
  z-index:2
.vux-pop-in-enter-active 
  box-shadow:0 0 10px rgba(0,0,0,.15)
.vux-pop-in-enter-to 
  -webkit-transform:translateZ(0)
  transform:translateZ(0)
  opacity:1
  z-index:2
.vux-pop-in-leave 
  -webkit-transform:translateZ(0)
  transform:translateZ(0)
  opacity:.8
  z-index:1

.vux-pop-in-leave-to 
  -webkit-transform:translate3d(-100%,0,0)
  transform:translate3d(-100%,0,0)
  opacity:0
  z-index:1

.vux-pop-out-enter 
  -webkit-transform:translate3d(-100%,0,0)
  transform:translate3d(-100%,0,0)
  opacity:.8
  z-index:1

.vux-pop-out-enter-to 
  -webkit-transform:translateZ(0)
  transform:translateZ(0)
  opacity:1
  z-index:1
.vux-pop-out-leave
  -webkit-transform:translateZ(0)
  transform:translateZ(0)
  opacity:1
  z-index:2
.vux-pop-out-leave-active 
  box-shadow:0 0 10px rgba(0,0,0,.15)
.vux-pop-out-leave-to
  -webkit-transform:translate3d(100%,0,0)
  transform:translate3d(100%,0,0)
  opacity:1
  z-index:2

.vux-pop-down-enter-active,
.vux-pop-down-leave-active,
.vux-pop-up-enter-active,
.vux-pop-up-leave-active,
  transition-duration:.5s
.vux-pop-up-enter 
  transform:translate3d(0,100%,0);
  opacity:1;
  z-index:2
.vux-pop-up-enter-active 
  box-shadow:0 0 10px rgba(0,0,0,.15)
.vux-pop-up-enter-to 
  transform:translateZ(0);
  opacity:1;
  z-index:2
.vux-pop-up-leave 
  transform:translateZ(0);
  opacity:.8;
  z-index:1
.vux-pop-up-leave-to 
  transform:translate3d(0,-100%,0);
  opacity:0;
  z-index:1

.vux-pop-down-enter 
  transform:translate3d(0,-100%,0);
  opacity:.8;
  z-index:1
.vux-pop-down-enter-to 
  transform:translateZ(0);
  opacity:1;
  z-index:1
.vux-pop-down-leave 
  transform:translateZ(0);
  opacity:1;
  z-index:2
.vux-pop-down-leave-active 
  box-shadow:0 0 10px rgba(0,0,0,.15)
.vux-pop-down-leave-to 
  transform:translate3d(0,100%,0);
  opacity:1;
  z-index:2
#app 
  width: 100%;
  height: 100%;

#app > div 
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

</style>
