var connection = require('./connection');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': false }));

app.post('/update_course', async function (request, response) {
    let caurse = request.body.caurse;
    let fees = request.body.fees;
    let time = request.body.time;
    let update = request.body.update;
    console.log(`Value of caurse is ${caurse} , fees is ${fees}, time is ${time}, update is ${update}`);
    let search = { 'name': update };
    let newvalue = {
        $set: {
            'caurse': caurse,
            'fees': fees,
            'time': time
        }
    }
    try {
        let database = connection.client.db('frontend18');
        await database.collection('caurse').updateMany(search, newvalue).then(function (error, result) {
            if (error == true) {
                response.json({ 'error': 'yes' });
            }
            else {
                response.json(
                    [
                        { 'error': 'no' },
                        { 'success': 'yes' },
                        { 'message': 'Caurse Updated Successfully' }
                    ]
                );
            }
        });
    }
    finally {
        connection.client.close();
    }
});
app.listen(5000);
console.log("server is ready...");