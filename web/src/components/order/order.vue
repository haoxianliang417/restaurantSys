<template>
	<div class="showdoneSty">
	<h3>您的订单</h3>
	 <el-table
    ref="multipleTable"
    :data="showData"
    tooltip-effect="dark"
    style="width: 100%" 
    @selection-change="handleSelectionChange">
    <el-table-column className="index"
    	prop="menuId"
      	label="菜号"
      	width="80">
    </el-table-column>
    <el-table-column
    	prop="menuName"
      	label="菜名"
      	width="200">
    </el-table-column>
    <el-table-column
      prop="menuPrice"
      label="价格"
      width="95">
    </el-table-column>
    <el-table-column width="50" className="reduceBtn">
     <template scope="scope">
	      <el-button type="primary" icon="minus" size="mini" @click="reduce"></el-button>
      </template>
      </el-table-column>
    <el-table-column
    	prop="count"
      	label="数量"
      	width="70" className="countText">
    </el-table-column>
    <el-table-column width="50" className="addBtn">
     <template scope="scope">
	      <el-button type="primary" icon="plus" size="mini" @click="add"></el-button>
      </template>
      </el-table-column>
    <el-table-column
      prop="smalltotal"
      label="小计"
      width="180">
    </el-table-column>
    <el-table-column
      label="操作"
      width="105">
      <template scope="scope">
      	<i class="el-icon-delete" @click="deleteBtn"></i>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px" class="orderfoot">
  	<p><span>总计：</span><span class='showprice'>{{allTotal}}</span></p>
    <el-button type="primary" @click="sendBill">下单</el-button>
  </div>
  <el-dialog
  title="提示"
  size="tiny"
  :before-close="deleteBtn">
  <span>确定删除？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="提示"
  size="tiny"
  :before-close="sendBill">
  <span>确定下单？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="orderVisible = false">取 消</el-button>
    <el-button type="primary" @click="orderVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>
<script>
	import qs from 'qs'
	import $ from 'jquery'
	export default{
		data:function(){
			return {
				url:this.baseUrl + 'bill',
				showData: [],
				dialogVisible:false,
				orderVisible:false,
				orderList:[],
				allTotal:30
			}
		},
		methods:{
			sendBill(){
				this.orderVisible = true;
				this.$confirm('确认下单吗？')
		          .then(_ => {
		          		var sendData = this.getStorage();
						var sendObj = {orderMenuNum:8, detail:JSON.stringify(sendData), allTotal:Number(this.allTotal), state:0}
						this.$ajax.post(this.url, qs.stringify(sendObj))
						.then(res=>{
							if(res.status){
								this.$message('下单成功')
							}else{
								this.$message('下单失败')
							}
						})
						console.log('wsUrl',this.wsUrl)
						var ws = io.connect(this.wsUrl)
						ws.emit('ordersend','已下单')
						ws.on('order',function(res){
							console.log(res)
						})
		          })
				
			},
			getStorage(){
				var data = JSON.parse(this.storage.getItem('billDetail'));
				//过滤count为0的
				//console.log('清单',data)
				this.allTotal = 0
				var newArr = data.filter((item, idx) => {
					item.smalltotal = item.menuPrice * item.count;
					this.allTotal += item.smalltotal
					return item.count != 0
				})
				this.showData = newArr;
				return newArr;
			},
			//添加
		      add(event){
		        //点击添加，遍历localstorage,赋值给span
		        //获取当前的data-id的值
		        var cur = event.target;
		        //console.log(cur)
		        var id = $(cur).closest('td').siblings('.index').find('div').text()
		        //console.log(id)
		        var span = $(cur).closest('td').siblings('.countText').find('div');
		       	var addArr = this.getStorage();
		       	//循环遍历
		       	addArr.forEach((item,idx)=>{
		       		if(id == item.menuId){
		       			item.count++
		       			span++
		       		}
		       	})
		       	this.pushStorage(JSON.stringify(addArr))
		       	this.getStorage();
		      },
		      //减少
		      reduce(event){
		        var cur = event.target;
		        //console.log(cur)
		        var id = $(cur).closest('td').siblings('.index').find('div').text()
		        //console.log(id)
		        var span = $(cur).closest('td').siblings('.countText').find('div');
		        var reduceArr = this.getStorage()
		        reduceArr.forEach((item,idx)=>{
		       		if(id == item.menuId){
		       			item.count--
		       			span--
		       		}
		       	})
		       	this.pushStorage(JSON.stringify(reduceArr))
		        this.getStorage();
		      },
		      deleteBtn(event){
		      	this.dialogVisible = true
		      	this.$confirm('确认删除？')
		          .then(_ => {
		            var cur = event.target;
			        //console.log(cur)
			        var id = $(cur).closest('td').siblings('.index').find('div').text()
			        var delArr = this.getStorage();
			        delArr.forEach((item,idx)=>{
			        	if(item.menuId == id){
			        		delArr.splice(idx, 1)
			        	}	
			        })
			        this.pushStorage(JSON.stringify(delArr))
			        this.getStorage();
		        })
		      },
		      pushStorage(str){
		      		this.storage.setItem('billDetail', str)
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
		    },
		},
		created(){
			var arr = this.getStorage();
		}
	}
</script>

<style lang="scss">
	.showdoneSty{margin-top:0.075rem;
		h3{font-size:0.206rem;font-style:normal;margin-bottom:0.075rem}
	}
	.actionBtn{
		button{border-radius:50%}
	}
	.numSty{font-size:0.15rem;margin:0 0.038rem;text-align:center;}
	.reduceBtn{overflow:hidden;
		.cell{float:right;margin:0;padding:0}
	}
	.addBtn{overflow:hidden;
		.cell{float:right;margin:0;padding:0}
	}
	.orderfoot{display:flex;justify-content:space-between;
		p{font-size:0.2rem;}
	}
	.showprice:before{content:'￥';}
	.showprice:after{content:'.00';}
</style>