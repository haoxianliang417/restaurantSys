<template>
	<div id="manage_index">
		<div class="header">
			<div><el-button type="primary" class="el-icon-arrow-left" @click="btn"></el-button>返回</div>
			<h2>菜单管理</h2>
			<div class="importData">
				
				<el-button type="primary">导入数据</el-button>
				<el-button type="primary">导出到Excel</el-button>
			</div>
		</div>

		<div class="main">
			<div class="aside">
				<addClassify></addClassify>
				<div class="foods_list">
					<h3>全部菜系</h3>
					
					<ul class="food_style">
						<li v-for= "(val, index) in $store.state.manage.styleData" index="index" @click= "getFoodMenu(val.styleName)">{{index+1}}、{{val.styleName}}

						<div class="editBox">
							<el-button type="text">编辑</el-button>
							<el-button type="text">删除</el-button>
						</div>

						</li>
					</ul>
				</div>
			</div>
			<div class="content">
				<div class="top">
					<div class="summary">
						{{style}}
					</div>
					<div class="summaryCount">
						共{{styleNum}}项
					</div>
				</div>
				<div class="container">
					<div class="edit_btn">
						
						<!--                         新增菜单子组件             -->
						<addChild></addChild>
						<!--                         编辑菜单组件               -->
						<editChild></editChild>

						
						<p @click="deleteVisible = true"><i class="el-icon-circle-close"></i>删除菜品</p>
						<p><i class="el-icon-information"></i>停用菜品</p>
						<p><i class="el-icon-plus i"></i>新增套餐</p>

										
						<el-dialog title="提示" :visible.sync="deleteVisible" size="tiny" :before-close="handleClose">
								<span>确定要忍心抛弃我吗</span>
								<span slot="footer" class="dialog-footer">
							<el-button @click="deleteVisible = false">取 消</el-button>
							<el-button type="primary" @click="deleteFood">忍心抛弃</el-button>
						  </span>
						</el-dialog>
						

					</div>
					
					<div style=" margin: 10px; width:500px;">
					  <el-input placeholder="请输入内容" v-model="input">
					    <el-select v-model="select" slot="prepend" placeholder="请选择">
					      <el-option label="菜品名" value="1"></el-option>
					      <el-option label="id名" value="2"></el-option>
					      
					    </el-select>
					    <el-button slot="append" icon="search" @click = "searchFood"></el-button>
					  </el-input>
					</div>


					<div class="style_munu" @click="getId">
						<el-table :data="$store.state.manage.tableData2" style="width: 100%" ref='idx' highlight-current-row>
							<el-table-column prop="num" label="序号" width="80">
							</el-table-column>
							<el-table-column prop="idx" label="编号ID" width="80" className="foodId">
							</el-table-column>
							<el-table-column prop="name" label="菜品名称" width="160" className="foodName">
							</el-table-column>
							<el-table-column prop="classify" label="菜品分类" width="120" className="foodType">
							</el-table-column>
							<el-table-column prop="style" label="菜品菜系" width="120" className="foodStyle">
							</el-table-column>
							<el-table-column prop="detail" label="详情" className="detail">
							</el-table-column>
							<el-table-column prop="price" label="售价" width="100" className="foodPrice">
							</el-table-column>
							<el-table-column prop="vipPrice" label="会员价" width="100" className="foodVipPrice">
							</el-table-column>
							<el-table-column prop="ban" label="禁止折扣" width="100">
							</el-table-column>
							<el-table-column prop="blockUp" label="是否停用" width="100">
							</el-table-column>
						</el-table>
					</div>


				</div>
			</div>
		</div>

	</div>

</template>



<script>
	import Vue from 'vue';
	import './manage.scss';
	import ElementUI from 'element-ui';
	import 'element-ui/lib/theme-default/index.css';
	import $ from 'jquery';

	import manageAction from './manage';

	import addChild from './addChild.vue';
	import editChild from './editChild.vue';
	import addClassify from './addClassify.vue'

	import axios from 'axios';
	Vue.prototype.$http = axios;

	Vue.use(ElementUI);


	export default{

		data: function() {
			return{
				styleData: [],
				style: '',
				fristMenu: '',
				styleNum: this.$store.state.manage.styleNum,
				foodId: '',
				select: '',
				input: '',
				deleteVisible: false,
		        dialogFormVisible: false,
			}
		},
		
		methods: {

			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			
			btn: function() {
				console.log(this.$store);
				console.log('测试',this.tableData2);
				
			},
			
			
			getFoodMenu: function(menu) {
				this.style = menu;
				

				this.$store.dispatch('getFoodMenu',menu);

			},
			tableRowClassName: (row, index) => {
		        if (index === 1) {
		          return 'info-row';
		        } else if (index === 3) {
		          return 'positive-row';
		        }
		        return '';
		    },
		  	    
		   	// 获取当前的ID
		    getId: function(event){
		    			    	
		    	this.$store.dispatch('getId',event);
		    },
		    
			//删除
			deleteFood: function() {
				this.deleteVisible = false;
				
				
				var foodId = this.$store.state.manage.foodId;
				axios.get( this.hm +  'deleteFood?menuId=' + foodId)
					.then(function(res) {
						console.log(res)
					}.bind(this))
				console.log(this);
				this.getFoodMenu(this.style);
			},
			//搜索菜品
			searchFood: function(){
				
				this.$store.dispatch('searchFood',this.input);

			},



 		},
		created: function() {

			console.log(this.$store.state.manage)
			// 请求菜系
			// axios.post(this.hm +  'getFoodStyle')
			// .then(function(res){
				
				
			// 	this.styleData = res.data.foodStyle;
			// }.bind(this))
			this.$store.dispatch('getFoodStyle');
			
		},

		components: {
			addChild,
			editChild,
			addClassify,
		}
		
	}
</script>
