<template>
	<div>
	<p @click="dialogFormVisible = true"><i class="el-icon-plus i" ></i>新增菜品</p>
	
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
	</div>
</template>

<script>
	import Vue from 'vue';
	

	import axios from 'axios';
	Vue.prototype.$http = axios;

	//添加
	export default{

		data() {
			return {
				dialogFormVisible: false,

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
		        formLabelWidth: '120px'

			}
		},
		methods: {
			//添加菜品
			addFood: function(){
		    	this.dialogFormVisible = false;
		    	console.log(this.form.name)
		    	console.log(this.form.region1);
		    	
		    	let str = `menuName=${this.form.name}&type=${this.form.region1}&style=${this.form.region2}&menuPrice=${this.form.price}&vipPrice=${this.form.vipPrice}&detail=${this.form.desc}`;
		    	
		    	axios.get('http://localhost:8888/addFood?' + str)
		    	.then(function(res){
		    		console.log('这是添加',res);
		    	}.bind(this))
		    },
		}
	}

</script>