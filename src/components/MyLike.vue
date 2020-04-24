<template>
	<div>
		<img @click="setlike" :src="like?'./liked.png':'./like.png'" alt=""> {{ like?'喜欢':'不喜欢' }}
		
	</div>
	
</template>

<script>
export default {
	data(){
		return{
			like:false
		}
	},
	methods:{
		setlike(){
			this.like=!this.like;
			this.$emit("likechange",this.like)
		}
	}
}
</script>

<style>
</style>
