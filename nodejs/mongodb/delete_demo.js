var connection = require('./connection');

async function deleteDemo(){
    try{
        let database = connection.client.db('frontend18');
    let search = {'name' : 'sanjay savaliya'}

    await database.collection('student').deleteMany(search).then(function(error,result){
        if(error === true)
        console.log(error);
    else
    console.log('Delete successfully');
    });
    }
    finally{
        connection.client.close();
    }
}
try{
    deleteDemo();
}
catch(error){
    console.log(error);
    throw error;
}