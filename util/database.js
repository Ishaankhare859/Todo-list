

// let _db;
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ishaan:pr25jNshausztS0R@cluster0.vuhnr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");


//   const getDb = ()=>{
//     if(collection){
//         return collection;
//     }
//     throw 'yes database found'
// };
// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
//   client.close();
// });


// // const mongoConnect = callback =>{
// //     MongoClient.connect('mongodb+srv://ishaan:pr25jNshausztS0R@cluster0.vuhnr.mongodb.net/todolist?retryWrites=true&w=majority'
// //     )
// //     .then(client => {
// //         console.log('connected!');
// //         _db=client.db('todolist');
// //         callback();
// //     })
// //     .catch(err => {
// //     console.log(err);
// //     throw err
// //     });
// // };
// // const getDb = ()=>{
// //     if(_db){
// //         return _db;
// //     }
// //    // throw 'yes database found'
// // };
