var express = require('express');
var app = express();

app.get('/',function(request,response){
    response.send('This is Home page');
});

app.get('/aboutus',function(request,response){
    response.send('This is About Us page');
});

app.get('/myproduct',function(request,response){
    response.send('This is My product page');
});

app.all("*",function(request,response){
    response.send("this is 404 page. there is not such page you have requested...");
});

app.listen(5000);
 console.log('Redy to accept request....');