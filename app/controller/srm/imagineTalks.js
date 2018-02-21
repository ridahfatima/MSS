var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://msclub:ILE6mrlMdqjA7wXVFmsVhqNB2NYVqi2uDEgzjm0TBpwUfB8BPBSnjP6Hipn7HnFE4T8xklEIQUBgxKy1n1ui6Q==@msclub.documents.azure.com:10255/?ssl=true&replicaSet=globaldb", 
function (err, database) {
    if(!err)
    {
        db = database;
        console.log('DB Connected at ImagineTalks');
    }
});

var db;

var exports = module.exports = {};
exports.login = function(request, response)
{
    
}

exports.register = function(body)
{
    db.collection('Users').insertOne(body, function(err, data)
    {
        console.log('Error : ' + err);
        console.log('Written Data');
    });
}

exports.registerMSPMeetup = function(body)
{
    db.collection('MSPChennai').insertOne(body, function(err, data)
    {
        console.log('Error : ' + err);
        console.log('Written Data');
    });
}

exports.checkCount = function(callback)
{
    db.collection('Users').find({}).toArray(function(err, data)
    {
        callback(data.length);
    });
}

exports.checkCountMSP = function(callback)
{
    db.collection('MSPChennai').find({}).toArray(function(err, data)
    {
        callback(data.length);
    });
}