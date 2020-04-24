<template>
<div class="vue" >
	
		<!-- <table border="1" cellspacing="0">
		    <tr>
		        <th>资源名称</th>
		        <th>版本号</th>
		        <th>上传日期</th>
		        <th>下载地址</th>
		       
		    </tr>
		    <tr v-for="(item,index) in goods" :key="index">
		      
		        <td>{{item.name}}</td>
		        <td>{{item.price}}</td>
		        <td>
		           
		            {{item.time}}
		           
		        </td>
				  <td>{{item.city}}</td>
		        
		    </tr>
		</table> -->
		<div v-for="(item,index) in goods" :key="index"  >
		<p><img :src="item.img" alt=""></p>
		<p>{{item.name}}</p>	
		<p>{{item.desc}}</p>
		<p class="pp">{{item.price}}</p>
	
			
			
		</div>
		
	</div>
</template>

<script>
	import MyLike from '@/components/MyLike.vue'
	export default {
	  name: 'DownLoad',
	  components: {
		MyLike
	  },
	  data(){
		  return{
			  

		   
			goods:[
				{
					id:101,
					img:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c16238f786e4f93bdb175d7bf21aa47.jpg?thumb=1&w=250&h=250&f=webp&q=90',
					name:"Redmi K30",
					desc:"120Hz流速屏，全速热爱",
					price:"1599元起"
				},
				{
					id:102,
					img:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					name:"Redmi K30 5G",
					desc:"双模5G，120Hz流速屏",
					price:"1999元起"
				},
				{
					id:103,
					img:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/07270cc09689eb9b13b29aa9f6bc41eb.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					name:"小米CC9 Pro",
					desc:"1亿像素 五摄四闪",
					price:"2599元起"
				},
				{
					id:104,
					img:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					name:"小米9 Pro 5G",
					desc:"5G双卡全网通，骁龙855Plus",
					price:"3699元起"
				}
			]

	  }
	   },
	  
	  methods:{
		  change(like){
		  		  console.log(`当前状态为${like}`);
		  },
		  myMet(i){
		      this.score = i+1;
		  }
	  }
	}
	
	
</script>
<style lang="less">
	.vue{
		display: flex;
		flex-wrap: wrap;
		
		div{
			width: 25%;
		
			.pp{
				color: red;
			}
		}
		
	}

</style>