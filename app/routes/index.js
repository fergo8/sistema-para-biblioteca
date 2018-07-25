module.exports = (app) => {
    app.get("/", (req, res) => {
        app.app.controllers.index.index(app, req, res);
    });

    app.post("/authenticate", (req, res) => {
        app.app.controllers.index.authenticate(app, req, res);
    });
}