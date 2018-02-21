var express = require('express')
var router = express.Router()
const path = require("path");
var appDir = path.dirname(require.main.filename);

var imagine = require('./imagineTalks.js');

router.get('/', (req, res) => {
    res.sendFile(path.join(appDir, 'views/srm', 'index.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(appDir, 'views/srm', 'contact.html'));
});
router.post('/contact', (req, res) => {
    console.log(req.body);
    res.status(200);
    res.end();
});

router.get("/about", (req, res) => {
    res.sendFile(path.join(appDir, 'views/srm', 'about.html'));
});

// app.get('/imagine', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'imagine.html'));
// });

// router.get('/mspmeetup', (req, res) => {
//     res.sendFile(path.join(appDir, 'views', 'mspmeetup.html'));
// });

// router.post('/mspmeetup/', (req, res) => {
//     console.log(req.body);
//     imagine.registerMSPMeetup(req.body);
//     res.status(304);
//     res.end();
// });

module.exports = router