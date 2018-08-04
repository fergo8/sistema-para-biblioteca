module.exports = (app) => {
    app.get("/biblioteca", (req, res) => {
        app.app.controllers.library.library(app, req, res);
    });

    app.get("/pesquisar", (req, res) => {
        app.app.controllers.library.search_book(app, req, res);
    });
}