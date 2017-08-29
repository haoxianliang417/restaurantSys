<template>
	<div>
		<h3>搜索</h3>
		<showlist :baseUrl="url" :arg="arg"></showlist>
	</div>
	
</template>

<script>
import showlist from '../showList/showList.vue'

	export default{
		data:function(){
			return{
				url:this.baseUrl + 'ordersearch',
				arg:this.$route.params.searData
			}
		},
		methods:{

		},
		components:{
			showlist
		},
		created(){
			console.log('searVue',this.$route.params.searData)
		}
	}
</script>