import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from './../views/Home'
import Warn from './../views/warn'
import About from '../views/about'
import Operation from '../views/operation'

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/about',
          component: About,
        },
        {
          path: '',
          component: Operation,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        {
          path: '/warn',
          name: 'Warn',
          component: Warn
        }
      ]
    },
  ]
})
