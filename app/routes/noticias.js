module.exports = function(app){
    app.get('/noticias', function(req,res){

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'
        });

        connection.query("SELECT * FROM noticias", function(error, result){
            console.log(result);
            console.log("erro:",error);
            // res.send(result);
            res.render('noticias/noticias', {noticias : result,frutinha: "teste"});
        });

        // 
    });
}