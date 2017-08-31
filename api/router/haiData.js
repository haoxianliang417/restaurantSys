var db = require('../dbhelper.js');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({
	extended: true
});

exports.haiData = function(app){
	//无条件搜索
	app.post('/find',urlencodeParser,function(request,response){
		console.log(request.body);
		db.hquery(request.body.database, '*', function(res) {
			response.send({status:true, msg:'获取信息', data:res});
		})
	}),
	//带条件搜索
	app.post('/select',urlencodeParser,function(request,response){
		console.log(123)
		console.log(request.body);
		console.log(request.body.key);
		console.log(request.body.keyword);
		db.haiSearch(request.body.database,request.body.key,request.body.keyword,function(res){
			response.send({status:true, msg:'获取信息123', data:res});
		})
	}),
	//获取订单信息
	app.post('/find',urlencodeParser,function(request,response){
		db.hquery(request.body.database,'*',function(res){
			response.send({status:true, msg:'获取信息', data:res});
		})
	}),
	//老高传数据
	app.post('/waiter',urlencodeParser,function(request,response){
		console.log(request.body);
		response.send({state:'老高'});
	})
}