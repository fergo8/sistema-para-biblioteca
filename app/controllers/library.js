module.exports.library = (app, req, res) => {
    var user = req.session.user;

    var connection = app.config.dbConnection;
    var LibraryDAO = new app.app.models.LibraryDAO(connection);

    LibraryDAO.showBooks(res, user);

    // res.render("library", { user : user });
}