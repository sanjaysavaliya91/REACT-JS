var con = require("./connection");
var express = require("express");
var app = express();

app.delete("/delete-student/:id",function(request,response){
    let id = request.params.id;
    let sql = `delete from student2 where id = ${id}`;
    con.connection.query(sql,function(error,result){
        if(error == true)
        {
            response.json({'error':'yes'});
        }
        else{
            data = [
                {'error':'no'},
                {'success':'yes'},
                {'message': 'Student Delete Successfully'},
            ]
            response.json(data);
        }
    });
});
app.listen(5000);
console.log('Server ready...');