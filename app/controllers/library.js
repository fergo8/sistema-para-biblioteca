module.exports.library = (app, req, res) => {
    var user = req.session.user;
    res.render("library", { user : user });
}