const mongo = require("mongodb");

const connMongoDB = () => {
    console.log("Database connection start");
    const db = new mongo.Db(
        "library",                                      // database name
        new mongo.Server("localhost", 27017, {}),       // database connection object
        {}                                              // additional config object
    );
    return db;
}

module.exports = () => {
    return connMongoDB;
}