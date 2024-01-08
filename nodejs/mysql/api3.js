app.put('/update-student/:name/:contact/:id', function (request, response) {

    let name = request.params.name;
    let contact = request.params.contact;
    let id = request.params.id;

    let sql = `UPDATE students set name = '${name}' , contact = '${contact}' where id = ${id} `;
    connnection.connection.query(sql, function (error, result) {

         if (error == true) {
              response.json({ 'error': 'yes' });
         }
         else {
              data = [
                   { 'error': 'no' },
                   { 'success': 'yes' },
                   { 'message': 'Student Updated Successfully ' },
              ]
              response.json(JSON.parse(JSON.stringify(data)));
         }
    });
});
app.listen(5000);
console.log("server ready ");