<template>
    <div id="app">
        <el-row :gutter="10" class="height">
          <el-col :xs="4" :sm="4" :md="4" :lg="4" >
            <div class="grid-content bg-purple">
              <leftnav></leftnav>
             </div>
          </el-col>
          <el-col :xs="20" :sm="20" :md="20" :lg="20" class="appright">
            <div class="grid-content bg-purple-light">
              <apphead></apphead>
              <el-row :gutter="10">
                <router-view class="mainGood"></router-view>
              </el-row>
            </div>
          </el-col>
        </el-row>
    
  </div>
</template>

<script>
  import '../src/assets/common/common.scss'
  import 'element-ui/lib/theme-default/index.css'
  import leftnav from './app/leftNav.vue'
  import apphead from './app/apphead.vue'

  export default {
    components: {
      leftnav,
      apphead
    }
  }
</script>

<style lang="scss">
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;font-size:0.226rem;
  }
  .height{height:100%}
  .appleft{height:100%;background:rgba(0,0,0,.5)}
  .btn{display:flex;
    .search-btn{width:30%;margin-left:0.15rem}
  }
  .mainGood{margin:0.15rem 0;padding-right:0.226rem;}
</style>
