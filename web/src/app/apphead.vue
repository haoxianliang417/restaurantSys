<template>
<el-row :gutter="10" class="btn">
    <el-button @click="recommend">店长推荐</el-button>
    <el-button @click="dailyspecial">今日特价</el-button>
    <el-button @click="classify">所有类别</el-button>
    <el-button :plain="true" @click="waiter">呼叫服务</el-button>
    <el-input placeholder="请输入内容" class="search-btn" ref="searInput" @focus="getRoute">
      	<el-button slot="append" icon="search" @click="searbtn"></el-button>
    </el-input>
    <el-button class="billStatus" @click="steps">当前账单状态</el-button>
</el-row>
</template>

<script>
	import qs from 'qs'
	var waiterUrl = 'http://10.3.134.50:8888/waiter'
	var storage = window.localStorage;
	export default {
		data: () => {
			console.log(this)
			return{
				url: this.baseUrl + 'waiter',
				arg:''
			}
		},
		methods:{
			recommend: function(){
				this.$store.dispatch('recommend');
			},
			dailyspecial: function() {
				console.log(this)
				this.$store.dispatch('dailyspecial');
			},
			waiter: function(){
				var socket = io.connect('ws://10.3.134.41:8888')
				socket.emit('waiter',{status:'呼叫二师兄'})
				/*socket.on('receive',function(res){
					console.log(res)
					this.$message('已呼叫服务员，请稍等');
				})*/
				this.$message('已呼叫服务员，请稍等');
			},
			classify(){
				this.$store.dispatch('classify');
			},
			steps(){
				this.$store.dispatch('steps');
			},
			getRoute(){
				this.$store.dispatch('search');
			},
			searbtn(){
				this.arg = this.$refs.searInput.$refs.input.value
				this.ajaxData(0,8)		
			},
			checkStorage(){
		          //判断当前的是否已存在 
		          var storage = window.localStorage;
					var curStorage;
		          curStorage = storage.getItem('billDetail') 
		          if(curStorage == null){
		            curStorage = [];
		          }
		          if(curStorage.length > 0){
		            curStorage = JSON.parse(curStorage);
		          }
		          //console.log('curStorage',curStorage)
		          return curStorage
		      },
			 ajaxData(start, num){
		        var startN = (start-1)*num;
		        //console.log(startN,num)
		        var postData = {startNum: startN, num: num, args: this.arg}
		        //axios的post请求
		        var countArr = this.checkStorage()
		        this.$ajax.post(this.baseUrl + 'ordersearch', qs.stringify(postData) )
		        .then(res=>{
		          var arr = res.data.data;
		          arr.forEach((item, idx)=>{
		            item.img = item.img.replace(/^\[/,'').replace(/\]$/,'').split(',')
		            item.count ='';
		            for(var i=0; i<countArr.length; i++){
		              if(countArr[i].index == item.menuId){
		                //console.log(88888)
		                item.count = countArr[i].count
		              }
		            }
		          })
		          this.$store.state.apphead.search = arr
		        })
			}
		},
	}
</script>

<style lang="scss">
	.billStatus{margin-left:0.15rem}
</style>