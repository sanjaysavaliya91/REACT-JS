var http = require('http');
var fs = require('fs');
var url = require('url');

//creat server

var server = http.createServer(function(request,response){
    response.writeHead(200,{'contant-type' : 'text/html'});
    var url_object = url.parse(request.url,true);
    var path = url_object.pathname;  // india/ or /canada/ or /usa/
    //read file india.html and return it's content to client using response object
    var filename ;
    if(path === '/india/')
    {
        filename = 'india.html';
    }
    else if(path === '/usa/')
    {
        filename = 'usa.html';
    }
    else if(path === '/canada/')
        filename = 'canada.html';
    else
    {
        filename = 'error.html';
    }
    fs.readFile(filename,function(error,FileContant){
        if(error != null)
        {
            response.write('could not read data from file...')
        }
        else
        {
            response.write(FileContant);
        }
        response.end();
    })
})
server.listen(5000);
console.log('Ready to accept request'); 