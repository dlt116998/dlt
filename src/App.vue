<!-- z主组件 内容会替换掉public/index.html 中div#app 作用域 -->
<!-- 一个VUE的页面或者组件 应该包含三部分   
  template中编写组件、页面的html部分
  script 中编写组件、页面的js部分
  style 中编写组件、页面的css部分
  
  -->


<template>
  <div id="add">
    <div id="nav">


	


		
		<!-- router-link 相当于 html的 a标签 超级链接 -->
      <router-link to="/"><div><img src="./../public/1575774328.gif" alt="" >商城首页</div></router-link> 
      <router-link to="/classification">  <div><img src="./../public/1575774365.gif" alt="">分类</div></router-link> 
	
	   <router-link to="/document"><div><img src="./../public/1575774149.gif" alt="">购物车</div></router-link>
	    <router-link to="/min"><div><img src="./../public/1575774232.gif" alt="">个人</div></router-link>
    </div>
	
	<!-- router-view 用于显示当前路由匹配的内容 -->
  <router-view>
	  
  </router-view>
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
#add {
  
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
width: 100%;
  position: fixed;
background-color: #fff;

bottom: 0px;
img{
	width: 50px;
	height: 50px;
}
div{
	display: flex;
	flex-direction: column;

}
  a {
	    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

