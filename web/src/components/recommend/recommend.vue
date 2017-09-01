<template>
	<div class="recomStyle">
		<showlist :baseUrl="url" :arg="arg"></showlist>
	</div>
</template>

<script>
	import showlist from '../showList/showList.vue'
	export default{
		data:function(){
			return {
				url:this.baseUrl+'paging',
				arg:''
			}
		},
		components:{
			showlist
		},
		created(){
			this.arg = ''
			console.log(this.baseUrl)
			console.log('推荐',this.$store.state)
		}
	}
</script>

<style>
	.recomStyle{margin-top:0.188rem}
</style>