var connection = require('./connection');

async function getData() {

     try {

          let database = connection.client.db("frontend18");
          try {
               let data = await database.collection("course").find({}, { projection: { _id: 0 } }).limit(2).sort('time').toArray()
               console.log(data);
          }
          catch (error) {
               console.log(error);
          }
     }
     finally {
          connection.client.close();
     }
}

try {
     getData();

} catch (error) {
     console.log(error)
     throw error;
}