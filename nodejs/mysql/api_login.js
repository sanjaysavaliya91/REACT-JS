var con = require("./connection");
var express = require("express");
var app = express();

app.get("login_form", function(request,response){
    let sql = "select * from "
});