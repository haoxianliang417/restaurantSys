<template>
<div class="content">
	<el-row class="showList">
	  <el-col :span="5" v-for="(value, index) in this.$store.state.apphead.search" :key="value.menuId" :offset="index> 0 ? 1 : 0" class="single" 
    :data-id="value.menuId" :data-carouselIndex="index">
	    <el-card :body-style="{ padding: '0px' }">
	      <img :src="'src/assets/images/'+ value.img[0]" class="image" @click="carouselFun"/>
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
      :total="this.$store.state.showlist.totalAct">
    </el-pagination>
  </div>
    <el-dialog
    :visible.sync="dialogVisible" @close="closeCarousel"
    size="large">
      <el-carousel indicator-position="none" arrow="always" :initial-index="carouselIndex">
        <el-carousel-item v-for="(value, index) in carouselData" :key="value.menuId" :data-id="value.menuId">
          <div>
            <p class="detailName">{{value.menuName}}</p>
            <div class="itemPage">
              <img :src="'src/assets/images/'+ value.img[1]"/>
              <div class="detailfoot">
                <p class="detailSty">{{value.detail}}</p>
                <p class="price">{{value.menuPrice}}</p>
                <div class="detailBtn">
                  <el-button type="text" @click="deltailReduce" v-show="value.count <= 0 ? false : true" class="reduceBtn" icon="minus"></el-button>
                  <span class="detailNum">{{value.count <= 0 ? '' : value.count}}</span>
                  <el-button type="text" @click="detailAdd" icon="plus" class="addBtn"></el-button>
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
import { Loading } from 'element-ui';
	export default{
		data (){
			return{
        show:false,
        curpage: 1,
        pageSize:8,
        dialogVisible: false,
        curStorage:[],
        carouselIndex:0,
        carouselData:[]
			}
		},
    props:['baseUrl','arg'],
		methods:{
      closeCarousel(){
        this.carouselData = [];
      },
      carouselFun(event){
        this.dialogVisible = true;
        this.carouselData = this.$store.state.apphead.search
        this.carouselIndex = Number($(event.target).closest('.single').attr('data-carouselIndex'))
      },
      //获取节点相关值
      getEle(event){
        var cur = event.target;
        var id = $(cur).closest('.el-carousel__item').attr('data-id');
        return id;
      },
      //详情添加
      detailAdd(event){
        var id = this.getEle(event)
        this.addFunction(id)
      },
      deltailReduce(event){
        var id = this.getEle(event)
        this.reduceFunction(id)
      },
      //添加
      add(event){
        var cur = event.target;
        var id = $(cur).closest('.single').attr('data-id')
        this.addFunction(id)
      },
      addFunction(id){
        var arr = this.$store.state.apphead.search;
        this.checkStorage();
        //判断当前的是否存在或相同
        var num = 0;
        for(var j=0; j < arr.length; j++){
          if(arr[j].menuId == id){
            arr[j].count  = Number(arr[j].count) + 1
            if(this.curStorage.length > 0){
              for(var i=0;i < this.curStorage.length; i++){
                num++
                if(this.curStorage[i].menuId == id){
                  this.curStorage[i].count = arr[j].count
                  this.storageFun()
                  return 
                }else{
                  if(num == this.curStorage.length){
                    num = 0
                    this.curStorage.push(arr[j])
                  }
                }
              }
            }else{
                this.curStorage.push(arr[j])
            }
          }
        }
        //存储
        this.storageFun()
        this.$store.state.apphead.search = arr;
      },
      //减少
      reduce(event){
        var cur = event.target;
        var id = $(cur).closest('.single').attr('data-id')
        this.reduceFunction(id)
      },
      reduceFunction(id){
        var arr = this.$store.state.apphead.search;
        arr.forEach((item,idx)=>{
          if(item.menuId == id){
            item.count = Number(item.count) - 1;
            for(var i=0; i < this.curStorage.length; i++){
              if(this.curStorage[i].menuId == id){
                this.curStorage[i].count = item.count
                if( this.curStorage[i].count <= 0){
                  this.curStorage[i].count = ''
                }
              }
            }
          }
        })
        this.storageFun()
        this.$store.state.apphead.search = arr;
      },
      //localstorage存储
      storageFun(){
        this.storage.setItem('billDetail',JSON.stringify(this.curStorage))
      },
      checkStorage(){
          //判断当前的是否已存在 
          this.curStorage = [];
          this.curStorage = this.storage.getItem('billDetail') 
          if(this.curStorage == null){
            this.curStorage = [];
          }
          if(this.curStorage.length > 0){
            this.curStorage = JSON.parse(this.curStorage);
          }
      },
      //显示数据数量
      handleSizeChange(val) {
        this.pageSize = val;
        this.ajaxData(this.curpage, this.pageSize)
      },
      //页数切换
      handleCurrentChange(val) {
        this.curpage = val;
        this.ajaxData(this.curpage, this.pageSize)
      },
      //数据请求
      ajaxData(start, num){
        var startN = (start-1)*num;
        var postData = {startNum: startN, num: num, args: this.arg}
        var countArr = this.curStorage
        //loading加载条
        var loadingInstance = Loading.service({text:'拼命加载中...',target:document.querySelector('.mainGood')});
        //axios的post请求
        this.$ajax.post(this.baseUrl, qs.stringify(postData) )
        .then(res=>{
           setTimeout(() => {
            loadingInstance.close();
          }, 1000);
          var arr = res.data.data
          //添加已点的菜的数量********************************
          arr.forEach((item, idx)=>{
            item.img = item.img.replace(/^\[/,'').replace(/\]$/,'').split(',')
            item.count ='';
            item.state = 0;
            for(var i=0; i < countArr.length; i++){
              if(countArr[i].menuId == item.menuId){
                item.count = countArr[i].count
              }
            }
          })
          this.$store.state.showlist.totalAct = res.data.account;
          this.$store.state.apphead.search = arr
        })
      }
		},
    created(){
      this.checkStorage()
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
  .detailSty{color:#EDEDED;line-height:0.201rem;font-size:0.15rem;position:relative;padding:0.075rem}
  .itemPage{display:flex;justify-content:space-around}
  .detailBtn{color:#fff; position:absolute;bottom:0;right:0.15rem;font-size:0.156rem;display:flex;justify-content:center;align-items:center;
    button{color:#fff;font-size:0.18rem;background:#F96404;border-radius:50%;width:0.23rem;height:0.23rem;position:relative;
      i{text-align:center;position:absolute;bottom:0;top:0.023rem;left:0;right:0;margin:auto}
    }
    button:hover{color:#fff}
    .detailNum{font-size:0.25rem;margin:0 0.044rem;text-align:center;}
    
  }
  .detailfoot{
    .price{position:absolute;bottom:0;color:#fff;font-size:0.226rem;}
  }
  .detailName{color:#EDEDED;font-size:0.226rem;padding:0.075rem}
  .el-carousel__arrow--right,.el-carousel__arrow--left{background:rgba(0,0,0,.5) !important}
</style>