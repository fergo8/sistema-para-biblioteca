module.exports = (app) => {
    app.get("/cadastro", (req, res) => {
        app.app.controllers.cadastre.cadastre(app, req, res);
    });

    app.post("/register", (req, res) => {
        app.app.controllers.cadastre.register(app, req, res);
    });
}