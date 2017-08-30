<template>
	<div>
		<hai-head></hai-head>
		<div class="main">
		    <div class="hai-sort">
		    	<div>
			    	<span class= "tel">餐桌类型</span>
			    	<span class="xiala">
						<el-dropdown @command="form_sort" trigger="click">
						  <span class="el-dropdown-link">
						  {{title1}}<i class="el-icon-caret-bottom el-icon--right"></i>
						  </span>
						  <el-dropdown-menu slot="dropdown" style='font-size: 12px'>
						    <el-dropdown-item command='2'>2人</el-dropdown-item>
						    <el-dropdown-item command='5'>5人</el-dropdown-item>
						    <el-dropdown-item command='10'>10人</el-dropdown-item>
						    <el-dropdown-item command='15'>15人</el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>

			    	</span>
			    </div>
		    	<div>
			    	<span class= "tel">餐桌状态</span>
			    	<span class="xiala">
						<el-dropdown @command="state_sort" trigger="click">
						  <span class="el-dropdown-link">
						   {{title2}}<i class="el-icon-caret-bottom el-icon--right"></i>
						  </span>
						  <el-dropdown-menu slot="dropdown" style='font-size: 12px'>
							    <el-dropdown-item command='空'>
							       空闲中
							    </el-dropdown-item>
							    <el-dropdown-item  command='开'>
							       下单中
							    </el-dropdown-item>
							    <el-dropdown-item  command='吃'>
							       吃饭中
							    </el-dropdown-item>
							    <el-dropdown-item  command='付'>
							       付钱中
							    </el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>
			    	</span>
		    	</div>
		    </div>
			<div class="hai-box">
				<span v-for='(val ,key) in this.$store.state.table.tables.data' :key='key'>
				    <div class="peoples">{{val.persons}}人桌子</div>
					<div 
					     v-bind:class="[
					          { state1: val.state == '开' },
					          { state2: val.state == '付'},
					          { state3: val.state == '吃'},
					          { state4: val.state == '空'}]" 
					>
					           {{val.state}}
					 </div>
					<div class="name">{{val.name}}</div>
				</span>
			</div>
		</div>
		<hai-foot></hai-foot>
	</div>
</template>

<script>
    import header from '../food/header/header.vue'
	import footer from '../food/footer/footer.vue'
	import './table.scss'
	export default {
		components: {
			'hai-head':header,
			'hai-foot':footer,
		},
		//基本数据
		data(){
			return {
				tables: 30,
				index: 3,
				num: 3,
				title1:'全部',
				title2:'全部',
				obj: []
			}
		},

		//事件集合
		methods:{
			//类型排序请求
			form_sort:function(command){
				console.log(command);
			  //console.log('哈哈',event.target.innerText);
			  this.title1 = command;
              this.$store.dispatch('form',command)

              
			},
			//状态排序请求
			state_sort:function(command){
				this.title2 = command;
                this.$store.dispatch('state',command)
                
			},
		},
		//加载请求
		created(){
			this.$store.dispatch('tables');
            
		}


	}	
</script>