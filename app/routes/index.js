module.exports = (app) => {
    app.get("/", (req, res) => {
        app.app.controllers.index.index(app, req, res);
    });
}