module.exports.book_cadastre = (app, req, res) => {
    if(req.session.authorized !== true){
        res.render("error");
        return;
    }
    
    var user = req.session.user;
    res.render("book_cadastre", { bookValid : {}, msg : {}, user : user });
}

module.exports.book_register = (app, req, res) => {

    var user = req.session.user;
    var formData = req.body;

    req.assert("title", "Título do livro não foi definido").notEmpty();
    req.assert("author", "Nome do autor não foi definido").notEmpty();

    var error = req.validationErrors();

    if(error){
        res.render("book_cadastre", { bookValid : error, msg : {}, user : user });
        return;
    }

    var connection = app.config.dbConnection;
    var LibraryDAO = new app.app.models.LibraryDAO(connection);

    LibraryDAO.insertBook(formData);

    res.render("book_cadastre", { bookValid : {}, msg : "Livro cadastrado com sucesso", user : user });
}

// =================================================================================

module.exports.book_update = (app, req, res) => {
    if (req.session.authorized !== true) {
        res.render("error");
        return;
    }

    var user = req.session.user;

    var connection = app.config.dbConnection;
    var LibraryDAO = new app.app.models.LibraryDAO(connection);

    LibraryDAO.updateBook(user, res);
}

module.exports.alter_book = (app, req, res) => {
    
    var user = req.session.user;
    var formData = req.body;

    req.assert("title", "Título do livro não foi definido").notEmpty();
    req.assert("author", "Nome do autor não foi definido").notEmpty();

    var error = req.validationErrors();

    if (error) {
        res.render("book_update", { data: {}, user: user, msg: {}, bookValid: error });
        return;
    }

    var connection = app.config.dbConnection;
    var LibraryDAO = new app.app.models.LibraryDAO(connection);

    LibraryDAO.alterBook(formData);
    res.render("book_update", { data: {}, user: user, msg: {}, bookValid: {} });
}

module.exports.delete_book = (app, req, res) => {
    
    var user = req.session.user;
    var formData = req.body;

    req.assert("alterbook", "Livro a ser excluído não foi selecionado").notEmpty();

    var error = req.validationErrors();

    if (error) {
        res.render("book_update", { data : {}, user : user, msg : {}, bookValid: error });
        return;
    }

    var connection = app.config.dbConnection;
    var LibraryDAO = new app.app.models.LibraryDAO(connection);

    LibraryDAO.deleteBook(formData);
    res.render("book_update", { data: {}, user: user, msg: {}, bookValid: {} });
}