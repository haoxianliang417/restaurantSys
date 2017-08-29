<template>
   <div>
	    <hai-head></hai-head>
		<div class="main">
			<div class="total">
				<span>全部订单:</span>
				<span>{{num}}</span>
			</div>
			<div>
				<el-collapse v-model="activeName" accordion>
					<el-collapse-item title="1号座位订单 " name="1" >
					    <div>
					        <el-steps :space="100" :active="1" finish-status="success">
							  <el-step title="下单"></el-step>
							  <el-step title="烹饪"></el-step>
							  <el-step title="上菜"></el-step>
							  <el-step title="完成"></el-step>
						    </el-steps>
						</div>
						<div>
							<span class="hai-title">订单编号</span>
							<span class="hai-content"></span>
						</div>
						<div>
							<span class="hai-title">下单时间</span>
							<span class="hai-content"></span>
						</div>
												<div>
							<span class="hai-title">支付方式</span>
							<span class="hai-content"></span>
						</div>
						<div class="hai-btn">
							<span><button class="btn1">催单</button></span>
							<span><button class="btn2">退单</button></span>
						</div>
					</el-collapse-item>
			    </el-collapse>
			    <el-collapse v-model="activeName" accordion>
					<el-collapse-item title="2号座位订单 " name="2">
					    <div>
					        <el-steps :space="100" :active="3" finish-status="success">
							  <el-step title="下单"></el-step>
							  <el-step title="烹饪"></el-step>
							  <el-step title="上菜"></el-step>
							  <el-step title="完成"></el-step>
						    </el-steps>
						</div>

					</el-collapse-item>
			    </el-collapse>
			</div>
		</div>
		<hai-foot></hai-foot>
	</div>
</template>


<script>
	import header from '../food/header/header.vue'
	import footer from '../food/footer/footer.vue'
	import './indent.scss'
	export default {
		components: {
			'hai-head':header,
			'hai-foot':footer,
		},
		data(){
			return {
				num:10,
				activeName: '1'
			}
		}
	}	
</script>