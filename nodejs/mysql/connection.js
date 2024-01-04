var mysql = require('mysql');
var connection = mysql.createConnection({
    "host" : "localhost",
    "user" : "root",
    "password" : "",
    "port" : 3306,
    "database" : "frontend18"
});

connection.connect(function(error){
    if(error == true)
    {
        console.log("Error" +error);
    }
    else{
        console.log("Connection Created Successfully...");
    }
});
module.exports.connection = connection;