<template>
	<el-button type="primary" @click="sendBill">下单</el-button>
</template>
<script>
	import qs from 'qs'
	var storage = window.localStorage;
	export default{
		data:function(){
			return {
				url:this.baseUrl + 'bill'
			}
		},
		methods:{
			sendBill(){
				var data = JSON.parse(storage.getItem('billDetail'));
				//过滤count为0的
				var newArr = data.filter((item, idx) => {
					return item.count != 0
				})
				console.log('获取storage账单',newArr)
				var sendObj = {orderMenuNum:8, detail:JSON.stringify(newArr), state:0}
				console.log(sendObj)
				console.log(this)
				this.$ajax.post(this.url, qs.stringify(sendObj))
				.then(res=>{
					if(res.status){
						this.$message('下单成功')
					}else{
						this.$message('下单失败')
					}
				})
				/*var ws = io.connect('ws://10.3.134.218:8888')
				ws.emit('data',{orderMenuNum:8, detail:newArr, state:0})
				ws.on('hehe',function(res){
					console.log(res)
				})*/
			}
		}
	}
</script>