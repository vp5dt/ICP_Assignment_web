var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:Password1@ds143778.mlab.com:43778/student';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("student");
    dbase.collection("students").find({"address": 'Sideway 1633'}).sort({"name":-1}).each(function (mongoError, document) {
        if (mongoError) throw mongoError;
        if (document != null) {
        console.log(document);
    }
    });
    db.close();
});
