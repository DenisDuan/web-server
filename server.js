var express = require('express');
var app = express();
var SEVER_PORT = 3000;

// The middleware is added in between the request
var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('private route hit!');
        next();
    }, 
    logger: function (req, res, next){
        var dateStr = new Date().toString();

        console.log('Request datetime: ' + dateStr + ' method: '  + req.method + ' ' + req.originalUrl );
        next();
    }
} ;

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('about us');
});


app.listen(SEVER_PORT, function(){
    console.log('Express server started and it\'s listening to the port: ' + SEVER_PORT);
});;