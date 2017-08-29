<template>
	<div class="recomStyle">
		<showlist :baseUrl="url"></showlist>
	</div>
</template>

<script>
	import showlist from '../showList/showList.vue'
	export default{
		data:function(){
			return {
				url:this.baseUrl + 'paging'
			}
		},
		components:{
			showlist
		}
	}
</script>

<style>
	.recomStyle{margin-top:0.188rem}
</style>