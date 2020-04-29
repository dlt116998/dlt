<template>
	<div class="regist">
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
				    <el-form-item label="确认密码" prop="checkPass">
				      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
				    </el-form-item>
				  
				    
				    
				    
				    <el-form-item>
				      <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
				      <el-button > <router-link :to="{name:'Login'}">已有账户,直接登录</router-link>   </el-button>
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
	      var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.ruleForm.pass) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	      };
	      return {
	        ruleForm: {
	          pass: '',
	          checkPass: '',
	          username: ''
	        },
	        rules: {
	          pass: [
	            { validator: validatePass, trigger: 'blur' }
	          ],
	          checkPass: [
	            { validator: validatePass2, trigger: 'blur' }
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
	            // 
				// this.$api.registAPi({
				// 	username:this.ruleForm.username,
				// 	pass:this.ruleForm.pass
				// }).then(res=>{
					
				// }).catch(err=>{
					
				// })
				
				
				
				
				
				
				alert('注册成功!');
				
				
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      }
	    }
	  }
</script>

<style>
</style>
