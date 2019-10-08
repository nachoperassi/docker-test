const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const PORT = 9000;
const HOST = '0.0.0.0';

// MONGO
const url = 'mongodb://localhost:7000';

const dbName = 'test';
 
MongoClient.connect(url, function(err, client) {
  if (!err) {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    db.collection('users').find({}).toArray()
    .then((data) => {
      console.log(data)
      client.close();
    });

    const app = express();

    app.get('/', (req, res) => {
      res.send('Hello world!!!');
    });

    app.listen(PORT, HOST, () => {
      console.log(`App running on http://${HOST}:${PORT}`);
    });
  }
  else console.log(err);
});
