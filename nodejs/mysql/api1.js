var con = require("./connection"); 
var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ 'extended': true }));

app.get('/student', function (request, response) {
    var sql = "select * from student2";
    con.connection.query(sql, function (error, result, fields) {
        if (error == true) {
            response.json({ 'error': 'Oops something went wrong ' });
        }
        else {
            json_data = JSON.parse(JSON.stringify(result));
            data = [
                { 'error': 'no' },
                { 'success': 'yes' },
                { 'totla': result.length },
                { 'data': json_data },
            ]
            response.json(data);
        }
    });
})
app.listen(5000);
console.log("Server is Ready.....");
