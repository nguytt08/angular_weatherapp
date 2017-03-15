var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client/'));

app.get('/', function(req, res) {
});


console.log('WeatherApp is listening on 6060');
app.listen(6060);
