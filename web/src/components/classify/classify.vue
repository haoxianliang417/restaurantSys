<template>
<div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="菜类" name="first">菜类</el-tab-pane>
    <el-tab-pane label="茶类" name="second">茶类</el-tab-pane>
    <el-tab-pane label="酒水" name="third">酒水</el-tab-pane>
    <el-tab-pane label="甜点" name="fourth">甜点</el-tab-pane>
    <el-tab-pane label="面点" name="five">面点</el-tab-pane>
    <el-tab-pane label="果盘" name="six">果盘</el-tab-pane>
  </el-tabs>
  <paging></paging>
  </div>
</template>
<script>
import paging from '../paging/paging.vue'
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      paging
    }
  };
</script>