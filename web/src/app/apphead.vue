<template>
<el-row :gutter="10" class="btn">
    <el-button @click="recommend">店长推荐</el-button>
    <el-button @click="dailyspecial">今日特价</el-button>
    <el-button @click="classify">所有类别</el-button>
    <el-button :plain="true" @click="waiter">呼叫服务</el-button>
    <el-input placeholder="请输入内容" class="search-btn">
      <el-button slot="append" icon="search"></el-button>
    </el-input>
</el-row>
</template>

<script>
	export default {
		data: () => {
			console.log(this)
			return{

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
				this.$message('已呼叫服务员，请稍等');
			},
			classify(){
				this.$store.dispatch('classify');
			}
		}
	}
</script>

<style lang="scss">
	
</style>