<template>
  <div class="search">
	   <van-nav-bar   left-arrow class="header"   @click-left="onClickLeft" @click-right="onClickRight">
		 <input type="text" slot="title" v-model="value" placeholder="搜索商品名称" >
		 <van-icon slot="right"  name="search" size="18" />
	   </van-nav-bar>
	   
	   <div class="searchHot">历史搜索</div>
	   
	   <van-tag @click="search(item)"  class="tag" v-for="(item,index) in historytags" :type=" tagtypes[  Math.floor(Math.random()*tagtypes.length)  ]  " size="large">{{item}}</van-tag>
	   
	   <img src="https://group.lusen.com/weixinpl/up/1/52/Custom/1587950687.jpg?w=1080&h=300&bg=F3F8F4" alt="">
		
		
	   <div class="searchHot">热门搜索</div>
	  
	   
	   <van-tag  @click="search(item)"  class="tag" v-for="(item,index) in hottags" :type=" tagtypes[  Math.floor(Math.random()*tagtypes.length)  ]  " size="large">{{item}}</van-tag>
	   
	   

	   
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Search',
  data(){
	  return{
		  value:"",
		  hottags:["茅台","京东生鲜","5g手机","戴森",],
		  historytags:["aplle","oppo a9","k30","iqoo"],
		  tagtypes:["primary","success","danger","warning"]
	  }
  },
  components: {

  },
  methods: {
	  search(searchText){
		  this.$router.push({
			  name:"SearchResult",
			  query:{
				  key:searchText
			  }
		  })	
	  },
	  
      onClickLeft() {
     
		this.$router.go(-1);
		
      },
      onClickRight() {
		  if(this.value.length>0){	  
			  this.search(this.value)

		  }
        
      },
  },
}
</script>

<style lang="less" scoped="scoped">
	.search{
		.header{
			
			background-color: #f2f2f2;
			
			input{
			height: 50px;
				    border: 1px solid #e5e5e5;
				    border-radius: .04rem;
				    width: 100%;
				    padding: 0 .2rem;
				    outline: 0;
				    font-size: .3rem;
				    font-weight: 400;
				 
				    line-height: normal;
					margin-top: 0.2rem;
					
			}
		}
		.searchHot{
			text-align: left;
			padding-left: 0.3rem;
		}
		img{
			width: 100%;
		}
		
		.tag{
			margin-right: 0.2rem;
		}
	}
	
</style>
