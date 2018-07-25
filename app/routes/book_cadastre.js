module.exports = (app) => {
    app.get("/cadastro_de_livro", (req, res) => {
        app.app.controllers.book_cadastre.book_cadastre(app, req, res);
    });

    app.post("/book_register", (req, res) => {
        app.app.controllers.book_cadastre.book_register(app, req, res);
    });
}