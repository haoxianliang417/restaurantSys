<template>
	<div class="searchSty">
		<showlist :baseUrl="url" :arg="arg"></showlist>
	</div>
	
</template>

<script>
import showlist from '../showList/showList.vue'

	export default{
		data:function(){
			return{
				url:this.baseUrl + 'ordersearch',
				arg:''
			}
		},
		methods:{
			
		},
		components:{
			showlist
		},
		created(){
			this.arg = this.$route.params.searData;
			console.log('状态：created')
		},
		updated(){
			this.arg = this.$route.params.searData;
			console.log('状态：updated')
		},

	}
</script>

<style>
	.searchSty{margin-top:0.188rem;}
</style>