//example of maths calculator 
//localhost:5000/add/?num1=100&num2=30;
//localhost:5000/sub/?num1=100&num2=30;
//localhost:5000/mul/?num1=100&num2=30;
//localhost:5000/div/?num1=100&num2=30;
//import http module
var http = require('http');
var url = require('url');
var server = http.createServer(function(request,response){
    console.log('we have received request for ' + request.url);
    //request.url return url as string for which request is received...
    //create object to access different part of url 
    var url_object = url.parse(request.url,true);
    var data = url_object.query; //return object which has data passed as parameter 
    console.log("num1 = " + data.num1);
    console.log("num2 = " + data.num2);
    //
    var num1 = parseInt(data.num1);
    var num2 = parseInt(data.num2);
    var path = url_object.pathname; // returns path of the url ex /add or /sub or /mul/
    console.log(path);
    var result;
    if(path == "/add/")
    {
        result = num1 + num2;
    }
    else if (path == "/sub/")
    {
        result = num1 - num2;
    }
    else if (path == "/mul/")
    {
        result = num1 * num2;
    }
    else if (path == "/div/")
    {
        result = num1 / num2;
    }
    response.writeHead(200,{'content-type':'text/html'});
    response.write('result is ' + result);
    response.end();
});
server.listen(5000);
console.log('ready to accept reqeust');