<template>
  <div class="page">
    <div class="header">
      <h1 class="title" @click="showPicker">
        <span>全部赛事</span>
        <i class="cubeic-select" :class="{down: toDown}"></i>
      </h1>
      <div class="navigator">
        <ul class="nav-list">
          <li v-for="(item, index) in tabList" :key="index"
            @click="switchTab(index)" :class="{active: currentPage === index}">
            {{ item }}
          </li>
        </ul>
        <div class="triangle-up" :class="{left: currentPage === 0, right: currentPage === 2}"></div>
      </div>
    </div>
    <div class="content">
      <cube-slide
        :data="tabList"
        :initialIndex="currentPage"
        :loop="false"
        :autoPlay="false"
        :threshold="0.1"
        @change="slideChange">
        <cube-slide-item v-for="(item, index) in tabList" :key="index">
          <div class="match-list-wrapper">
            <match-list :type="type" :status="index"></match-list>
          </div>
        </cube-slide-item>
        <div slot="dots"></div>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import MatchList from '../match-list'

export default {
  data () {
    return {
      currentPage: 1,
      tabList: ['已结束', '直播中', '我的关注'],
      toDown: false,
      pickerList: [
        {text: 'NBA', value: 'NBA'},
        {text: 'DOTA', value: 'dota'},
        {text: 'SOCCER', value: 'soccer'}
      ],
      type: 'soccer'
    }
  },
  async mounted () {
    this.picker = this.$createPicker({
      title: '赛事',
      data: [this.pickerList],
      onSelect: () => {
        this.toDown = false
      },
      onCancel: () => {
        this.toDown = false
      },
      onValueChange: (selectedVal) => {
        this.type = selectedVal[0]
      }
    })
  },
  methods: {
    
    switchTab (index) {
      this.currentPage = index
    },
    slideChange (index) {
      this.currentPage = index
    },
    showPicker () {
      let that = this
      that.toDown = true
       this.picker = this.$createPicker({
          title: '赛事',
          data: [this.pickerList],
          onSelect: () => {
            this.toDown = false
          },
          onCancel: () => {
            this.toDown = false
          },
          onValueChange: (selectedVal) => {
            this.type = selectedVal[0]
          }
        })
      this.picker.show()
    }
  },
  components: {
    MatchList
  }
}
</script>

<style lang="stylus">
// @import './common/stylus/mixin.styl'
.page
  background-color: color_grey
  .header
    color: white
    background-color: #15191D
    text-align: center
    .title
      padding: 20px 0
      font-size: 16px
      color: white
      display: inline-block
      .down
        display: inline-block
        transform: rotate(180deg)
    .navigator
      position: relative
      padding-bottom: 12px
      font-size: 12px
      .nav-list
        display: flex
        justify-content: space-around
        li
          width: 60px
          color: #E0E4E8
          &.active
            color: #e86f5d
    .triangle-up
      position: absolute
      left: 50%
      transform: translate(-50%, 0)
      bottom: 0
      width: 0
      height: 0
      border-left: 7px solid transparent
      border-right: 7px solid transparent
      border-bottom: 8px solid color_grey
      transition: all 0.4s
      &.left
        left: 16.67%
      &.right
        left: 83.34%
  .content
    height: calc(100% - 80px)
    overflow: hidden
    .match-list-wrapper
      height: 100%
      background-color: #E2E5EA
</style>
