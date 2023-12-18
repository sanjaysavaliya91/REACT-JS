var connection = require('./connection');

async function update() {

    try {
        let database = connection.client.db('frontend18');
        let search = { 'name': 'Navya Savaliya' };
        let newvalue = { $set: { 'rollNo': 10 } };

        await database.collection('student').updateMany(search, newvalue).then(function (error, result) {
            if (error === true)
                console.log(error);
            else
                console.log("update successfully");
        })
    }

    finally {
        connection.client.close();
    }
}
try {
    update();
} 
catch (error) {
    console.log(error);
    throw error;
}