var db = require('../dbhelper.js');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({
	extended: true,
});

exports.bill = function(app) {
	

	//模糊查询
	//SELECT data FROM table WHERE key like '%needData%'
	//table, data, key, needData, callback
	app.get('/bill',function(request,response){
		var data = request.query;
		//console.log(data);
		var about = Object.keys(data).join('');
		//console.log(about);
		db.queryBill(function(res){

			response.send({status:true, msg:'根据id获取信息', data:res});
		})
	});

}