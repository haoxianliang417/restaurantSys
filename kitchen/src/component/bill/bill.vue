<template>
	<div class="bills">
		<div class='trul' v-for='(valueb,keyb) in data'>
			<p class="table" :style='bgcolor'>{{valueb['orderMenuNum']}}号桌</p>
			<transition-group tag='ul' >
			<li class="billsli " :key='keyb' v-for="(valueM,keyM) in data[keyb]['detail']"><span :key='keyM'>{{keyM*1+1+'.'}}{{valueM.menuName}}</span>
			
			<el-dropdown trigger="click" class='state' @command='comhandle' ref='hehe'>
			      <span class="el-dropdown-link">
			        准备中<i class="el-icon-caret-bottom el-icon--right"></i>
			      </span>
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item command='0'>准备中</el-dropdown-item>
			        <el-dropdown-item command='1'>已完成</el-dropdown-item>
			        <el-dropdown-item command='2'>烹饪中</el-dropdown-item>
			      </el-dropdown-menu>
		    </el-dropdown>
    		</li>
			</transition-group>
			<div class='callbg'>
				<span class='callNum'>服务员:xxxxxx</span>
				<el-button type="primary" class='call' @click='clickhandle'>呼叫上菜</el-button>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	import './bill.scss'
	import { mapGetters, mapActions } from 'vuex'
	import axios from 'axios'
	import $ from 'jquery'

	
	export default{
		data:()=>{
			return {
				data: [[{number:1,'menu':'白灼菜心','state':1},{number:2,'menu':'荷香南瓜蒸排骨','state':2},{number:3,'menu':'砂锅盐焗鸡','state':0},{number:4,'menu':'清蒸珍珠斑','state':0}],[{number:1,'menu':'白灼菜心','state':0},{number:2,'menu':'荷香南瓜蒸排骨','state':0},{number:3,'menu':'砂锅盐焗鸡','state':0},{number:4,'menu':'清蒸珍珠斑','state':0},{number:5,'menu':'白灼菜心','state':0},{number:6,'menu':'荷香南瓜蒸排骨','state':0}]],
				msg: '123',
				bills:'',
				bgcolor:'',
				state:''
			}
			
		},
		methods:{
			clickhandle(){
				console.log('666')
				var socket= io.connect('ws://localhost:8888/');
				socket.emit('click','haha');
			},
			comhandle(command){
				console.log(command);
				//=command==0?'准备中':command==1?'已完成':'烹饪中'
				console.log($('.state'));
			}
		},
		created(){
			//console.log(111)
			var self = this;
			axios({
			method:'get',
			url:'http://localhost:8888/bill',
			})
			.then(function(res){
	  			console.log(666,res.data.data)
	  			console.log(res)
	  			$('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').hide()
	  			var dataMenu = res.data.data;
	  			for(var i=0;i<self.data.length;i++){
	  				dataMenu[i]['detail']= JSON.parse(dataMenu[i]['detail'])
	  				console.log(dataMenu[i]['detail']);
	  			}	  			
	  			console.log(dataMenu);
	  			self.data = dataMenu;
	
			})
			
		},
		mounted(){	
			
			this.bills=this.data.length;
				
			var randomRGB = randomColor();
			
			this.bgcolor = "background-color:"+randomRGB+";";
			
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