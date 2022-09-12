module.exports = function(aplication){
    aplication.get('/noticia', function(req,res){


        var connection = aplication.config.dbConnection();
        var noticiasModule = aplication.app.models.noticiasModule;

        noticiasModule.getNoticia(connection, function(error,result){
            res.render("noticias/noticia",{noticia: result})
        });
    });
}