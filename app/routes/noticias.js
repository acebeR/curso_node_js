var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
    app.get('/noticias', function(req,res){

        var connection = dbConnection();

        connection.query("SELECT * FROM noticias", function(error, result){
            console.log(result);
            console.log("erro:",error);
            // res.send(result);
            res.render('noticias/noticias', {noticias : result,frutinha: "teste"});
        });

        // 
    });
}