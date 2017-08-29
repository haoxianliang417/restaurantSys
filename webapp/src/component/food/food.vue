<template>
  <div>
    <hai-head></hai-head>
    <div class="main">
		<el-row type="flex" class="row-bg box" justify="space-around">
		  <el-col :span="11" style='background:	#FF60AF'>
		    <router-link :to="{name:'indent',params:{id:'订单管理'}}">
			  <div class="grid-content bg-purple">
				  <span class="iconfont icon-dingdanguanli img"></span>
				  <span class="font">订单管理</span>
			  </div>
			</router-link>
		  </el-col>
		  <el-col :span="11" style='background:	#FF5151'>
		        <router-link :to="{name:'reminder',params:{id:'催单管理'}}">
				  <div class="grid-content bg-purple">
					  <span class="iconfont icon-shangpinguanli img"></span>
					  <span class="font">催单管理</span>
				  </div>
				</router-link>
		  </el-col>
		</el-row>

		<el-row type="flex" class="row-bg box" justify="space-around">
		  <el-col :span="11" style='background:	#2894FF'>
			  <div class="grid-content bg-purple">
				  <span class="iconfont icon-qiachefuwu img"></span>
				  <span class="font">外卖管理</span>
			  </div>
		  </el-col>
		  <el-col :span="11" style='background:	#4EFEB3'>
			  <div class="grid-content bg-purple">
				  <span class="iconfont icon-zhuye img"></span>
				  <span class="font">退菜管理</span>
			  </div>
		  </el-col>
		</el-row>

		<el-row type="flex" class="row-bg box" justify="space-around">
		  <el-col :span="11" style='background:	#00EC00'>
			  <div class="grid-content bg-purple">
				  <span class="iconfont icon-dianhua-1 img"></span>
				  <span class="font">账单管理</span>
			  </div>
		  </el-col>
		  <el-col :span="11" style='background:	#EAC100'>
			  <div class="grid-content bg-purple">
				  <span class="iconfont icon-gouwuche img"></span>
				  <span class="font">划单管理</span>
			  </div>
		  </el-col>
		</el-row>

		<el-row type="flex" class="row-bg box" justify="space-around">
		  <el-col :span="11" style='background:	#9F4D95'>
		    <router-link :to="{name:'comment',params:{id:'用户评论'}}">
			  <div class="grid-content bg-purple">
				  <span class="iconfont icon-iconfontguanyuwomen1-2 img"></span>
				  <span class="font">用户评论</span>
			  </div>
			</router-link>
		  </el-col>
		  <el-col :span="11" style='background:	#2828FF'>
		    <router-link :to="{name:'table',params:{id:'餐桌管理'}}">
			  <div class="grid-content bg-purple">
				  <span class="iconfont icon-shezhi img"></span>
				  <span class="font">餐桌管理</span>
			  </div>
			</router-link>
		  </el-col>
		</el-row>

        
		
	</div>
	<hai-foot></hai-foot>
  </div> 
</template>

<script>
	import header from './header/header.vue'
	import footer from './footer/footer.vue'
	import './food.scss'

	export default {
          
		components: {
			'hai-head':header,
			'hai-foot':footer
		},
	    data:function(){
			return {
                dataArr:['订单管理','商品管理','物流管理','库存管理','采购管理','售后服务','用户中心','基础设置']
				}
			}
		
	}

</script>
