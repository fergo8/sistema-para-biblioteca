module.exports = (app) => {
    app.get("/biblioteca", (req, res) => {
        app.app.controllers.library.library(app, req, res);
    });
}