import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/common/Home.vue'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '/index',
      name: 'index',
      meta: {
        pageName: 'index',
        keepAlive: false // 不需要缓存
      },
      component: resolve => require(['components/tabs/index.vue'], resolve)
    },
    {
      path: '/second',
      name: 'second',
      meta: {
        pageName: 'second',
        keepAlive: false // 不需要缓存
      },
      component: resolve => require(['components/tabs/second.vue'], resolve)
    },
    {
      path: '/third',
      name: 'third',
      meta: {
        pageName: 'third',
        keepAlive: false // 不需要缓存
      },
      component: resolve => require(['components/tabs/third.vue'], resolve)
    },
    {
      path: '/four',
      name: 'four',
      meta: {
        pageName: 'four',
        keepAlive: false // 不需要缓存
      },
      component: resolve => require(['components/tabs/four.vue'], resolve)
    }
    ]
  }
  ]
})
