var http = require('http');
var fs = require('fs');
//create server
var server = http.createServer(function(requist,response){
    response.writeHead(200,{'contant-type': 'text/html'});
    var filename = 'india.html';
    fs.readFile(filename,function(error,FileContant){

    
    if(error != null)
    {
        response.write('could not read data from file...');
    }
    else
    {
        response.write(FileContant);
    }
    response.end();
})
})
server.listen(5000);
console.log('Ready for Accept requist.....');