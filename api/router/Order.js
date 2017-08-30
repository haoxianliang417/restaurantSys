var db = require('../dbhelper.js');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({
	extended: true
});
console.log(9999999)
exports.order = function(app){
	//获取商品信息
	app.post('/recommend', urlencodeParser, function(request, response) {
		
		db.query(function(res) {
			response.send({status:true, msg:'获取信息', goodsData:res});
		})
	});
	//分页
	app.post('/paging', urlencodeParser, function(request, response){
		//table, startNum, endNum, callback
		console.log('请求数据', request.body)
		var startNum = request.body.startNum;
		var num = request.body.num;
		db.paging('menu', startNum, num, function(res){
			if(res){
				db.account(function(num){
					var count = JSON.stringify(num);
					count = parseInt(count.replace(/[^0-9]/ig,''));
					response.send({status:true, account:count, data:res})
				})
			}else{
				response.send({status:false, account:'',data:[]})
			}
		})
	})
	//搜索//查询：SELECT data FROM table WHERE key="need" table, data, key, needData, callback
	app.post('/ordersearch', urlencodeParser, function(request, response){
		//关联类型，和菜名
		console.log('搜索')
		console.log(request.body)
		var key = 'menuName,type,detail,class'
		db.queryAbout('menu', '*', key, request.body.args, function(res){
			if(res){
				db.account(function(num){
					var count = JSON.stringify(num);
					count = parseInt(count.replace(/[^0-9]/ig,''));
					response.send({status:true, account:count, data:res})
				})
			}else{
				response.send({status:false, account:'',data:[]})
			}
		})
	})
	//插入账单table,key,val,callback
	app.post('/bill', urlencodeParser, function(request, response){
		console.log('账单',request.body)
		var obj = request.body;
		db.hmInsert('bill', obj, function(res){
			response.send({status:true, msg:'下单成功'})
		})
		
	})
}