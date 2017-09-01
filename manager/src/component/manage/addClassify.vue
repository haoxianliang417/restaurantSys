<template>
	
	<div>
		<el-button type="primary" @click="addClassifyVisible = true"><i class="el-icon-plus"></i>新增分类</el-button>

		<el-dialog title="新增菜单分类" :visible.sync="addClassifyVisible">
		  	<el-form :model="form">
			    <el-form-item label="分类名称" :label-width="formLabelWidth">
			      <el-input v-model="form.name" auto-complete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="活动区域" :label-width="formLabelWidth">
			      <el-select v-model="form.region" placeholder="请选择分类">
			        <el-option label="堂食" value="堂食"></el-option>
			        <el-option label="外卖" value="外卖"></el-option>
			      </el-select>
			    </el-form-item>
			    <el-form-item label="详情" :label-width="formLabelWidth">
					<el-input type="textarea" v-model="form.desc"></el-input>
				</el-form-item>
			  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="addClassifyVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addClassify">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
	
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios';
	import Qs from 'qs';

	Vue.prototype.$http = axios;

	export default {
		data: function(){
			return{
				form: {
		        name: '',
		        region: '',
				desc: '',
				},
				formLabelWidth: '100px',
				addClassifyVisible: false,
			}
		},
		methods: {
			addClassify: function(){
				this.addClassifyVisible = false;
				
				console.log(this.hm + 'addClassify');

				var data = Qs.stringify({styleName: this.form.name,useRange: this.form.region,styleDes: this.form.desc})
				console.log(data);
				axios.post( this.hm + 'addClassify',data)
				.then(function(res){
					console.log(res);
					this.$store.dispatch('getFoodStyle');
				}.bind(this))
				.catch(function(err){
			        console.log(err);
			    })
			},
		}
	}
	

</script>