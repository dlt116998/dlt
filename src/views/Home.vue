<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
	
	<!-- 使用helloword -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	
	<MyLike  @likechange="change"></MyLike>
  </div>
</template>

<script>
	// 1 组件在使用之前要先导入组件   @等同/src
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyLike from '@/components/MyLike.vue'

export default {
  name: 'Home',
  components: {
	  // 2 将helloworld 组件注册 到components中
    HelloWorld,
	MyLike
  },
  methods:{
	  change(like){
		  console.log(`当前状态为${like}`);
	  }
  }
}
</script>
