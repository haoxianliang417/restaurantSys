<template>
   <div>
	    <hai-head></hai-head>
		<div class="main">
			<div class="total">
				<span>全部订单:</span>
				<span>{{1}}</span>
			</div>
			<div>
				<el-collapse v-model="activeName" accordion>
					<el-collapse-item :title="seat" name="1" >
					    <div>
					        <el-steps :space="100" :active="state" finish-status="success">
							  <el-step title="下单"></el-step>
							  <el-step title="烹饪"></el-step>
							  <el-step title="上菜"></el-step>
							  <el-step title="完成"></el-step>
						    </el-steps>
						</div>
						<div v-if = 'false'>
							<span class="hai-title">订单编号</span>
							<span class="hai-content"></span>
						</div>
						<div v-if = 'false'>
							<span class="hai-title">下单时间</span>
							<span class="hai-content"></span>
						</div>
						<div v-if = 'false'>
							<span class="hai-title">支付方式</span>
							<span class="hai-content"></span>
						</div>
						<div class="hai-btn">
							<span><button class="btn1">催单</button></span>
							<span><button class="btn2">退单</button></span>
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
	import Vue from 'vue'
	export default {
		components: {
			'hai-head':header,
			'hai-foot':footer,
		},
		data(){
			return {
				num:10,
				activeName: '1',
				state: 1,
				seat: '1号座位订单'
			}
		},
		created(){
		    console.log(this.xian.serving)
             this.seat = this.xian.seat;
             this.state =parseInt(this.xian.serving);

		}

		
	}

</script>