var connection = require('./connection');
const bodyParser = require('body-parser');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended' : false}));

app.post('/course', async function(request,response){
    let caurse = request.body.caurse;
    let fees = request.body.fees;
    let time = request.body.time;
    if(caurse === undefined || fees === undefined || time === undefined){
        response.json({'error':'Input Missing'})
    }
    let database = connection.client.db('frontend18');
    let data = {
        'caurse': caurse,
        'fees' : fees,
        'time' : time
    }
    await database.collection('caurse').insertMany(data).then(function(error,result){
        if(error == true)
        response.json({'error':'yes'})
    else{
        let res = [
            {'error': 'no'},
            {'success':'yes'},
            {'message':'Course Added Successfully...'}
        ];
        response.json(res);
    }
    });
});
app.listen(5000);
console.log('server ready...');