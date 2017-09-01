<template>
<div class="classifyStyle">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="能量荤配" name="first" data-class="meat">
      <showlist :baseUrl="url"></showlist>
    </el-tab-pane>
    <el-tab-pane label="田园时蔬" name="second" data-class="vegetables">
      <showlist :baseUrl="url"></showlist>
    </el-tab-pane>
    <el-tab-pane label="粗食辅助" name="third" data-class="coarsefood">
      <showlist :baseUrl="url"></showlist>
    </el-tab-pane>
    <el-tab-pane label="举杯豪情" name="fourth" data-class="酒水  ">
      <showlist :baseUrl="url"></showlist>
    </el-tab-pane>
    <el-tab-pane label="甜点" name="five" data-id>
      <showlist :baseUrl="url"></showlist>
    </el-tab-pane>
    <el-tab-pane label="果盘" name="six">
      <showlist :baseUrl="url"></showlist>
    </el-tab-pane>
  </el-tabs>
  
  </div>
</template>
<script>
import showlist from '../showList/showList.vue'
  export default {
    data() {
      return {
        activeName: 'first',
        url:this.baseUrl + 'paging'
      };
    },
    methods: {
      handleClick(tab, event) {
        
      }
    },
    components: {
      showlist
    }
  };
</script>

<style lang="scss">
  .classifyStyle{margin:0;padding:0}
</style>