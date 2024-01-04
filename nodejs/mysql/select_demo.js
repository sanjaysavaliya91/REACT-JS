var con = require("./connection");
var sql = "select * from student2";

con.connection.query(sql,function(error,result,fields){
    if(error == true)
    {
        console.log("Error" + error);
    }
    else{
        console.log("Total Number of Rows" + result.length);

        result.forEach(element => {
            console.log("name = " + element['name']);
            console.log("email = " + element['email']);
            console.log("gender = " + element['gender']);
            console.log("DOB = " + element['dob']);
            console.log("Contact = " + element['contact']);
        });
        console.log(result);
    }
})
con.connection.end();