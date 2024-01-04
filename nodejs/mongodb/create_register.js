var connection = require('./connection');

async function create_register() {
    try {
        let database = connection.client.db('frontend18');
        await database.createCollection('register1').then(function (error, response) {
            if (error == true) {
                console.log(error);
            }
            else {
                console.log('Creae Collection Successfully');
            }
        });
    }
    finally {
        connection.client.close();
    }
};
try {

    create_register();
}
catch(error){
    console.log(error);
   throw error;
}



