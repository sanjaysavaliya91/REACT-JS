var con = require("./connection");
var sql = "delete from student2 where id = 3"

con.connection.query(sql,function(error,result){

    if(error == true)
    {
        console.log("Error is" + error);
    }
    else{
        console.log("Affected Rows is" + result.affectedRows);
        console.log("Student Deleted Duccessfully...");
    }
});
con.connection.end();
