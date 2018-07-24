// import modules
const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const expressSession = require("express-session");

// express module init
const app = express();

// set view engine and path
app.set("view engine", "ejs");
app.set("views", "./app/views");

// middlewares config
app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(expressValidator());
app.use(expressSession({
    secret : "mnbvcxzasdfghjklçpoiuytrewq",
    resave : false,
    saveUninitialized : false
}));

// autoload config
consign()
    .include("app/routes")
    .then("app/models")
    .then("app/controllers")
    .then("config/dbConnection.js")
    .into(app);

module.exports = app;