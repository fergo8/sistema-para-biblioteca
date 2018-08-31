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

LibraryDAO.prototype.searchBooks = function(dataForm, res, user){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("book", function(err, collection){
            collection.find({
                $or : [
                    { author : dataForm.author },
                    { genre : dataForm.genre },
                    { pages : dataForm.pages },
                    { status : dataForm.status }
                ]
            }).toArray(function(err, result){
                res.render("library", { data : result, user : user })
            });
        });
        mongoclient.close();
    });
}

LibraryDAO.prototype.bookSelection = function(dataForm, user, res){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("book", function(err, collection){
            collection.find().toArray(function(err, result){
                res.render("tbr", { data: result, user: user, books : dataForm });
            });
        });
        mongoclient.close();
    });
}

LibraryDAO.prototype.updateBook = function(user, res){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("book", function(err, collection){
            collection.find().toArray(function(err, result){
                res.render("book_update", { data: result, user: user, msg: {}, bookValid: {} });
            });
        });
        mongoclient.close();
    });
}

LibraryDAO.prototype.deleteBook = function(book){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("book", function(err, collection){
            collection.deleteOne({ title: book.alterbook });
        });
        mongoclient.close();
    });
}

module.exports = () => {
    return LibraryDAO;
}