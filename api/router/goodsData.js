var db = require('../dbhelper.js');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({
	extended: true
});

exports.goodsData = function(app) {
	//获取商品信息
	app.get('/goodsData', urlencodeParser, function(request, response) {
		//console.log(9999)
		db.query(function(res) {
			response.send({status:true, msg:'获取信息', goodsData:res});
		})
	});
	// 删除商品
	app.get('/goodsDelete',function(request,response){
		var obj = request.query;
		

		db.hmdelete('goodsinfor', obj,function(res){
			response.send({status:true,mag:'删除商品',goodsDelete:res});
		})
	});
	// 添加商品
	// INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
	// INSERT INTO Persons (LastName, Address) VALUES ('Wilson', 'Champs-Elysees')
	app.get('/goodsInsert',function(request,response){
		var data = request.query;
			
		db.hmInsert('goodsinfor' , data , function(res){
			response.send({status:true,mag:'添加商品',goodsDelete:res});
		})
	});


	//更新商品信息 ????????????
	app.get('/goodsUpdate',function(request,response){
		var data = request.query;
		var key = Object.keys(data).join(',');
        var val = Object.values(data).join('');
		console.log(data);
		console.log(key);
		console.log(val);
		db.hmUpdate( 'goodsinfor' ,data,function(){
			if(result.length>0){
                response.send({status: false, message:'获取商品失败'});
                console.log('更新失败');
            }else{
            	response.send({status: false, message:'获取商品成功'});
                console.log('更新成功');
            }
		});
	});

	//模糊查询
	//SELECT data FROM table WHERE key like '%needData%'
	//table, data, key, needData, callback
	app.get('/goodsAbout',function(request,response){
		var data = request.query;
		console.log(data);
		var about = Object.keys(data).join('');
		console.log(about);
		db.queryAbout('goodsinfor','*','name',about, function(res){

			response.send({status:true, msg:'根据id获取信息', data:res});
		})
	});

	//分页
	app.get('/goodsPaging',function(request,response){
		var data = request.query;
		var key = Object.keys(data).join(',');
        var val = Object.values(data)[0];
        var val2 = Object.values(data)[1];
        console.log(key);
        console.log(val);
		db.paging('goodsinfor',val,val2,function(res){
			if(res){
				db.account(function(num){
					
					var count = JSON.stringify(num);
					count = parseInt(count.replace(/[^0-9]/ig,''));
					
					response.send({status:true, msg:'获取信息', account:count, goodsdata:res});
				})
			}
		})
	})
}