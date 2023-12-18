var connection = require('./connection');

async function selectDemo() {
    try {
        let database = connection.client.db('frontend18');
        try {
            let data = await database.collection('caurse').find({}, { projection: { name: 0 } }).toArray();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    finally{
        connection.client.close();
    }
}
try {
    selectDemo();
}
catch(error){
    console.log(error);
    throw error;
}