<template>
	<el-form :model="ruleForm2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  	
	</el-form>
</template>

<script type="text/javascript">
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