var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var Inventory   = require('./models/inventoryModel');
var seedDB      = require('./seed');

// Ports Control
var port = process.env.PORT || 3000;
var portIP = process.env.IP;

// Routes
var inventoryRoutes = require('./routes/inventoryRoutes');

//Mongo Database
// mongoose.connect('mongodb://retsbud:String33@ds011241.mlab.com:11241/select_vettes');
mongoose.connect('mongodb://localhost/select_vettes');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// Seed Database
seedDB();

app.get('/', function(req, res) {
    res.redirect('/home');
});

app.get('/home', function(req, res){
  res.render('index');
});

app.use('/', inventoryRoutes);

app.listen(port, portIP, function() {
    console.log('Server has started..');
});
