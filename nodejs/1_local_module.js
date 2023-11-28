//example of local module
function getDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
  
    var fullDate = day + "-" + month + "-" + year;
    console.log(fullDate);
  
  }
  getDate();
  
  function getTime()
{
    var date = new Date();
    var hour = date.getHours(); //return current hour
    var minute = date.getMinutes(); //return current minutes
    var second = date.getSeconds(); //return current seconds
    let fullTime = hour + ":" + minute + ":" + second;
    console.log(fullTime);
}
getTime()
