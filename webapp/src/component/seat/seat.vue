<template>
   <div>
       <hai-head></hai-head>
       <div class="main">
		  <el-table
		    :data="tableData"
		    border
		    style="width: 100%"
		    :default-sort = "{prop: 'date', order: 'descending'}"
		    >
		    <el-table-column
		      prop="date"
		      label="座位号"
		      align='center'
		      sortable
		      >
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="餐桌型号"
		      align='center'
		      sortable
		      >
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="是否使用中"
		      align='center'
		      :formatter="formatter">
		    </el-table-column>
		  </el-table>

	   </div>
	   <hai-foot></hai-foot>
   </div>
</template>

<script>
    import header from '../food/header/header.vue'
	import footer from '../food/footer/footer.vue'
	export default {
		components: {
			'hai-head':header,
			'hai-foot':footer,
		},
    data() {
      return {
        tableData: [{
          date: '1',
          name: '大',
          address: '有'
        }, {
          date: '2',
          name: '中',
          address: '无'
        }, {
          date: '3',
          name: '小',
          address: '无'
        }, {
          date: '4',
          name: '大',
          address: '有'
        },{
          date: '5',
          name: '大',
          address: '有'
        }, {
          date: '6',
          name: '中',
          address: '无'
        }, {
          date: '7',
          name: '小',
          address: '无'
        }, {
          date: '8',
          name: '大',
          address: '有'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
		
	}
</script>

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>


