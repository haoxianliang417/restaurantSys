
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
//socket
io.on('connection',function(socket){
    console.log('ok');
    //console.log(this);
    socket.emit('login','hehe');
    socket.on('click',function(aaa){
    console.log('click')
    })
})




server.listen(8888);
}