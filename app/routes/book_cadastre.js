module.exports = (app) => {
    app.get("/cadastro_de_livro", (req, res) => {
        app.app.controllers.book_cadastre.book_cadastre(app, req, res);
    });

    app.post("/book_register", (req, res) => {
        app.app.controllers.book_cadastre.book_register(app, req, res);
    });

    app.get("/alterar_livro", (req, res) => {
        app.app.controllers.book_cadastre.book_update(app, req, res);
    });

    app.post("/livro_alterado", (req, res) => {
        app.app.controllers.book_cadastre.alter_book(app, req, res);
    });

    app.post("/livro_deletado", (req, res) => {
        app.app.controllers.book_cadastre.delete_book(app, req, res);
    });
}