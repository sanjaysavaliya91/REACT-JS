var con = require('./connection');
var sql = "Update students2 set name = Jemish where id = 3";
con.connection.query(sql,function(error,result){

     if(error == true)
     {
          console.log("error " + error);
     }     
     else
     {
        //   console.log("Affected rows = " + result.affectedRows);
          console.log("Student updated Successfully ");
     }
});
con.connection.end();