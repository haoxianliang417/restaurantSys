<template>
	<div class="showdoneSty">
	<h3>已点菜</h3>
	 <el-table
    ref="multipleTable"
    :data="showData"
    border
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
    	prop="menuName"
      	label="菜名"
      	width="200">
    </el-table-column>
    <el-table-column
      prop="menuPrice"
      label="价格"
      width="150">
    </el-table-column>
    <el-table-column
      prop="count"
      label="数量"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="smalltotal"
      label="小计"
      width="120">
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button type="primary" @click="sendBill">下单</el-button>
  </div>
  </div>
</template>
<script>
	import qs from 'qs'
	
	export default{
		data:function(){
			return {
				url:this.baseUrl + 'bill',
				showData: []
			}
		},
		methods:{
			sendBill(){
				var sendData = this.getStorage();
				console.log('获取storage账单',newArr)
				var sendObj = {orderMenuNum:8, detail:JSON.stringify(sendData), state:0}
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
				var ws = io.connect('ws://10.3.134.218:8888')
				ws.emit('data',{orderMenuNum:8, detail:newArr, state:0})
				ws.on('hehe',function(res){
					console.log(res)
				})
			},
			getStorage(){
				var storage = window.localStorage;
				var data = JSON.parse(storage.getItem('billDetail'));
				//过滤count为0的
				var newArr = data.filter((item, idx) => {
					item.smalltotal = item.menuPrice * item.count;
					return item.count != 0
				})
				this.showData = newArr;
				return newArr;
			},
			toggleSelection(rows) {
		        if (rows) {
			        rows.forEach(row => {
			            this.$refs.multipleTable.toggleRowSelection(row);
			        });
		        } else {
		          	this.$refs.multipleTable.clearSelection();
		        }
	      	},
		    handleSelectionChange(val) {
		        this.multipleSelection = val;
		    }
		},
		created(){
			var arr = this.getStorage();
			console.log('账单',arr)
		}
	}
</script>

<style lang="scss">
	.showdoneSty{margin-top:0.075rem;
		h3{font-size:0.226rem;font-style:normal;margin-bottom:0.075rem}
	}
</style>