<template>
  <div id="app">
    <router-view></router-view>
    <spinner v-show="false"></spinner>
  </div>
</template>

<script>
import spinner from './component/spinner/spinner.vue'

var socket= io.connect('ws://localhost:8888');
socket.on('connect',function(){
//连接成功
console.log('连接成功');
});
socket.on('disconnect',function(data){
//连接断开
console.log('连接断开');
});
socket.on('login',function(data){
  console.log(data);
})
socket.emit('login',getId());
socket.on('message',function(data){
  console.log(data);
})
//socket.emit('login',{hehe:123})

function getId(){
  console.log(parseInt(Math.random()*100000));
  var id=parseInt(Math.random()*100000);
  return{
    uid:id
  }
}
//getId();
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
