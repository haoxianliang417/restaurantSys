<template>
  <div id="app">
    <router-view></router-view>
    <spinner v-show="false"></spinner>
  </div>
</template>

<script>
import spinner from './component/spinner/spinner.vue'

export default {
  data:function() {
    return {
      
    }
  },
  components: {
      spinner
    }

}
</script>

<style lang="scss">

</style>
