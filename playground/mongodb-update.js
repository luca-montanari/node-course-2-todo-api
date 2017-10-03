const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
  
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59d3e7093cea96de1533bcb1')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((results) => {
    //     console.log(results);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59d2a9c7cc7c6726a835ed46')
    }, {
        $set: {
            name: 'Andrew'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    });

    //ObjectId("59d2a9c7cc7c6726a835ed46")

    //db.close();
});