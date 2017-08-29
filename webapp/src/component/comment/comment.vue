<template>
   <div>
    <hai-head></hai-head>
    <div class="main">
	      <el-row>
			  <el-col :span="24">
				  <div class="grid-content bg-purple-dark">
					   <div class="comment" v-for = '(val,key) in this.$store.state.comment.comments.data'>
					   	<div class="name">{{ val.name }}:</div>
					   	<div class="grade">
					   		<el-rate
							  v-model=val._grade
							  disabled
							  show-text
							  text-color="#ff9900"
							  text-template="{value}">
							</el-rate>
					   	</div>
					   	<div class="content">{{ val.content }}</div>
					   	<div class='time'>{{ val.time }}</div>
					   </div>
					   <div class="page">
							<el-row type="flex" class="row-bg" justify="center">
							  <el-col :span="24"><div class="grid-content bg-purple-light">
							  	    <el-pagination
									  small
									  layout="prev, pager, next"
									  :total="30">
									</el-pagination>  
							  </div></el-col>
							</el-row>
                               	


					   </div>
				  </div>
			  </el-col>
		  </el-row>
    	
    </div>
	<hai-foot></hai-foot>
   </div>
</template>

<script>
	import header from '../food/header/header.vue'
	import footer from '../food/footer/footer.vue'
	import './comment.scss'
	export default {
		components: {
			'hai-head':header,
			'hai-foot':footer,
		},
		data(){
           return {
           	  mes:'123',
           	  value5: 3.7
           }
		},
		methods:{
			load(){
	           console.log(this);
	           this.$store.dispatch('comment');
			}
		},
		beforeMount(){
			//console.log(this)
			this.$store.dispatch('comment');
			//console.log(this.$store.state.comment.comments.data)

		}
	}	
</script>