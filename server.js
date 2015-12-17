//npm install --save express
var express = require('express');
//start express
var app = express();


//router handling, api url is '/post-data'
app.get('/post-data', function(req, res, next){

	console.log(req.body);

});



var JSON_DATA = {};








var port = 3000;

app.listen(port);

console.log("Listening on port 3000...");
