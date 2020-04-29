<template>
	<div class="login">
		<el-row :gutter="20">
		  <el-col :span="12" :offset="6">
			 <div class="grid-content bg-purple">
				<el-form  :label-position="'left'" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				  
				  <el-form-item label="用户名" prop="username">
				    <el-input v-model="ruleForm.username"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="pass">
				    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				  </el-form-item>
				
				  
				  
				  
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				    <el-button > <router-link :to="{name:'Regist'}">没有账号,去注册</router-link>   </el-button>
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
	          username: 'zzy0371'
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
					this.$router.push(redirect);
					console.log(redirect,'===')
				}
				else{
					this.$router.push("/")
				}
				
				this.$bus.$emit("userEvent",this.ruleForm.username)
				  
				  
				  
				  
				  
				
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      }
	    }
	  }
</script>

<style lang="less" scoped="scoped">
	
	
</style>
