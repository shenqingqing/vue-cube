<template>
  <div class="bar bar-header">
    <div class="buttons btnLeft">
      <slot name="left">
        <span  class="backBtn" v-on:click="backCallback()"></span>
      </slot>
    </div>
    <div class="center">
      <slot name="center">
        <h3 class="title"
        :class="{
        'title-left': titleAlign === 'left',
        'title-right': titleAlign === 'right'
        }"
        >
          {{title}}
        </h3>
      </slot>
    </div>
    <div class="buttons btnRight">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    titleAlign: {
      type: String,
      validator: function (position) {
        return position === 'left' || position === 'right' || position === 'center'
      },
      default: 'center'
    },
    theme: {
      type: String,
      default: 'light'
    }
  },
  methods: {
    backCallback () {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang='less'>
.bar-header{
    height: 44px;
    box-shadow:  0 .02rem .16rem rgba(0,0,0,.3);
    z-index: 9;
    position: absolute;
    width: 100%;
    background: #2E2E32;
     display: flex;
     display: -webkit-flex;
     align-items:center;
     box-sizing: border-box;
     .title{
        margin:0!important;
        // font-size: .35rem!important;
    }
}
.bar .buttons{
  .backBtn{
    height: 0.37rem;
    width: 0.2rem;
    margin-left: 0.3rem;
    display: block;
    background-size: cover;
  }
}
.btnLeft{
  width: 0.8rem;
}
.btnRight{
  width: 1.3rem;
}
.center{
  flex: 1;
}
.bar .title {
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #FFFFFF;
    font-weight:normal;
}
</style>
