function UserDAO(connection){
    this._connection = connection();
}

UserDAO.prototype.insertUser = function(user){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("user", function(err, collection){
            collection.insert(user);
        });
        mongoclient.close();
    });
}

UserDAO.prototype.authenticate = function(user, req, res){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("user", function(err, collection){
            collection.find(user).toArray(function(err, result){
                if(result[0] != undefined){
                    req.session.authorized = true;

                    req.session.user = result[0].user;
                    req.session.nickname = result[0].nickname;
                }
                if(req.session.authorized){
                    res.redirect("cadastro_de_livro");
                }
                else {
                    res.render("index", { valid : {} });
                }

            });
        });
        mongoclient.close();
    });
}

module.exports = () => {
    return UserDAO;
}