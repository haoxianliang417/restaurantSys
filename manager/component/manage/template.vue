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
				<div class="plusClassfy">
					<el-button type="primary"><i class="el-icon-plus"></i>新增分类</el-button>
				</div>
				<div class="foods_list">
					<h3>全部菜系</h3>
					
					<ul class="food_style">
						<li v-for= "(val, index) in styleData" index="index" @click= "getFoodMenu(val.styleName)">{{index+1}}、{{val.styleName}}</li>
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
						<p @click="dialogFormVisible = true"><i class="el-icon-plus i" ></i>新增菜品</p>
						<p @click = "editFormVisible = true"><i class="el-icon-circle-check"></i>编辑菜品</p>
						<p @click = "deleteVisible = true" ><i class="el-icon-circle-close"></i>删除菜品</p>
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
						
						<el-dialog
						  title="提示"
						  :visible.sync="deleteVisible"
						  size="tiny"
						  :before-close="handleClose">
						  <span>确定要忍心抛弃我吗</span>
						  <span slot="footer" class="dialog-footer">
						    <el-button @click="deleteVisible = false">取 消</el-button>
						    <el-button type="primary" @click="deleteFood">忍心抛弃</el-button>
						  </span>
						</el-dialog>
			
					</div>
					<div class="style_munu" @click = "getId">
						 <el-table
						    :data="tableData2"
						    style="width: 100%"
						    ref='idx'
						    highlight-current-row
						    >
						    <el-table-column
						      prop="num"
						      label="序号"
						      width="80">
						    </el-table-column>
						   <el-table-column
						      prop="idx"
						      label="编号ID"
						      width="80"
						      className="foodId"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="name"
						      label="菜品名称"
						      width="160"
						      className="foodName"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="classify"
						      label="菜品分类"
						      width= "120"
						      className = "foodType"
						     >
						    </el-table-column>
						    <el-table-column
						      prop="style"
						      label="菜品菜系"
						      width= "120"
						      className="foodStyle"
						     >
						    </el-table-column>
						   	<el-table-column
						      prop="detail"
						      label="详情"
						      className="detail"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="price"
						      label="售价"
						      width="100"
							  className="foodPrice"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="vipPrice"
						      label="会员价"
						      width="100"
							  className="foodVipPrice"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="ban"
						      label="禁止折扣"
						      width="100">
						    </el-table-column>
						    <el-table-column
						      prop="blockUp"
						      label="是否停用"
						      width="100">
						    </el-table-column>
						  </el-table>
					</div>


				</div>
			</div>
		</div>

	</div>

</template>