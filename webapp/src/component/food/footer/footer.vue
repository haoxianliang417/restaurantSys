<template>
	<div class="foot">
		<el-row type="flex" class="row-bg" justify="center">
		  <el-col :span="6">
		      <router-link :to="{ name: 'food', params: { id: '首页' }}">
				  <div class="grid-content bg-purple box">
					  <span class='iconfont icon-zhuye img'></span>
	                  <span class="font">首页</span>
				  </div>
			   </router-link>
		  </el-col>
		  <el-col :span="6">
		      <router-link :to="{name:'seat',params:{ id: '餐厅管理'}}">
				  <div class="grid-content bg-purple-light box">
					  <span class="iconfont icon-fuwuneirong img"></span >
					  <span class="font">店铺管理</span>
					  
				  </div>
			  </router-link>
		  </el-col>
		  <el-col :span="6">
			  <div class="grid-content bg-purple box">
				  <span class='i iconfont icon-yonghu img'></span>
				  <span class="font">用户</span>
			  </div>
		  </el-col>
		  <el-col :span="6">
		        <div class="grid-content bg-purple box">
				  <span class=" iconfont icon-guanli img"></span>
				  <span class="font">更多</span>
		        </div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
    import './footer.scss'
   
	export default {}
</script>