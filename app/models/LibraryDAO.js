function LibraryDAO(connection){
    this._connection = connection();
}

LibraryDAO.prototype.insertBook = function(book){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("book", function(err, collection){
            collection.insert(book);
        });
        mongoclient.close();
    });
}

LibraryDAO.prototype.showBooks = function(res, user){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("book", function(err, collection){
            collection.find().toArray(function(err, result){
                res.render("library", { data : result, user : user });
            });
        });
        mongoclient.close();
    });
}

LibraryDAO.prototype.searchBooks = function(res, user){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("book", function(err, collection){
            collection.find().toArray(function(err, result){
                res.render("library", { data : {}, user : user })
            });
        });
        mongoclient.close();
    });
}

module.exports = () => {
    return LibraryDAO;
}