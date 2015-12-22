//npm install --save express
var express = require('express');
var bodyParser = require('body-parser');
//start express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));



app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


//router handling, api url is '/post-data'
app.get('/post-data', function(req, res, next){

	console.log(req.body);

});

app.post('/update-db', function(req, res, next){
    console.log("This is Req.Body:\n", req.body);
    res.json(req.body);
});



app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});



var JSON_DATA = {};

var db = {
    blogPost: [
    {
        id: 1,
        author: 'Daniel',
        comment: 'First comment. Boo yeah.'
    },
    {
        id: 2,
        author: 'Levi',
        comment: 'Second place. Womp womp'
    }
]};


var port = 3000;

app.listen(port);

console.log("Listening on port 3000...");
