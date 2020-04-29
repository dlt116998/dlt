<template>
	<div class="center">
		个人中心
		<br>
		<el-avatar shape="square" :size="50" :src="$mockjs.Random.image(size='50x50')"></el-avatar>
		<br>
		<button @click="exit">退出</button>
	</div>
</template>

<script>

	export default{
		methods:{
			exit(){
				this.$router.push("/")
				this.$jsCookie.remove('username')

				this.$bus.$emit("userEvent","")
			}
		}
	}
	
</script>

<style>
</style>
