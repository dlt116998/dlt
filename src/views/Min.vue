<template>
	<div class="min">
	<h2>绿森信用卡商城</h2>
	<img src="https://group.lusen.com/weixinpl/mshop/images/login_logo24qifenqi.png" alt="" style="width: 207px;height: 57px;">
	<el-row :gutter="20">
	  <el-col :span="12" :offset="6">
		 <div class="grid-content bg-purple">
			<el-form  :label-position="'left'" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			  
			  <el-form-item label="用户名" prop="username">
			    <el-input v-model="ruleForm.username" style="width:200px;"></el-input >
			  </el-form-item>
			  <el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" style="width:200px;"></el-input>
			  </el-form-item>
			
			  
			  
			  
			  <el-form-item>
				  <div class="felx">
			    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
			    <el-button > <router-link :to="{name:'Regist'}">没有账号,去注册</router-link>   </el-button></div>
			  </el-form-item>
			</el-form>
	  
		</div>
	</el-col>
	</el-row>
	

	</div>	
</template>

<script>
	export default {
	    data() {
	      var checkUserName = (rule, value, callback) => {
	        if (!value) {
	          return callback(new Error('必须输入用户名'));
	        }
	        setTimeout(() => {
	
				if (value.length < 6) {
				  callback(new Error('用户名必须大于6个字符'));
				} else {
				  callback();
				}
		
	        }, 1000);
	      };
	      var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          if (this.ruleForm.checkPass !== '') {
	            this.$refs.ruleForm.validateField('checkPass');
	          }
	          callback();
	        }
	      };
	      return {
	        ruleForm: {
	          pass: '123456',
	          username: 'dlt0372'
	        },
	        rules: {
	          pass: [
	            { validator: validatePass, trigger: 'blur' }
	          ],
	          username: [
	            { validator: checkUserName, trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    methods: {
			exit(){
					this.$router.push("/")
					this.$jsCookie.remove('username')
			
					this.$bus.$emit("userEvent","")
				},
			
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
				// this.$api.loginApi({
				// 	username:this.ruleForm.username,
				// 	pass:this.ruleForm.pass
				// }).then(res=>{
					
				// }).catch(err=>{
					
				// })
				
					
				console.log("登录成功");
				this.$jsCookie.set('username', this.ruleForm.username, { expires: 7 })
				
				
				// 如果登录成功之后需要重定向则使用push进入对应路由
				let redirect = this.$route.query.next;
				if(redirect){
					this.$router.push('/');
			
				}
				else{
					this.$router.push("/")
					
				}
				
				
				  
				  
				  
				  
				  
				
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
		 
		  }
	    }
		
	  
</script>

<style lang="less" scoped="scoped">
	element.style {
	    margin-left: -10px;
	    margin-right: 0px;
	}
	.felx{
		display: flex;
		justify-content: space-between;
		margin-left: -100px;
	}
	
</style>
