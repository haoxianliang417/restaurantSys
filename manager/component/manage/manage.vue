<template>
	<div id="manage_index">
		<div class="header">
			<div>
				<el-button type="primary" class="el-icon-arrow-left" @click="btn"></el-button>返回</div>
			<h2>菜单管理</h2>
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

					<ul class="food_style">
						<li v-for="(val, index) in styleData" index="index" @click="getFoodMenu(val.styleName)">{{index+1}}、{{val.styleName}}</li>
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
					<div class="container_top">
						<div class="edit_btn">
							<p @click="dialogFormVisible = true"><i class="el-icon-plus i"></i>新增菜品</p>
							<p @click="editFormVisible = true"><i class="el-icon-circle-check"></i>编辑菜品</p>
							<p @click="deleteVisible = true"><i class="el-icon-circle-close"></i>删除菜品</p>
							<p><i class="el-icon-information"></i>停用菜品</p>
							<p><i class="el-icon-plus i"></i>新增套餐</p>

							<el-dialog title="新增菜单" :visible.sync="dialogFormVisible">
								<el-form :model="form">
									<el-form-item label="菜品名称" :label-width="formLabelWidth">
										<el-input v-model="form.name" auto-complete="off"></el-input>
									</el-form-item>
									<el-form-item label="菜品分类" :label-width="formLabelWidth">
										<el-select v-model="form.region1" placeholder="请选择分类">
											<el-option label="粤菜" value="粤菜"></el-option>
											<el-option label="川菜" value="川菜"></el-option>

										</el-select>
									</el-form-item>
									<el-form-item label="菜品菜系" :label-width="formLabelWidth">
										<el-select v-model="form.region2" placeholder="请选择分类">
											<el-option label="精致冷碟" value="精致冷碟"></el-option>
											<el-option label="精选热菜" value="精选热菜"></el-option>
											<el-option label="特色小炒" value="特色小炒"></el-option>
											<el-option label="甜品美食" value="甜品美食"></el-option>
											<el-option label="精品点心" value="精品点心"></el-option>
										</el-select>
									</el-form-item>
									<el-form-item label="售价" :label-width="formLabelWidth">
										<el-input v-model="form.price" auto-complete="off"></el-input>
									</el-form-item>
									<el-form-item label="会员价" :label-width="formLabelWidth">
										<el-input v-model="form.vipPrice" auto-complete="off"></el-input>
									</el-form-item>
									<el-form-item label="详情" :label-width="formLabelWidth">
										<el-input type="textarea" v-model="form.desc"></el-input>
									</el-form-item>
								</el-form>
								<div slot="footer" class="dialog-footer">
									<el-button @click="dialogFormVisible = false">取 消</el-button>
									<el-button type="primary" @click="addFood">确 定</el-button>
								</div>
							</el-dialog>

							<el-dialog title="编辑菜单" :visible.sync="editFormVisible">
								<el-form :model="form">
									<el-form-item label="菜品名称" :label-width="formLabelWidth">
										<el-input v-model="edit.name" auto-complete="off"></el-input>
									</el-form-item>
									<el-form-item label="菜品分类" :label-width="formLabelWidth">
										<el-select v-model="edit.region1" placeholder="请选择分类">
											<el-option label="粤菜" value="粤菜"></el-option>
											<el-option label="川菜" value="川菜"></el-option>

										</el-select>
									</el-form-item>
									<el-form-item label="菜品菜系" :label-width="formLabelWidth">
										<el-select v-model="edit.region2" placeholder="请选择分类">
											<el-option label="精致冷碟" value="精致冷碟"></el-option>
											<el-option label="精选热菜" value="精选热菜"></el-option>
											<el-option label="特色小炒" value="特色小炒"></el-option>
											<el-option label="甜品美食" value="甜品美食"></el-option>
											<el-option label="精品点心" value="精品点心"></el-option>
										</el-select>
									</el-form-item>
									<el-form-item label="售价" :label-width="formLabelWidth">
										<el-input v-model="edit.price" auto-complete="off"></el-input>
									</el-form-item>
									<el-form-item label="会员价" :label-width="formLabelWidth">
										<el-input v-model="edit.vipPrice" auto-complete="off"></el-input>
									</el-form-item>
									<el-form-item label="详情" :label-width="formLabelWidth">
										<el-input type="textarea" v-model="edit.desc"></el-input>
									</el-form-item>
								</el-form>
								<div slot="footer" class="dialog-footer">
									<el-button @click="editFormVisible = false">取 消</el-button>
									<el-button type="primary" @click="editFood">确 定</el-button>
								</div>
							</el-dialog>

							<el-dialog title="提示" :visible.sync="deleteVisible" size="tiny" :before-close="handleClose">
								<span>确定要忍心抛弃我吗</span>
								<span slot="footer" class="dialog-footer">
							<el-button @click="deleteVisible = false">取 消</el-button>
							<el-button type="primary" @click="deleteFood">忍心抛弃</el-button>
						  </span>
							</el-dialog>

						</div>

						<div class="search">
							<div style="margin-top: 15px;" id="searchInput">
							  <el-input placeholder="请输入内容" style="height:33px;">
								<el-select v-model="search" slot="prepend" placeholder="请选择">
								  <el-option label="菜品名称" value="1"></el-option>
								  
								</el-select>
								<el-button slot="append" icon="search"></el-button>
							  </el-input>
							</div>
						</div>
					</div>

					<div class="style_munu" @click="getId">
						<el-table :data="tableData2" style="width: 100%" ref='idx' highlight-current-row>
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
				<div class="block">
				<el-pagination
				  @size-change="handleSizeChange"
				  @current-change="handleCurrentChange"
				  :current-page="currentPage4"
				  :page-sizes="[10, 20, 30, 40]"
				  :page-size="10"
				  layout="total, sizes, prev, pager, next, jumper"
				  :total="400">
				</el-pagination>
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

	import axios from 'axios';
	Vue.prototype.$http = axios;

	Vue.use(ElementUI);

	export default {

		data: () => {
			return {
				styleData: [],
				tableData2: [],
				style: '精致冷碟',
				styleNum: '',
				search: '',
				foodId: '',
				foodName: '',
				foodStyle: '',
				foodType: '',
				foodPrice: '',
				foodVipPrice: '',
				foodDes: '',

				deleteVisible: false,
				dialogFormVisible: false,
				editFormVisible: false,
				form: {
					name: '',
					region1: '',
					region2: '',
					price: '',
					vipPrice: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				edit: {
					name: '',
					region1: '',
					region2: '',
					price: '',
					vipPrice: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px'
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

			//分页
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    },
		      handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		    },

			btn: function() {
				console.log('测试');
				console.log(this.$store);
				console.log(this.$store.manage);
			},
			getFoodMenu: function(menu) {
				this.style = menu;
				axios.get('http://localhost:8888/getFood?menu=' + menu)
					.then(function(res) {

						let data = res.data.munuStyle;
						this.styleNum = data.length;
						// let meneObj;
						this.tableData2 = [];
						console.log(data)
						for(var i = 0; i < data.length; i++) {

							this.tableData2[i] = {
								num: i + 1,
								idx: data[i].menuId,
								name: data[i].menuName,
								style: data[i].style,
								detail: data[i].detail,
								classify: data[i].type,
								price: 120,
								vipPrice: 100,
								ban: 'false',
								blockUp: '停止'
							};

						}

					}.bind(this))
			},
			tableRowClassName: (row, index) => {
				if(index === 1) {
					return 'info-row';
				} else if(index === 3) {
					return 'positive-row';
				}
				return '';
			},
			//添加菜单
			addFood() {
				this.dialogFormVisible = false;
				console.log(this.form.name)
				console.log(this.form.region1);

				let str = `menuName=${this.form.name}&type=${this.form.region1}&style=${this.form.region2}&menuPrice=${this.form.price}&vipPrice=${this.form.vipPrice}&detail=${this.form.desc}`;

				axios.get('http://localhost:8888/addFood?' + str)
					.then(function(res) {
						console.log('这是添加', res);
					}.bind(this))
				this.getFoodMenu(this.style);

			},
			getId: function(event) {

				this.foodId = $(event.target).parents('tr').find('.foodId')[0].innerText;
				this.edit.name = $(event.target).parents('tr').find('.foodName')[0].innerText;
				this.edit.region2 = $(event.target).parents('tr').find('.foodStyle')[0].innerText;
				this.edit.region1 = $(event.target).parents('tr').find('.foodType')[0].innerText;
				this.edit.price = $(event.target).parents('tr').find('.foodPrice')[0].innerText;
				this.edit.vipPrice = $(event.target).parents('tr').find('.foodVipPrice')[0].innerText;
				this.edit.desc = $(event.target).parents('tr').find('.detail')[0].innerText;

			},

			//编辑菜单
			editFood: function() {
				this.editFormVisible = false;

				let str = `menuName=${this.edit.name}&type=${this.edit.region1}&style=${this.edit.region2}&menuPrice=${this.edit.price}&vipPrice=${this.edit.vipPrice}&detail=${this.edit.desc}&menuId=${this.foodId}`;
				console.log(str);
				axios.get('http://localhost:8888/editFood?' + str)
					.then(function(res) {
						console.log(res)
					}.bind(this))
			},
			//删除
			deleteFood: function() {
				this.deleteVisible = false;
				console.log(this.foodId);
				axios.get('http://localhost:8888/deleteFood?menuId=' + this.foodId)
					.then(function(res) {
						console.log(res)
					}.bind(this))
				console.log(this);
				this.getFoodMenu(this.style);
			},
			//分页
			page: function() {

			}

		},
		created: function() {
			// 请求菜系
			axios.post('http://localhost:8888/getFoodStyle')
				.then(function(res) {
					this.styleData = res.data.foodStyle;
				}.bind(this))

			//刚进来页面，请求精致冷碟的菜单
			axios.get('http://localhost:8888/getFood?menu=' + '精致冷碟')
				.then(function(res) {

					let data = res.data.munuStyle;
					this.styleNum = data.length;
					// let meneObj;
					this.tableData2 = [];
					console.log(data)
					for(var i = 0; i < data.length; i++) {

						this.tableData2[i] = {
							num: i + 1,
							idx: data[i].menuId,
							name: data[i].menuName,
							style: data[i].style,
							detail: data[i].detail,
							classify: data[i].type,
							price: data[i].menuPrice,
							vipPrice: 29,
							ban: 'false',
							blockUp: '停止'
						};

					}
					console.log(this.$refs)
				}.bind(this));

			let foodId;
			console.log('表格的的减肥的减肥', $('.style_munu'));
			$('.style_munu').on('click', '.el-table__row', function() {
				console.log('尝试获取ID')

			});
		},

	}
</script>