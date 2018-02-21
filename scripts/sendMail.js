const sgMail = require('@sendgrid/mail');
const mongoClient = require("mongodb").MongoClient;
const async = require('async');

const sent = {};

const msg = {
    to: '',
    from: 'no-reply@microsoftcampusclub.com',
    subject: 'Microsoft ImagineTalks Schedule and Details',
    html: `
        <h1>Microsoft ImagineTalks</h1>
        <p>Schedule for Day 5 - 6th September</p>
        <h3>Venue - Room 401 Tech Park</h3>
        <h3>Slots</h3>
        <div class="block-detail">
            <span class="time">17:00 - 17:30</span><br>
            <span class="topic">What is Cloud?</span>
        </div>
        <br><br>
        <div class="block-detail">
            <span class="time">17:30 - 18:00</span><br>
            <span class="topic">Introduction to Microsoft Azure</span>
        </div>
        <br><br>
        <div class="block-detail">
            <span class="time">18:00 - 19:00</span><br>
            <span class="topic">Azure App Service: Hands On</span>
        </div>
    `,
};

sgMail.setApiKey('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');

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

mongoClient.connect("mongodb://microsoftclub:pjqZG2MZNmexC6CJ4MTmPyIqDouhGSD2QR3xPDFQnBeSfFHwkwYrtiaUTIBcK0DJk3CljvGKYFLZ5aQsLblwhQ==@microsoftclub.documents.azure.com:10255/?ssl=true",
    function(err, database) {
        if (!err) {
            const db = database;
            db.collection('Users').find({}).toArray(function(err, users) {
                async.each(users, function(user, cb) {

                    if (ValidateEmail(user.email)) {
                        if (sent[user.email]) {
                            // already sent
                        } else {
                            msg.to = user.email;
                            try {
                                sgMail.send(msg);
                            } catch (ex) {
                                console.log(msg.to);
                                console.log(ex);
                            }
                            sent[user.email] = true;
                        }
                    } else {
                        // invalid email
                    }
                    cb();
                }, function(err) {
                    console.log(err);
                    console.log(Object.keys(sent).length);
                });
            });

        }
    }
);