var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var Inventory   = require('./models/inventoryModel');

// Ports Control
var port = process.env.PORT || 3000;
var portIP = process.env.IP;

// Routes
var inventoryRoutes = require('./routes/inventoryRoutes');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

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
