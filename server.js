//npm install --save express
var express = require('express');
//start express
var app = express();

app.use(express.static(__dirname + '/public'));


//router handling, api url is '/post-data'
app.get('/post-data', function(req, res, next){

	console.log(req.body);

});


app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});



var JSON_DATA = {};








var port = 3000;

app.listen(port);

console.log("Listening on port 3000...");
