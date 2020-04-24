<!-- z主组件 内容会替换掉public/index.html 中div#app 作用域 -->
<!-- 一个VUE的页面或者组件 应该包含三部分   
  template中编写组件、页面的html部分
  script 中编写组件、页面的js部分
  style 中编写组件、页面的css部分
  
  -->


<template>
  <div id="app">
    <div id="nav">
		{{info}}
		
		<!-- router-link 相当于 html的 a标签 超级链接-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
	  <router-link to="/download">下载</router-link> |
	   <router-link to="/document">文档</router-link>|
	    <router-link to="/guanyu">关于我们</router-link>
    </div>
	
	<!-- router-view 用于显示当前路由匹配的内容 -->
    <router-view/>
  </div>
</template>

<script>
	export default{
		data(){
			return {
				info:"变量的使用"
			}
		}
	}
	
</script>



<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

