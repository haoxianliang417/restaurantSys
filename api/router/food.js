var db = require('../dbhelper.js');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({
	extended: true,
});


exports.food = function(app){
	//获取菜系
	app.get('/getFoodStyle',urlencodeParser,function(request,response){
		db.hmQuery('style',function(res){
			if(res){
				response.send({status:true, msg:'成功获取菜系信息', foodStyle:res});
			}
		})
	});
	
	//添加分类
	app.post('/addClassify',urlencodeParser,function(request,response){
		console.log('request',request.body);
		var data = request.body;
		db.hmInsert('style',data,function(res){
			response.send({status: true, msg: '添加菜系', addClassify: res});
		})
		
	})
	

	//查询
	app.get('/getFood',function(request,response){
		
		var data = request.query;
		var key = Object.keys(data).join(',');
        var val = Object.values(data).join('');

		db.haiSearch('menu','style',val,function(res){

			if(res){
				response.send({status:true, msg: '成功获取菜单信息',munuStyle:res})
			}
		})
	});

	//添加菜品
	app.get('/addFood',urlencodeParser,function(request,response){
		console.log(123123,request);
		var data = request.query;
		console.log('这是data',data);
		db.hmInsert('menu',data,function(res){
			response.send({status:true,mag:'添加菜品',addFood:res});
		})
	});

	//编辑菜单
	app.get('/editFood',urlencodeParser,function(request,response){
		
		var data = request.query;
		console.log('这是data',data);
		
		db.hmUpdate('menu',data,function(res){
			response.send({status:true,mag:'编辑菜品',editFood:res});
		})
	});

	// 删除菜单
	app.get('/deleteFood',function(request,response){
		var data = request.query;
		db.hmdelete('menu',data,function(res){
			response.send({status:true,msg: '成功删除菜品',deleteFood: res})
		})
	});

	//模糊搜索菜单
	app.get('/searchFood',function(request,response){
		var data = request.query;
		console.log(data);
		var about = Object.values(data).join('');
		console.log(about);
		db.queryAbout('menu','*','menuName',about, function(res){

			response.send({status:true, msg:'根据name模糊搜索', searchFood:res});
		})
	});

	
	
	
}