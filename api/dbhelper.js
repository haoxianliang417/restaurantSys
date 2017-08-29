//npm install mongodb --save-dev
var mysql = require('mysql');

//联接 mysql 服务器
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'food'
});

console.log('连接数据库');
connection.connect();
//table:查询表，data：查询信息，callback:回调函数
module.exports = {
    //查询:SELECT data FROM table

    query: function(table, data, callback) {
        connection.query("SELECT" +' '+ data +' '+ "FROM" + ' '+table, function(err, result) {

            if (err) {
                console.log(err)
            } else {
                callback(result);
            } 
        
        });
    },
    //搜索
    haiSearch: function(table,keyword,callback){
       // var searchSql = "SELECT * FROM" +' '+table +' '+" where"+ ' '+'goodsPurchaseId'+' '+ "LIKE"+' '+"'%"+ keyword +"%'";
          var searchSql = "SELECT * FROM" +' '+table +' '+" where"+ ' '+'persons'+' '+ "LIKE"+' '+"'%"+ keyword +"%'";
        connection.query(searchSql,function(err,result){
            if(err) {
                console.log(err);
            } else {
                callback(result);
            }
        })
    },
    //插入
    haiInsert: function(table,key,val,callback){
        var addSql  = "INSERT INTO"+' '+table+' '+"("+key+") VALUES ("+val+");";
        connection.query(addSql ,function(err,result){
            if (err) {
                console.log(err);
            } else {
                callback(result);
            }

        })
    },
    //分页
    haiPage: function(table,startPage,endPage,callback){
        var pageSql = "SELECT * FROM"+' '+ table+' '+" limit"+' '+startPage+' '+","+' '+endPage+' ';
        connection.query(pageSql,function(err,result){
            if(err){
                console.log(err);
            }else{
                callback(result);
            }
        })
    },
    //更新
    haiUpdate: function(table,updateStr,whereStr,callback){
        var updateSql = "UPDATE"+' '+ table+' '+"SET"+' '+ updateStr+' '+ "WHERE"+' '+ whereStr+'';
        connection.query(updateSql,function(err,result){
            if(err){
                console.log(err);
            } else {
                callback(result);
            }
        })
    },
    //删除
    haiDelete: function(table, data, callback) {
        var deleteSql = "DELETE FROM "+' '+table +' '+" where "+' '+"goodsPurchaseId="+data+' ';
        connection.query(deleteSql,function(err,result){
            if (err) {
                console.log(err);
            } else {
                callback(result);
            }

        })

    },
    //查询：SELECT data FROM table WHERE key="need"
    queryFrom: function(table, data, key, needData, callback) {
        var str = 'SELECT' +' '+ data + ' '+'FROM' +' '+table +' '+'WHERE' +' '+key +'=' + needData;
        console.log(str)
        connection.query(str, function(err, result) {
            if (err) {
                console.log('查询出错！')
            } else {
                callback(result);
            }
        });        
    },
    queryCashier: function(barcode,callback){
        connection.query("SELECT * FROM goodsinfor INNER JOIN goodsprice ON goodsinfor.goodsId = goodsprice.goodsId WHERE goodsinfor.codeStr = "+barcode,function(err, result){
             if (err) {
                 console.log('查询出错！')
            } else {
                callback(result);
            }
        });
    },
     //模糊查询：SELECT data FROM table WHERE key like '%needData%'
    queryAbout: function(table, data, key, needData, callback) {
        var str = 'SELECT' +' '+ data + ' '+'FROM' +' '+table +' '+'WHERE CONCAT'+' ('+ key +') '+'like' +' '+"'%"+ needData +"%'";
        console.log(str)
        connection.query(str, function(err, result) {
            if (err) {
                console.log(err)
            } else {
                callback(result);
            }
        });


    },

    //分页
    paging: function(table, startNum, endNum, callback) {
        var queryData = 'SELECT SQL_CALC_FOUND_ROWS *' +' '+ 'FROM' + ' '+ table +' '+'limit'+' '+ startNum + ','+ endNum;
        connection.query(queryData, function(err, result) {
            if (err) {
                console.log(err)
            } else {
                callback(result);
            } 
        
        });
    },
    //获取表的总数
    account: function(callback){
         connection.query('SELECT FOUND_ROWS()', function(err, result) {
            if (err) {
                console.log(err)
            } else {
                callback(result);
            } 
        
        });
    },
    //删除  delete from tablename where id=1
    hmdelete: function(table,data, callback) {
        var key = Object.keys(data).join(',');
        var val = Object.values(data).join(',');
        connection.query('DELETE FROM ' + table + ' WHERE ' + key + '=' + val ,function(err,result){
            if(err){
                console.log('删除出错')
            }else{
                callback(result);
            }
        })
    },

    // 添加商品
    // INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
    // INSERT INTO Persons (LastName, Address) VALUES ('Wilson', 'Champs-Elysees')
    hmInsert: function(table,data,callback){
        var arr = [], item = '', str = '';
        for(var key in data){
            arr.push(data[key]);
            item += (key+',');
            str += '?,'
        }
        item = item.slice(0,-1);
        str = str.slice(0,-1);
        var  addSql = 'INSERT INTO' + ' ' + table + '(' + item + ') VALUES('+ str +')';
        connection.query(addSql, arr, function (err, result) {
            if(!err){
                if(callback && typeof callback == 'function'){
                    callback(result);
                }
            }          
        });

    },
    //更新商品
    hmUpdate: function(table,data,callback){
            var arr = [], item = '', id = '';
            for(var key in data){
                arr.push(data[key]);
                item += (key +'= ?,');
                id = key;
            }
            arr.push(data[id]);
            item = item.slice(0,-1);
            var modSql = 'UPDATE' + ' ' + table + ' ' +'SET '+ item+' WHERE '+ id+' = ?';
            console.log(modSql);
           
            connection.query(modSql, arr, function(err, result) {
                if(!err){
                    if(callback && typeof callback == 'function'){
                        callback(result);
                    }
                }          

             });
        },

    //修改,UPDATE Person SET Address = 'Zhongshan 23', City = 'Nanjing',WHERE LastName = 'Wilson'
    update: function(id,arr,callback) {
        var updateStr = 'UPDATE goodsinfor SET name=?,specifi=?,codeStr=?,place=?,discount=?,type=? WHERE goodsId='+ id;
        console.log(updateStr);
        console.log(arr)
        var _arr = [10,2,4,5,9,19]
         connection.query(updateStr,arr, function(err, result) {
            if (err) {
                console.log(err)
            } else {
                callback(result);
            } 
        
        });
    },
    //根据ID删除,适合各种id
      yedelete: function(table, key, serData, callback) {
        var delStr = 'DELETE FROM ' +' '+ table +' '+' WHERE ' +' '+key + '=' + serData;
        console.log(delStr);
        connection.query(delStr, function(err,result){
            if(err){
                console.log('删除出错')
            }else{
                callback(result);
            }
        })
    },

    //排序
    sort: function(table, data, callback) {}


}