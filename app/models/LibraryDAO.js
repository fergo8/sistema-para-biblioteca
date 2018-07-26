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

module.exports = () => {
    return LibraryDAO;
}