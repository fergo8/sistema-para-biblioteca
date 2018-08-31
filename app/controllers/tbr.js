module.exports.tbr = (app, req, res) => {
    if (req.session.authorized !== true) {
        res.render("error");
        return;
    }

    var user = req.session.user;
    res.render("tbr", { data: {}, user: user, books : {} });
}

module.exports.generate_tbr = (app, req, res) => {

    var dataForm = req.body;

    var user = req.session.user;
    var connection = app.config.dbConnection;
    var LibraryDAO = new app.app.models.LibraryDAO(connection);

    LibraryDAO.bookSelection(dataForm, user, res);
}