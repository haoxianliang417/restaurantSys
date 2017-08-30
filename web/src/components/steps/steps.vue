<template>
	<div class="stepSty">
		<el-steps :space="100" :active="1" finish-status="success">
		  <el-step title="正在下单"></el-step>
		  <el-step title="已下单"></el-step>
		  <el-step title="烹饪中"></el-step>
		  <el-step title="上菜"></el-step>
		  <el-step title="上菜齐全"></el-step>
		  <el-step title="支付"></el-step>
		</el-steps>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.stepSty{margin-top:0.15rem;}
</style>