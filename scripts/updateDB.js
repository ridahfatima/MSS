const mongoClient = require("mongodb").MongoClient;
const async = require('async');
mongoClient.connect("mongodb://microsoftclub:pjqZG2MZNmexC6CJ4MTmPyIqDouhGSD2QR3xPDFQnBeSfFHwkwYrtiaUTIBcK0DJk3CljvGKYFLZ5aQsLblwhQ==@microsoftclub.documents.azure.com:10255/?ssl=true",
    function(err, database) {
        if (!err) {
            let db = database;
            let newdb;
            db.createCollection('ModifiedUsers', {}, function(err, ModifiedUsers) {
                console.log(err);

                db.collection('Users').find({}).toArray(function(err, users) {
                    async.each(users, function(user, cb) {
                        user.accessCode = user._id.toString().slice(-4);
                        user.privilegeLevel = 'user';
                        //console.log(user);
                        ModifiedUsers.insert(user);
                        cb();
                    }, function(err) {
                        console.log(err);
                    });
                });

            });

        }
    });