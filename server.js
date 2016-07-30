var express = require('express');
var app = express();
var middleware = require('./middleware.js');
var SEVER_PORT = process.env.PORT || 3000;

// The middleware is added in between the request


app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('about us');
});


app.listen(SEVER_PORT, function(){
    console.log('Express server started and it\'s listening to the port: ' + SEVER_PORT);
});;