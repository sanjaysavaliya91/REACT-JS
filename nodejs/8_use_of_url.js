var http = require("http");
var server = http.createServer(function(request,response){
    console.log(request.url);
    response.writeHead(200,{'content-type':'text/html'});
    if(request.url === "/")
    {
        response.write('<html><head></head><body><h1>Home</h1></body></html>')
    }
    else if(request.url === "/aboutus")
    {
        response.write('<html><head></head><body><h1>About us</h1></body></html>')
    }
    else if(request.url === "/contactus")
    {
        response.write('<html><head></head><body><h1>Contact us</h1></body></html>')
    }
    response.end();
});
server.listen(5000);
console.log("Ready to accept request...");