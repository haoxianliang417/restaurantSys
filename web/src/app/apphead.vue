<template>
<el-row :gutter="10" class="btn">
    <el-button @click="recommend">店长推荐</el-button>
    <el-button @click="dailyspecial">今日特价</el-button>
    <el-button @click="classify">所有类别</el-button>
    <el-button :plain="true" @click="waiter">呼叫服务</el-button>
    <el-input placeholder="请输入内容" class="search-btn" ref="searInput">
      	<el-button slot="append" icon="search" @click="searchBtn"></el-button>
    </el-input>
    <el-button class="billStatus" @click="steps">当前账单状态</el-button>
</el-row>
</template>

<script>
	import qs from 'qs'
	
	export default {
		data: () => {
			console.log(this)
			return{
				url: this.baseUrl + 'waiter'
			}
		},
		methods:{
			recommend: function(){
				this.$store.dispatch('recommend');
			},
			dailyspecial: function() {
				console.log(this)
				this.$store.dispatch('dailyspecial');
			},
			waiter: function(){
				/*this.$ajax.post(this.url, qs.stringify({tableNo:'8号台呼叫'}))
				.then(res=>{
					this.$message('已呼叫服务员，请稍等');
				})*/
				this.$message('已呼叫服务员，请稍等');
			},
			classify(){
				this.$store.dispatch('classify');
			},
			steps(){
				this.$store.dispatch('steps');
			},
			searchBtn(){
				var val = this.$refs.searInput.$refs.input.value
				//console.log(val)
				if(val == ''){
					this.$message('请输入内容');
				}else{
					this.$store.dispatch('search',val);
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.billStatus{margin-left:0.15rem}
</style>