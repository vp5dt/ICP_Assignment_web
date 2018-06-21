

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:Password1@ds143778.mlab.com:43778/student';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("student");
    dbase.collection("students").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
