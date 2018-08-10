module.exports = (app) => {
    app.get("/sistema_tbr", (req, res) => {
        app.app.controllers.tbr.tbr(app, req, res);
    });

    app.post("/generate_tbr", (req, res) => {
        app.app.controllers.tbr.generate_tbr(app, req, res);
    });
}