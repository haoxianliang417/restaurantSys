var db = require('../dbhelper.js');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({
	extended: true
});

exports.haiData = function(app){
	//无条件搜索
	app.post('/find',urlencodeParser,function(request,response){
		console.log(request.body);
		db.query(request.body.database, '*', function(res) {
			response.send({status:true, msg:'获取信息', data:res});
		})
	}),
	//带条件搜索
	app.post('/select',urlencodeParser,function(request,response){
		db.haiSearch(request.body.database,request.body.keyword,function(res){
			response.send({status:true, msg:'获取信息', data:res});
		})
	})
	//老高传输局
	app.post('/waiter',urlencodeParser,function(request,response){
		console.log(request.body);
	})
}