var express = require('express');
var con = require('./connection');
var app = express();
var bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ 'extended': false }));

app.post('/register_email', function (request, response) {
     let email = request.body.email;
     let password = request.body.password;
    //  console.log(`The value of name is ${name} dob is ${dob} email is ${email} contact is ${contact} gender is ${gender}`);
    let sql = `insert into register (email,password) values ('${email}','${password}')`;
    console.log(sql);
    con.connection.query(sql,function(error,result){
        if(error == true)
        {
            response.json({"error" : 'yes'});
        }
        else{
            data = [
                {'error': 'no'},
                {'success':'yes'},
                {'message':'Data Inserted Successfully'},
            ]

            response.json(data);
        }
    });
     
});
app.listen(5000);
console.log("Server ready ");