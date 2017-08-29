var db = require('../dbhelper.js');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({
	extended: true
});

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
}