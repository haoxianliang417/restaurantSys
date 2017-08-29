<template>
	<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  		<el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  		</el-form-item>
  	<el-form-item label="确认密码" prop="checkPass">
    	<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  	</el-form-item>
  	<el-form-item label="年龄" prop="age">
    	<el-input v-model.number="ruleForm2.age"></el-input>
  	</el-form-item>
  	<el-form-item>
    	<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    	<el-button @click="login">重置</el-button>
  	</el-form-item>
</el-form>
</template>

<script type="text/javascript">
	import $ from 'jquery'
	import './login.scss'

	export default {
		data: function(){
			return {
				username: '',
				pwd: '',
				ruleForm2:{
					age:'',
					checkPass:''
				},
				rules2:''
			}
		},
		props:['pass','checkPass','age'],
		methods: {
			login: function(event){
				console.log('ajax请求')
				this.$store.dispatch('login')
			},
			submitForm:function(){

			},
			resetForm:function(){

			}
		}
	}
</script>