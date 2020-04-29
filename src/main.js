// ES6 导入模块语法 如果模块在node_models文件夹 直接写模块名
import Vue from 'vue'


// 如果导入文件不在node_models下则需要些入相对路径
import App from './App.vue'
// 如果导入的文件夹下有默认的index.js 则可以省略
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 注册Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.prototype.$bus = new Vue();
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);



import Cookies from 'js-cookie'

// 将js-cookie注册原型
Vue.prototype.$jsCookie = Cookies

// 所有VUE工作都有Vue主实例开始
// 注册该vue实例使用的路由管理类  与 数据存储类
new Vue({
  router,
  store,
  
  // 将App替换掉原有作用域内 内容
  render: h => h(App)
}).$mount('#app')  //选择作用域

// main.js  会被自动的引用到public 下方index.html中
