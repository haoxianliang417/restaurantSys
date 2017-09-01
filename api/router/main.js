
var path = require('path');

var food = require('./food');

var haiDate = require('./haiData.js');
var goodsData = require('./goodsData')
var order = require('./Order.js')
var bill = require('./bill.js')
exports.main = function(express) {

var app = express();

app.use(express.static(path.join(path.resolve(__dirname, '../../'), '/')), 
    function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});




app.get('/', function(request, response) {
    response.status(200).send('Home Page');
})
var server =require('http').createServer(app);
var io = require('socket.io')(server);
// io.of('kitchen').on('connection',function(socket){

//     console.log('ok');
//     //console.log(this);
//     socket.emit('login','hehe');
//     socket.on('click',function(){
//     })
// })
var waiter = [];
var menu = [];
io.on('connection',function(socket){
    //console.log(socket);
    //socket.emit('login','ok');
    //console.log(socket.id)
    socket.emit('login','hehe');
    socket.on('login',function(obj){
        //console.log(obj.uid);
        //console.log(obj)
        console.log(obj);
        if(obj.wid!= undefined){
            console.log(111)
            if(waiter.length!=0){
                waiter.forEach(function(item,index){
                if(item.uid!= obj.wid){
                    obj.uid=socket.id;
                    }
                })
            }else{
                obj.uid=socket.id;
                waiter.push(obj);  
            }
            
            //console.log('hehe')
            //console.log(waiter);
        }  
         if(obj.mid!= undefined){
            console.log(222)
            if(menu.length!=0){
                menu.forEach(function(item,index){
                if(item.mid!= obj.mid){
                    obj.mid=socket.id;
                    }
                })
            }else{
                obj.uid=socket.id;
                menu.push(obj);  
            }
            
            //console.log('hehe')
            //console.log(waiter);
        }  
    })
    socket.on('waiter',function(obj){
        console.log(waiter[0].uid);
        console.log(menu[0].uid);
        //console.log(obj);
        io.sockets.sockets[waiter[0].uid].emit('mwaiter', 'true');
    })
    socket.on('disconnect',function(obj){
        //console.log(obj.uid);
        //console.log(obj)
        for(var i=0;i<waiter.length;i++){
            if(waiter[i].wid==obj.wid){
               waiter.aplice(i,1); 
            }
            
        }
        console.log('123');
    })

    socket.on('click',function(){
        //console.log(io.sockets.sockets);
        //console.log(waiter.length);
        if(waiter.length!=0){
            io.sockets.sockets[waiter[0].uid].emit('hehe', '3');
        }
        //
        //console.log(waiter);
        //console.log(waiter.length);
    })
    socket.on('data',function(obj){
        console.log(obj);
        socket.emit('hehe','ok');
    })
    socket.on('receive',function(data){
        console.log(waiter[0].uid);
        console.log(menu[0].uid);
        io.sockets.sockets[menu[0].uid].emit('receive', 'data');
    })

})
haiDate.haiData(app);

food.food(app);

goodsData.goodsData(app)
order.order(app)

app.get('/', function(request, response) {

    response.send('Home Page');
})
//app.listen(8888);

bill.bill(app)
server.listen(8888);

}