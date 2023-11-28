var http = require("http");
var india = [{
name: "India",
officialName: "Republic of India",
capital: "New Delhi",
continent: "Asia",
population: '1.417 billion',
currency: "Indian rupee",
officialLanguage: "Hindi",
area: '3.287 million square kilometers',
independenceDay: "August 15th"
}];
var newZealand = [{
name: "New Zealand",
officialName: "Dominion of New Zealand",
capital: "Wellington",
continent: "Oceania",
population: '5.13 million',
currency: "New Zealand dollar",
officialLanguage: "English",
area: '268,021 square kilometers',
independenceDay: "February 6th"
}];
var australia = [{
name: "Australia",
officialName: "Commonwealth of Australia",
capital: "Canberra",
continent: "Oceania",
population: '25.7 million',
currency: "Australian dollar",
officialLanguage: "English",
area: '7.692 million square kilometers',
independenceDay: "January 1st"
}];
var server = http.createServer(function(request,response){
    console.log("Request received for ",request.url);
    //india
    //newzland
    //australia
     
    var data = JSON.stringify([{error:'no detail found'}]);
    response.writeHead(200,{'content-type':'application/json'});
    if(request.url == '/india')
    {
        data = JSON.stringify(india);
    }
    else if(request.url == '/australia')
    {
        data = JSON.stringify(australia);
    }
    else if(request.url == '/newzealand')
    {
        data = JSON.stringify(newZealand);
    }
    response.write(data);
    response.end();
});
server.listen(5000);
console.log("Ready to accept request");