var connection = require('./connection');

async function insert_register(){
   try{
    let database = connection.client.db('frontend18');
    let data = {
        'name' : 'mitali shah  ',
        'address' : 'jwels circle',
        'emeil' : 'mitali@gmail.com',
        'password' : '45689',
        'mobile' : '9856458795',
        'gender' : 'female'
    };
    await database.collection('register').insertOne(data).then(function(error,result){
        if(error == true)
        {
            console.log(error.msg);
        }
        else{
            console.log('Data insert Successfully');
            console.log(data);
        }
    });
   }
   finally{
    connection.client.close();
   }
};
try{
    insert_register();
}
catch(error){
    console.log(error);
    throw error;
}