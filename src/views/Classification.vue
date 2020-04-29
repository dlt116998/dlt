<template>
  <div class="Classification">
	  <van-nav-bar title="绿森信用卡商城" left-text="" left-arrow @click-left=" onClickLeft" @click-right="onClickRight">
	    <template #right>
	      <van-icon name="search" size="18" />
	    </template>
	  </van-nav-bar>
  <van-tree-select height="180vw" :items="items" :main-active-index.sync="active" max="10">
	
    <template #content>

      <van-image
        v-if="active === 0"
        src="https://group.lusen.com/weixinpl/up/1/52/Product/group/1551519491.jpg"
		
      />  
	
      <van-image
	  
        v-if="active === 1"
        src="https://group.lusen.com/weixinpl/up/1/52/Product/group/1519352856.jpg"
      />  
	
	  <van-image
	    v-if="active === 2"
	    src="https://group.lusen.com/weixinpl/up/1/52/Product/group/1552873869.jpg"
	  />
	 
	  <van-image
	    v-if="active === 3"
	    src="https://group.lusen.com/weixinpl/up/1/52/Product/group/1519354913.jpg"
	  /> 
	  <van-image
	    v-if="active === 4"
	    src="https://group.lusen.com/weixinpl/up/1/52/Product/group/1526088866.jpg"
	  />  
	  	
	  <van-image
	    v-if="active === 5"
	    src="https://group.lusen.com/weixinpl/up/1/52/Product/group/1558346106.jpg"
	  /> 
	  <van-image
	    v-if="active === 6"
	    src="https://group.lusen.com/weixinpl/up/1/52/Product/group/1560837076.jpg"
	  />  
	  	
	  <van-image
	    v-if="active === 7"
	    src="https://group.lusen.com/weixinpl/up/1/52/Product/group/1547428577.jpg"
	  /> 
	 
    </template>
  </van-tree-select>
  </div>
</template>
<script>
	
	
	export default {
	  data() {
	    return {
	      active: 0,
	      items: [{ text: '手机' }, { text: '摄影' }, { text: '家用电器' }, { text: '智能生活' }, { text: '美妆洗护' }, 
		  
		  , { text: '供应链云' }, { text: '家居百货' }, { text: '食品酒水' }],
	    };
	  },
	  
	  methods:{
		  onClickLeft() {
		       
		  		this.$router.go(-1);
		  		
		  },
		  onClickRight() {
		  		 
		    this.$router.push('/search');
		    
		  },
	  }
	};
</script>
