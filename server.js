var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
	   newData = JSON.parse(data);
       
	   var obj = newData.user1.name;
	   console.log( obj );
       res.end( data );
   });
})

app.get('/getScores', function (req, res) {
   fs.readFile( __dirname + "/" + "scores.json", 'utf8', function (err, data) {
       console.log( data );
	   newData = JSON.parse(data);
	   RCATScore = newData.user1.RCAT;
	   var newScore = Number(RCATScore) + Number(10);
	   console.log ("Data " +newScore );
	   newData.user1.RCAT = newScore;
       res.end( JSON.stringify(newData) );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})