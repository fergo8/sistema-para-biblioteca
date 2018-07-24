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

module.exports = () => {
    return UserDAO;
}