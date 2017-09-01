
var path = require('path');

var food = require('./food');


var goodsData = require('./goodsData')
var order = require('./Order.js')

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



food.food(app);

goodsData.goodsData(app)
order.order(app)
app.get('/', function(request, response) {

    response.send('Home Page');
})
app.listen(8888);
}