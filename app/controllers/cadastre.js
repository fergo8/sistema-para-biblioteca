module.exports.cadastre = (app, req, res) => {
    res.render("cadastre", { valid : {} });
}

module.exports.register = (app, req, res) => {

    var formData = req.body;

    req.assert("user", "Nome do usuário não pode ficar vazio").notEmpty();
    req.assert("nickname", "Nickname não pode ficar vazio").notEmpty();
    req.assert("password", "Senha não pode ficar vazia").notEmpty();

    var error = req.validationErrors();

    if(error){
        res.render("cadastre", { valid : error });
    }

    var connection = app.config.dbConnection;
    var UserDAO = new app.app.models.UserDAO(connection);
    
    UserDAO.insertUser(formData);
}