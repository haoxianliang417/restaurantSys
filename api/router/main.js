
var path = require('path');

exports.main = function(express) {

var app = express();
app.use(express.static(path.join(path.resolve(__dirname, '../../'), '/')), function(req, res, next) {

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
io.on('connection',function(socket){
    //console.log(socket);
    //socket.emit('login','ok');
    //console.log(socket.id)
    socket.emit('login','hehe');
    socket.on('login',function(obj){
        //console.log(obj.uid);
        console.log(obj)
        console.log(obj.wid)
        if(obj.wid!= undefined){
            obj.uid=socket.id;
            waiter.push(obj);
            console.log(waiter)
            console.log(waiter[0].uid);
        }
       
    })
    socket.on('click',function(){
    //console.log('click')
    //socket.emit('lianjie','100000');
    console.log(io.sockets.sockets);
    io.sockets.sockets[waiter[0].uid].emit('hehe', 'ekkeke');
    })
    socket.on('data',function(obj){
        console.log(obj);
        socket.emit('hehe','ok');
    })

})




server.listen(8888);
}