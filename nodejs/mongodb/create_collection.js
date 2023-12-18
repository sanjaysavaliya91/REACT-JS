
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sanjay:sanjay@cluster0.v5j40rh.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    let database = client.db('frontend18')
    await database.createCollection('register').then(function(error,response){
      if(error == true)
      {
        console.log(error);
      }
     else
     {
      console.log('collection create succsessful');
     }
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
