module.exports = (app) => {
    app.get("/biblioteca", (req, res) => {
        app.app.controllers.library.library(app, req, res);
    });

    app.post("/pesquisar", (req, res) => {
        app.app.controllers.library.search_book(app, req, res);
    });
}