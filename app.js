var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extened: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

app.listen(3000, function() {
    console.log('Server has started..');
})