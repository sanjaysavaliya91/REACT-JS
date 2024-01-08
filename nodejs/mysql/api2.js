var express = require('express');
var con = require('./connection');
var app = express();
var bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ 'extended': false }));

app.post('/insert-student', function (request, response) {
     let name = request.body.name;
     let dob = request.body.dob;
     let email = request.body.email;
     let contact = request.body.contact;
     let gender = request.body.gender;
    //  console.log(`The value of name is ${name} dob is ${dob} email is ${email} contact is ${contact} gender is ${gender}`);
    let sql = `insert into student2 (name,email,gender,dob,contact) values ('${name}','${email}','${gender}','${dob}','${contact}')`;
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
                {'message':'Student Inserted Successfully'},
            ]

            response.json(data);
        }
    });
     
});
app.listen(5000);
console.log("Server ready ");