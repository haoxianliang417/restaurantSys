<template>
	<div>
		<hai-head></hai-head>
		<div class="main-reminder">
			<div>
			    <div class="hai-seat">
				    <span class="sp1"><span class="num">{{this.$store.state.reminder.reminde.orderMenuNum}}</span>号座位发起催单</span>
				    <span class="sp2" @click='replay'>回复</span>
			    </div>
			    <div class="replay" v-if = 'show'>
                     <textarea></textarea>
                     <button @click = 'send'>发送</button>    	
			    </div>
			    <el-collapse v-model="activeName" accordion>
					<el-collapse-item title="订单详情" name="1">
					    <div class="hai-box">
					       <div class="hai-cai">已点菜单</div>

                            <div class="hai-cais" v-for="(val,key) in JSON.parse(this.$store.state.reminder.reminde.detail)" :key='key'>
                                <span>
                                  <img :src="'src/assets/img/'+val.index+'.jpg'" />
                                </span>   
                            	<span class="name">{{val.menuName}}</span>
                            	<span class="num">x{{val.count}}</span>
                            </div>
                          
						</div>

					</el-collapse-item>
			    </el-collapse>
			    <div class='hai-num'>
				    <span class="nums"><button>催单1次</button></span>
				    <span class="time">已等待<span class="_time">30</span>分钟</span>
			    </div>

			</div>

		</div>
		<hai-foot></hai-foot>
	</div>

</template>

<script>
	import header from '../food/header/header.vue'
	import footer from '../food/footer/footer.vue'
	import './reminder.scss'
	export default {
		components: {
			'hai-head':header,
			'hai-foot':footer,
		},
		data() {
	      return {
	        activeName: '1',
	        show:false
	      }
	    },
	    methods:{
	    	replay(){
              this.show = true ;
	    	},
	    	send(){
	    		this.show = false ;
	    	}
	    },
	    beforeMount(){
	    	   this.$store.dispatch('reminder');
	    	  
	    }  
    }
</script>