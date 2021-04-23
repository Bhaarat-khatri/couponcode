var express = require('express');
const {
    dirname
} = require('path');
const path = require("path");
const {
    render
} = require("ejs");
// require("./mongoose/db");
//require schemas
// require("./mongoose/schemas")
//bodyparser
var bodyParser = require('body-parser');
const mongoose = require("mongoose");

const {
    log
} = require('console');

var app = express();
//define ejs
app.set('view engine', 'ejs');
// respond with "hello world" when a GET request is made to the homepage
app.use(express.static("src/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());



app.get('/',function(req,res){
    res.render('home');
});





const Port = process.env.PORT || 8080 ;

app.listen(Port, () => {
  console.log("Your server is started at port " + Port);
});