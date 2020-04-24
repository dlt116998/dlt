<template>
	<div>
	<span>作业评分</span>
	<span v-for="(item,index) in 5" @click="myMet(index)" :class="score>index?'yellow':''">⭐</span>
	</div>
</template>

<script>

export default{
data(){
	  return{
	        score:0,
	    }
	},
	methods: {
	        myMet(i){
	            this.score = i+1;
	        }
	    }
		}

</script>

<style>
	.yellow{
	    color:yellow;
	}
	span{
		font-size: 50px;
	}
	
</style>
