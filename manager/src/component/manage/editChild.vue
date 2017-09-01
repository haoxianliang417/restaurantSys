<template>
	<div>
		
		<p @click = "editForm"><i class="el-icon-circle-check"></i>编辑菜品</p>
		<el-dialog title="编辑菜单" :visible.sync="editFormVisible">
				<el-form >
					<el-form-item label="菜品名称" :label-width="formLabelWidth">
						<el-input  v-model="edit.name" auto-complete="off" ></el-input>
					</el-form-item>
					<el-form-item label="菜品分类" :label-width="formLabelWidth">
						<el-select v-model="edit.region1" placeholder="请选择分类">
							<el-option label="粤菜" value="粤菜"></el-option>
							<el-option label="川菜" value="川菜"></el-option>

						</el-select>
					</el-form-item>
					<el-form-item label="菜品菜系" :label-width="formLabelWidth">
						<el-select v-model="edit.region2" placeholder="请选择分类">
			
							<el-option v-for = "(val , index) in $store.state.manage.styleData" :label = "val.styleName" :value= "val.styleName" :key = "index">
							</el-option>
							
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
	</div>
	
</template>

<script>
	import Vue from 'vue';
	

	import axios from 'axios';
	Vue.prototype.$http = axios;

	export default{
		data: function(){
			return{
				editFormVisible: false,
		        foodId: '',
		        
		        edit: {
		        	name: '',
			        region1: '',
			        region2: '',
			        price: '',
			        vipPrice: '',
			        resource: '',
			        desc: '',
		        },
		        
		        formLabelWidth: '120px'
			}
		},
		methods: {

			//显示编辑diolog
			editForm: function(){
				
				this.editFormVisible = true;
				this.edit.name = this.$store.state.manage.edit.name;
				this.edit.region1 = this.$store.state.manage.edit.region1;
				this.edit.region2 = this.$store.state.manage.edit.region2;
				this.edit.price = this.$store.state.manage.edit.price;
				this.edit.vipPrice = this.$store.state.manage.edit.vipPrice;
				this.edit.desc = this.$store.state.manage.edit.desc;
			},
			//编辑菜单
			editFood: function() {
				
				this.editFormVisible = false;
				console.log('这是菜单信息',this.$store.state.manage.styleData)

				let str = `menuName=${this.edit.name}&type=${this.edit.region1}&style=${this.edit.region2}&menuPrice=${this.edit.price}&vipPrice=${this.edit.vipPrice}&detail=${this.edit.desc}&menuId=${this.$store.state.manage.foodId}`;
		
					axios.get( Vue.prototype.hm + 'editFood?' + str)
					.then(function(res){
						console.log(res);
						console.log('编辑的ID',this.$store.state);
						this.$store.dispatch('getFoodMenu',this.$store.state.manage.menu);
					}.bind(this))
				
			},

			
		}
	}
</script>