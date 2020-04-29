import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DownLoad from '../views/DownLoad.vue'
import Document from '../views/Document.vue'
import Search from '../views/Search.vue'
import Classification from '../views/Classification.vue'
import Min from '../views/Min.vue'
import Regist from '../views/Regist.vue'

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
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
  	  // path 路由路径 和网址匹配 如果匹配成功 则将 路由对应的componet组件显示到router-view
    path: '/min',
    name: 'Min',
    component: Min
  },
  {
  	  // path 路由路径 和网址匹配 如果匹配成功 则将 路由对应的componet组件显示到router-view
    path: '/classification',
    name: 'Classification',
    component: Classification
  },
  {
  	  // path 路由路径 和网址匹配 如果匹配成功 则将 路由对应的componet组件显示到router-view
    path: '/search',
    name: 'Search',
    component: Search
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
 
]

const router = new VueRouter({
  routes
})

export default router
