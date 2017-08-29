<template>
	<div>
	<div class="hometitle">厨房下单管理</div>	
	<div class='homebg'>
	<el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" ref='nav_hei' :style="height">
	  	<el-menu-item index="1">
		    <i class="el-icon-message"></i>
		    <span slot="title">导航一</span>
	    </el-menu-item>
	    <el-menu-item index="2">
		    <i class="el-icon-menu"></i>
		    <span slot="title">导航二</span>
	    </el-menu-item>
		<el-menu-item index="3">
		    <i class="el-icon-setting"></i>
		    <span slot="title">导航三</span>
		</el-menu-item>
	</el-menu>

		<div class="list">
			<router-view></router-view>
		</div>
	</div>
	</div>
</template>

<script>
	import './homepage.scss'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data:()=> {
			return{
				height:'',
				isCollapse: true,
			}
		},

		methods:{
		    child:function(){
		    	console.log(666);
		    }
		},
		mounted(){			
			console.log(window.outerHeight);
			this.height = 'height:'+(window.outerHeight-118)+'px;';
			console.log(this); 
		}
		
	}
    
</script>