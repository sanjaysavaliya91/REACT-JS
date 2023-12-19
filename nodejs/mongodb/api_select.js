var connection = require('./connection');
var express = require('express');
var app = express();

app.get('/sanjay', async function (request, response) {
    let database = connection.client.db('frontend18');
    try {
        let data = await database.collection('caurse').find({}).toArray();
        let res = [
            { 'error': 'no' },
            { 'total': data.length },
            { 'data': data },
        ]
        res = JSON.parse(JSON.stringify(res));
        response.send(res);
    }
    catch (error) {
        response.send({ 'error': 'Oops somthing went wrong' });
    }
})


app.get('/course/:name', async function (request, response) {

    let name = request.params.name;
    try {
        let database = connection.client.db('frontend18');
        let data = await database.collection('caurse').find({ 'name': name }).toArray();
        let res = [
            { 'error': 'no' },
            { 'total': data.length },
            { 'data': data }
        ];

        res = JSON.parse(JSON.stringify(res));
        response.send(res);
    }
    catch (error) {
        response.send({ 'error': error });
    }
});

app.listen(5000);
console.log('server ready...');