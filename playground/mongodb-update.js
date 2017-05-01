// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('59034ffc27adcd0da9073cd9')
  }, {
      $set: {
      name: 'Eric'
      },
     $inc: {
      age: 1
      }
  },
{
   
  
      returnOriginal: false
  }).then((result) => {
      console.log(result);
      
  });
                                          

    

  // db.close();
});
