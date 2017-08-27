<template>
<div>
	<el-row class="showList">
	  <el-col :span="5" v-for="(value, index) in data" :key="index" :offset="index> 0 ? 1 : 0" class="single" >
	    <el-card :body-style="{ padding: '0px' }">
	      <img :src="'src/assets/images/'+ value.img[0]" class="image" @click="dialogVisible = true"/>
	      <div class="gooddel">
        <p class="about">{{value.menuName}}</p>
	        <div class="bottom">
          <p class="price">{{value.menuPrice}}</p>
            <div class="button">
              <el-button type="text" @click="reduce" v-show="show"><i class="fa fa-minus-circle fa-2x" aria-hidden="true"></i></el-button>
              <span>{{num}}</span>
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
        <el-carousel-item v-for="(value, index) in data" :key="index">
          <div>
            <p class="detailName">{{value.menuName}}</p>
            <div class="itemPage">
              <img :src="'src/assets/images/'+ value.img[1]"/>
              <div>
                <p class="detailSty">{{value.detail}}</p>
                <div class="detailBtn">
                  <el-button type="text" @click="reduce" v-show="show"><i class="fa fa-minus-circle fa-2x" aria-hidden="true"></i></el-button>
                  <span class="detailNum">{{num}}</span>
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
import axios from 'axios'
import qs from 'qs'
let baseUrl = 'http://localhost:8888/' + 'paging';
	export default{
		data (){
			return{
				currentDate: new Date(),
        num:'',
        show:false,
        data:[],
        curpage: 1,
        pageSize:8,
        totalAct:20,
        dialogVisible: false
			}
		},
		methods:{
      add(event){
        this.num++;
        console.log(this.num)
        if(this.num >= 1){
          this.show = true
        }
        
      },
      reduce(){
        this.num--;
        if(this.num <= 0){
          this.show = false;
          this.num = ''
        }
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.ajaxData(this.curpage, this.pageSize)
      },
      handleCurrentChange(val) {
        this.curpage = val;
        console.log(val)
        this.ajaxData(this.curpage, this.pageSize)
      },
      ajaxData(start, num){
        var startN = (start-1)*num;
        console.log(startN,num)
        var postData = {startNum: startN, num: num}
        console.log('axios',axios)
        axios.post(baseUrl, qs.stringify(postData) )
        .then(res=>{
          console.log(res)
          var arr = res.data.data
          arr.forEach((item, idx)=>{
            item.img = item.img.replace(/^\[/,'').replace(/\]$/,'').split(',')
          })
          this.totalAct = res.data.account;
          this.data = arr;
        })
      }
		},
    created(){
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
  .gooddel{line-height:0.15rem;}
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