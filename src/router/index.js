import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Account from '../views/Account'
import Login from '../views/Account/Login'
import Register from '../views/Account/Register'
import Auto from '../views/Auto'
import Cate from '../views/Cate'
import Chongzhi from '../views/Chongzhi'
import Comic from '../views/Comic'
import Daypub from '../views/Daypub'
import Feedback from '../views/Feedback'
import History from '../views/History'
import My from '../views/My'
import Rank from '../views/Rank'
import Search from '../views/Search'
import Space from '../views/Space'
import Yigou from '../views/Yigou'
Vue.use(VueRouter)
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    {
      path: '/account',
      component: Account,
      children: [
        { path: 'login', component: Login },
        { path: 'register', component: Register },
        { path: '/', redirect: '/account/login' }
      ]
    },
    { path: '/auto', component: Auto },
    { path: '/cate', component: Cate },
    { path: '/chongzhi', component: Chongzhi },
    { path: '/comic', component: Comic },
    { path: '/daypub', component: Daypub },
    { path: '/feedback', component: Feedback },
    { path: '/history', component: History },
    { path: '/my', component: My },
    { path: '/rank', component: Rank },
    { path: '/search', component: Search },
    { path: '/space', component: Space },
    { path: '/yigou', component: Yigou },
    { path: '/', redirect: '/home' }
  ]
})

export default router
