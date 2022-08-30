var http = require('http');
var server = http.createServer(function(req,res){
    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Tecnologia</body></html>");
    }
}).listen(3000);