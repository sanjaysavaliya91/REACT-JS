var express = require('express');
var app = express();
var route = '/category';

//define to all catgory in get method

app.get(route,function(request,response){
    response.send('recived request in get method...' + route );
});

app.post(route,function(request,response){
    response.send('recived request in post method' + route);
});

app.put(route,function(request,response){
    response.send('recived request in post method' + route);
});

app.delete(route,function(request,response){
    response.send('recived request in delete method' + route);
});
app.listen(5000);
console.log('request accepted....');