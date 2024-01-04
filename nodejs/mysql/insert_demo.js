var con = require('./connection');
var sql = "insert into student2 (name ,email , gender , dob , contact) values ('Milan Harsora' , 'milan@gmail.com' , 1, '1958-02-13' , '9892465289')";

con.connection.query(sql, function (error, result) {
    if (error == true) {
        console.log("Error" + error);
    }
    else {
        console.log("Inserted id = " + result.insertId);
        console.log("total affected row = " + result.affectedRows);
        console.log("Recorded inserted Successfully ");
    }
});
con.connection.end();