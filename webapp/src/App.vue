<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <router-view></router-view>
    <spinner v-show="false"></spinner>
  </div>
</template>

<script>
import spinner from './component/spinner/spinner.vue'

export default {
  data:function() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      spinner
    }

}
</script>

<style lang="scss">

</style>
