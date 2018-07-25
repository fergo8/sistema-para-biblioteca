module.exports.book_cadastre = (app, req, res) => {
    res.render("book_cadastre", { valid : {} });
}

module.exports.book_register = (app, req, res) => {

    var formData = req.body;

    req.assert("title", "Título do livro não foi definido").notEmpty();
    req.assert("author", "Nome do autor não foi definido").notEmpty();
    req.assert("genre", "Gênero não foi definido").notEmpty();
    req.assert("pages", "Quantidade de páginas não foi definida").notEmpty();
    req.assert("status", "Status de leitura não foi definido").notEmpty();

    var error = req.validationErrors();

    if(error){
        res.render("book_cadastre", { valid : error })
    }
}