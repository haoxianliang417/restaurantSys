<template>
  <div class="dailyStyle">
    <showlist :baseUrl="url"></showlist>
  </div>
</template>

<script>
  import showlist from '../showList/showList.vue'
  export default{
    data:function(){
      return {
        url:this.baseUrl + 'paging'
      }
    },
    components:{
      showlist
    }
  } 
</script>
<style>
  .dailyStyle{margin-top:0.188rem;}
</style>