var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:Password1@ds143778.mlab.com:43778/student';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("student");
    dbo.collection('phonenumber').aggregate([
        { $lookup:
                {
                    from: 'phonenumber',
                    localField: 'name',
                    foreignField: 'name',
                    as: 'students'
                }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});