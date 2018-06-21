/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:Password1@ds143778.mlab.com:43778/student';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("student");
    var myobj = [
        { name: 'John', phone: '245325423'},
        { name: 'Peter',phone: '245325423'},
        { name: 'Amy',phone: '245325423'},
        { name: 'Hannah', phone: '245325423'},
        { name: 'Michael', phone: '245325423'},
        { name: 'Sandy', phone: '245325423'},
        { name: 'Betty', phone: '245325423'},
        { name: 'Richard', phone: '245325423'},
        { name: 'Susan', phone: '245325423'},
        { name: 'Vicky', phone: '245325423'},
        { name: 'Ben', phone: '245325423'},
        { name: 'William',phone: '245325423'},
        { name: 'Chuck', phone: '245325423'},
        { name: 'Viola', phone: '245325423'},
        { name: 'Vk', phone: '245325423'},
        { name: 'Abd', phone: '245325423'}
    ];
    dbase.collection("phonenumber").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of records inserted: " + res.insertedCount);
        db.close();
    });
});