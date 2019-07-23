var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
 
var cloud = true;
 
var mongodbHost = '127.0.0.1';
var mongodbPort = '27017';
 
var authenticate ='';
//cloud
if (cloud) {
 mongodbHost = 'ds261486.mlab.com';
 mongodbPort = '61486';
 authenticate = 'zafeer:zafeer123@'
}
 
var mongodbDatabase = 'hydrodata';

var test = "DOes this workKKK"
 
// connect string for mongodb server running locally, connecting to a database called test
var url = 'mongodb://'+authenticate+mongodbHost+':'+mongodbPort + '/' + mongodbDatabase;
 
 
// find and CRUD: http://mongodb.github.io/node-mongodb-native/2.0/tutorials/crud_operations/
// aggregation: http://mongodb.github.io/node-mongodb-native/2.0/tutorials/aggregation/
 
MongoClient.connect(url, function(err, db) {
   assert.equal(null, err);
   console.log("Connected correctly to server.");
//var cursor = collection.find({});
    // find top 20 countries by  size
    db.collection('cost2018').find({}).toArray(function(err, results){
        console.log(results.find(site => site.eng === 'A0142'));
    });

    db.collection('directhydro2018').find({}).toArray(function(err, results){
        console.log(results.find(site => site.eng === 'A0142'));
        db.close();
        console.log("Connection to database is closed.");
    }); 
}) 