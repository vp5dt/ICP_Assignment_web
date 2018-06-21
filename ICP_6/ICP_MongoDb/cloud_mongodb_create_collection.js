/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:Password1@ds143778.mlab.com:43778/student';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("student");
    dbase.createCollection("students", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
