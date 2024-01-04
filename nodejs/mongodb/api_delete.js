var connection = require('./connection');
var express = require('express');
var app = express();

app.delete('/course/:name', async function (request, response) {
    let name = request.params.name;
    console.log(`Name is ${name}`);
    try {
        let database = connection.client.db('frontend18');
        await database.collection('caurse').deleteMany({ 'caurse': name }).then(function (error, result) {
            if (error == true) {
                response.json({ 'error': 'Somthing went wrong' });
            }
            else {
                response.json([
                    { 'error': 'no' },
                    { 'success': 'yes' },
                    { 'message': 'Caurse delete successfully' }
                ]);
            }
        });
    }
    finally {
        connection.client.close();
    }

});
app.listen(5000);
console.log('Server is ready...');
