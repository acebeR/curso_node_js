
module.exports = function(aplication){
    aplication.get('/noticias', function(req,res){

        var connection = aplication.config.dbConnection();
        var noticiasModule = new aplication.app.models.noticiasModule;

        noticiasModule.getNoticias(connection, function(error,result){
            res.render("noticias/noticias",{noticias: result})
        });
    });
}