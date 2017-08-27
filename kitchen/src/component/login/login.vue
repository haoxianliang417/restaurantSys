<template>
	<div>
		<input type="text" v-model='account'>
		<input type="password" v-model='password'>
		<input type="button" value='确定' @click='login'>
	</div>
</template>

<script>
	import './login.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'

	export default {
		data:function(){
			return{
				account:'',
				password:'',
			}
		},
		methods:{
			login:function(event){
					console.log(111);
					console.log(this);
					this.$store.dispatch('login','qqq');
					$('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').show()
			}
		}
	}
</script>