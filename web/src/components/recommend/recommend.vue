<template>
<div>
	<el-row class="showList">
	  <el-col :span="5" v-for="(value, index) in data"  :offset="index > 0 ? 1 : 0" class="single">
	    <el-card :body-style="{ padding: '0px' }">
	      <img :src="'src/assets/images/'+ value.img[0]" class="image" />
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
  <paging></paging>

  </div>
</template>

<script>
import paging from '../paging/paging.vue'
import axios from 'axios'
let baseUrl = 'http://localhost:8888'
	export default{
		data (){
			return{
				currentDate: new Date(),
        num:'',
        show:false,
        data:[]
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
		},
    components:{
      paging
    },
    beforeMount(){
        axios.get(baseUrl + '/goodsData')
        .then(res=>{
          console.log(res)
          var arr = res.data.goodsData
          arr.forEach((item, idx)=>{
            item.img = item.img.replace(/^\[/,'').replace(/\]$/,'').split(',')
          })
          this.data = arr.slice(0,8);
        })
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
</style>