module.exports.index = (app, req, res) => {
    res.render("index", { valid : {} });
}

module.exports.authenticate = (app, req, res) => {

    var formData = req.body;

    req.assert("nickname", "Nickname não foi preenchido").notEmpty();
    req.assert("password", "Senha não foi preenchida").notEmpty();

    var error = req.validationErrors();

    if(error){
        res.render("index", { valid : error });
    }

    var connection = app.config.dbConnection;
    var UserDAO = new app.app.models.UserDAO(connection);

    UserDAO.authenticate(formData, req, res);
}