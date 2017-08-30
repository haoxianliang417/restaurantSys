<template>
	<div class="searchSty">
		<!-- <showlist :baseUrl="url" :arg="arg"></showlist> -->
		<button @click="searbtn">搜索</button>
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
			searbtn(){
				console.log('搜索',this.sear.searData)
				this.arg = this.sear.searData
			}
		},
		components:{
			showlist
		},
		created(){
			console.log(this)
			//this.arg = this.sear.searData
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