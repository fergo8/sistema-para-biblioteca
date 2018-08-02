module.exports.library = (app, req, res) => {
    if(req.session.authorized !== true){
        res.send("Necessário realizar login");
        return;
    }

    var user = req.session.user;

    var connection = app.config.dbConnection;
    var LibraryDAO = new app.app.models.LibraryDAO(connection);

    LibraryDAO.showBooks(res, user);
}