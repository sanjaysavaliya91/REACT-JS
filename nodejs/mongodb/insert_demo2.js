var connection = require('./connection');

async function insert(){
    try {
        await connection.run();
        let database = connection.client.db('frontend18');
        let data = {
            'name': 'Navya Savaliya',
            'age': 7,
            'study': "2nd class",
            'rollNo': 29
        }
        await database.collection('student').insertOne(data).then(function (error,response) {
            if (error == true)
                console.log(error.msg);
            else
                console.log('data insert successfully');
        });
    }
    finally {
        connection.client.close()
    }
}
try{
    insert();
}
catch(error){
    console.log(error);
    throw error;
}