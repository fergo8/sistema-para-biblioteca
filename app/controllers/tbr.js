module.exports.tbr = (app, req, res) => {
    if (req.session.authorized !== true) {
        res.render("error");
        return;
    }

    var user = req.session.user;
    res.render("tbr", { user : user });
}