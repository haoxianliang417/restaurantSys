<template>
<div class="classifyStyle">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="能量荤配" name="first">
      <showlist></showlist>
    </el-tab-pane>
    <el-tab-pane label="田园时蔬" name="second">
      <showlist></showlist>
    </el-tab-pane>
    <el-tab-pane label="粗食辅助" name="third">
      <showlist></showlist>
    </el-tab-pane>
    <el-tab-pane label="举杯豪情" name="fourth">
      <showlist></showlist>
    </el-tab-pane>
    <el-tab-pane label="甜点" name="five">
      <showlist></showlist>
    </el-tab-pane>
    <el-tab-pane label="果盘" name="six">
      <showlist></showlist>
    </el-tab-pane>
  </el-tabs>
  
  </div>
</template>
<script>
import showlist from '../showList/showList.vue'
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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