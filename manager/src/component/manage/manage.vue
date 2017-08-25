<template>
	<div id="manage_index">
		<div class="header">
			<div><el-button type="primary" class="el-icon-arrow-left"></el-button>返回</div>
			<h1>菜单管理</h1>
			<div class="importData">
				
				<el-button type="primary">导入数据</el-button>
				<el-button type="primary">导出到Excel</el-button>
			</div>
		</div>

		<div class="main">
			<div class="aside">
				<div class="plusClassfy">
					<el-button type="primary"><i class="el-icon-plus"></i>新增分类</el-button>
				</div>
				<div class="foods_list">
					<h3>全部菜系</h3>
				</div>
			</div>
		</div>

	</div>

</template>


<script>
	import Vue from 'vue';
	import './manage.scss';
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css'

	Vue.use(ElementUI)

	export default{
		data: () => {
			return{
				
			}
		}
	}
</script>
