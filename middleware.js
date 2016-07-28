module.exports = {
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