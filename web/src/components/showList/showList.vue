<template>
<div class="content">
	<el-row class="showList">
	  <el-col :span="5" v-for="(value, index) in data" :key="value.menuId" :offset="index> 0 ? 1 : 0" class="single" :data-id="value.menuId">
	    <el-card :body-style="{ padding: '0px' }">
	      <img :src="'src/assets/images/'+ value.img[0]" class="image" @click="dialogVisible = true"/>
	      <div class="gooddel">
          <p class="about">{{value.menuName}}</p>
	        <div class="bottom">
            <p class="price">{{value.menuPrice}}</p>
            <div class="button">
              <el-button type="text" @click="reduce" v-show="value.count <= 0 ? false : true" class="reduceBtn"><i class="fa fa-minus-circle fa-2x" aria-hidden="true"></i></el-button>
              <span class="detailNum">{{value.count <= 0 ? '' : value.count}}</span>
  	          <el-button type="text" @click="add"><i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i></el-button>
            </div>
	        </div>
	      </div>
	    </el-card>
	  </el-col>
	</el-row>
  <div class="block">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="curpage"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="totalAct">
    </el-pagination>
  </div>
    <el-dialog
    :visible.sync="dialogVisible"
    size="large">
      <el-carousel indicator-position="none" >
        <el-carousel-item v-for="(value, index) in data" :key="value.menuId">
          <div>
            <p class="detailName">{{value.menuName}}</p>
            <div class="itemPage">
              <img :src="'src/assets/images/'+ value.img[1]"/>
              <div>
                <p class="detailSty">{{value.detail}}</p>
                <div class="detailBtn">
                  <el-button type="text" @click="reduce" v-show="show" class="reduceBtn"><i class="fa fa-minus-circle fa-2x" aria-hidden="true"></i></el-button>
                  <span class="detailNum">{{value.count <= 0 ? '' : value.count}}</span>
                  <el-button type="text" @click="add"><i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i></el-button>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>

<script>
import qs from 'qs'
import $ from 'jquery'
var storage = window.localStorage;
var curStorage;
	export default{
		data (){
			return{
				currentDate: new Date(),
        show:false,
        data:[],
        curpage: 1,
        pageSize:8,
        totalAct:20,
        dialogVisible: false,
        storageData:[]
			}
		},
    props:['baseUrl','arg'],
		methods:{
      //添加
      add(event){
        //点击添加，遍历localstorage,赋值给span
        //获取当前的data-id的值
        var cur = event.target;
        //console.log(cur)
        var id = $(cur).closest('.single').attr('data-id')
        //console.log(id)
        var span = $(cur).closest('button').siblings('.detailNum');
        var spanText = span.text()
        spanText++;
        var name = $(cur).closest('.bottom').siblings('.about').text()
        var spanshow = this.storageFun(id, spanText, name)
        $(cur).closest('button').siblings('.reduceBtn').show();
        span.text(spanshow)
      },
      //减少
      reduce(event){
        var cur = event.target;
        //console.log(cur)
        var id = $(cur).closest('.single').attr('data-id')
        //console.log(id)
        var span = $(cur).closest('button').siblings('.detailNum');
        var spanText = span.text()
        spanText--;
        var name = $(cur).closest('.bottom').siblings('.about').text()
        var spanshow = this.storageReduce(id, spanText, name)
        if(spanshow <= 0){
          spanshow = 0;
          $(cur).closest('button').hide();
          span.text('')
          return
        }
        span.text(spanshow)
      },
      storageReduce(id,countNum,name){
        curStorage = this.checkStorage();
        var spanshow;
        var res = curStorage.filter((item, idx)=>{
          return item.index == id
        })
        if(res.length > 0){
          res[0].count--
          spanshow = res[0].count;
        }else{
        //相同加一
          var newobj = {index:id,count:countNum,menuName:name,state:0}
          spanshow = newobj.count
          curStorage.push(newobj)
        }
        storage.setItem('billDetail',JSON.stringify(curStorage))
        return spanshow
      },
      //localstorage存储
      storageFun(id,countNum,name){
        curStorage = this.checkStorage();
        //判断当前的id是否已存在
        var spanshow;
        var res = curStorage.filter((item, idx)=>{
          return item.index == id
        })
        if(res.length > 0){
          res[0].count++
          spanshow = res[0].count;
        }else{
        //相同加一
          var newobj = {index:id,count:countNum,menuName:name,state:0}
          spanshow = newobj.count
          curStorage.push(newobj)
        }
        storage.setItem('billDetail',JSON.stringify(curStorage))
        return spanshow
      },
      checkStorage(){
          //判断当前的是否已存在 
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
      //显示数据数量
      handleSizeChange(val) {
        this.pageSize = val;
        this.ajaxData(this.curpage, this.pageSize)
      },
      //页数切换
      handleCurrentChange(val) {
        this.curpage = val;
        //console.log(val)
        this.ajaxData(this.curpage, this.pageSize)
      },
      //数据请求
      ajaxData(start, num){

        var startN = (start-1)*num;
        //console.log(startN,num)
        var postData = {startNum: startN, num: num, args:this.arg}
        var countArr = this.checkStorage()
        //axios的post请求
        this.$ajax.post(this.baseUrl, qs.stringify(postData) )
        .then(res=>{
          var arr = res.data.data
          //console.log('原始数据',arr)
          //添加已点的菜的数量********************************
          //console.log('获取storage',countArr)
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
          this.totalAct = res.data.account;
          this.data = arr;
          //console.log('添加了数量',arr)
        })
      }
		},
    created(){
      this.storageData = this.checkStorage()
      this.ajaxData(this.curpage, this.pageSize)
    }
	}
</script>

<style lang="scss">
  .time {
    font-size: 0.105rem;
    color: #999;
  }
  .image {
    width: 100%;
    display: block;
  }
  .gooddel{line-height:0.15rem;
    .detailNum{font-size:0.17rem}
    span{font-size:0.08rem}
  }
  .showList{display:flex;flex-wrap:wrap;
    .single{margin-bottom:0.15rem;margin-right:0.226rem;position:relative}
  }
  .el-col-offset-1{margin-left:0 !important;}
  .about{font-size:0.15rem;line-height:0.263rem;text-align:center;}
  .bottom{overflow:hidden;
    .button{margin-right:0.075rem;float:right;line-height:0.226rem;font-size:0.226rem;
      button{padding:0;color:#F96404;opacity:.8}
    }
  }
  .price{float:left;font-size:0.15rem;margin-left:0.075rem;line-height:0.226rem}
  .price:before{content:'￥'}
  .price:after{content:'.00'}
  .block{margin:0.15rem 0}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: rgba(0,0,0,0);
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: rgba(0,0,0,0);
  }
  .el-dialog,.el-dialog__wrapper,.el-carousel{background:rgba(0,0,0,0) !important;box-shadow:0 0 0 !important}
  .detailSty{color:#fff;line-height:0.201rem;font-size:0.15rem;position:relative;padding:0.075rem}
  .itemPage{display:flex;justify-content:space-around}
  .detailBtn{color:#fff; position:absolute;bottom:0;right:0.15rem;font-size:0.156rem;
    button{color:#F96404;}
    .detailNum{font-size:0.22rem;}
  }
  .detailName{color:#fff;font-size:0.226rem;padding:0.075rem}
</style>