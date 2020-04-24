import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DownLoad from '../views/DownLoad.vue'
import Document from '../views/Document.vue'
import Guanyu from '../views/Guanyu.vue'

Vue.use(VueRouter)

  const routes = [
  {
	  // path 路由路径 和网址匹配 如果匹配成功 则将 路由对应的componet组件显示到router-view
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  	  // path 路由路径 和网址匹配 如果匹配成功 则将 路由对应的componet组件显示到router-view
    path: '/guanyu',
    name: 'Guanyu',
    component: Guanyu
  },
  {
  	  // path 路由路径 和网址匹配 如果匹配成功 则将 路由对应的componet组件显示到router-view
    path: '/document',
    name: 'Document',
    component: Document
  },
  {
  	  // path 路由路径 和网址匹配 如果匹配成功 则将 路由对应的componet组件显示到router-view
    path: '/download',
    name: 'DownLoad',
    component: DownLoad
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
