<template>
	<div class="bills">
		<div class='trul' v-for='(valueb,keyb) in bills'>
			<p class="table" :style='bgcolor'>{{keyb}}号桌</p>
			<transition-group tag='ul' >
			<li class="billsli" :key='keyb' v-for='(valueM,keyM) in data[keyb]'><span v-for='(value,key) in data[keyb][keyM]' v-if="key=='menu'">{{keyM*1+1+'.'}}{{value}}</span><span v-for='(value,key) in data[keyb][keyM]' v-if="key=='state'" class='state'>{{value==0?'准备中':value==1?'已完成':'制作中'}}</span></li>
			</transition-group>
			<div class='callbg'>
				<span class='callNum'>服务员:xxxxxx</span>
				<el-button type="primary" class='call'>呼叫上菜</el-button>
			</div>
			
		</div>
		
		
	</div>
	
</template>

<script>
	import './bill.scss'
	import { mapGetters, mapActions } from 'vuex'

	export default{
		data:()=>{
			return {
				data: [[{number:1,'menu':'白灼菜心','state':1},{number:2,'menu':'荷香南瓜蒸排骨','state':2},{number:3,'menu':'砂锅盐焗鸡','state':0},{number:4,'menu':'清蒸珍珠斑','state':0}],[{number:1,'menu':'白灼菜心','state':0},{number:2,'menu':'荷香南瓜蒸排骨','state':0},{number:3,'menu':'砂锅盐焗鸡','state':0},{number:4,'menu':'清蒸珍珠斑','state':0},{number:5,'menu':'白灼菜心','state':0},{number:6,'menu':'荷香南瓜蒸排骨','state':0}]],
				msg: '123',
				bills:'',
				bgcolor:''
			}
			
		},
		methods:{
			
		},
		mounted(){	
			console.log(typeof this.data[0]);
			console.log(this.data[0]);
			this.bills=this.data.length;
			console.log(this.data.length);		
			var randomRGB = randomColor();
			console.log(randomRGB);
			this.bgcolor = "background-color:"+randomRGB+";";
			console.log(this.bgcolor);
		}
	}

	function randomColor(){
		var r = parseInt(Math.random()*256);
		var g = parseInt(Math.random()*256);
		var b = parseInt(Math.random()*256);
		var rgb = 'rgb('+r+','+g+','+b+')';
		return rgb;
	}

</script>