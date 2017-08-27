<template>
    <div class='head' > 
	     <el-row type="flex" class="row-bg">
			  <el-col :span="4">
				  <div class="grid-content bg-purple" >
				    <div class="message">
					      <span class="title" >
					      	<el-dropdown trigger="click" >
							  <span class="el-dropdown-link" >		  
							      <i class="el-icon-message" ></i>			    
							  </span>
							  <el-dropdown-menu slot="dropdown" style='font-size: 12px'>
							    <el-dropdown-item class="clearfix" >
							      评论
							      <el-badge class="mark" :value="12" />
							    </el-dropdown-item>
							    <el-dropdown-item class="clearfix">
							      回复
							      <el-badge class="mark" :value="3" />
							    </el-dropdown-item>
							  </el-dropdown-menu>
							</el-dropdown>
					      </span>
				      </div>
				  </div>
			  </el-col>

			  <el-col :span="16">
				  <div class="grid-content bg-purple">
				      <span class="title">{{$route.params.id}}</span>
				  </div>
			  </el-col>

			  <el-col :span="4">
				  <div class="grid-content bg-purple">
				      <span class="title">
				      
				      </span>
				  </div>
			  </el-col>
		</el-row>


	</div>
</template>

<script>
    import './header.scss'
	export default {
		data:function(){
			return {
				message:'首页'
			}
		}
	}
</script>