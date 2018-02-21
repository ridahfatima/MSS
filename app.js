const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const flash = require("flash");
var mongoConnect = require('./app/Utilities/mongoConnect.js');
var srmcontroller = require('./app/controller/srm/index')

var IP, port;
if(process.env.USERNAME == "microsoft"){
    IP = "10.0.2.20"
    port = "80"
    env = "Production"
}
else{
    IP = "127.0.0.1"
    port = "3000"
    env = "development"
}
app.set('port', port);
app.set('ip', IP);
app.set('env', env);
app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static'), { maxAge: 31557600000 }));

app.get('/', (req, res) => {
    res.redirect('/srm');
});

app.use('/srm', srmcontroller);

app.set('view engine', 'ejs')
app.listen(app.get('port'), app.get('ip'), () => {
    console.log(' App is running at http://%s:%d in %s mode', app.get('ip'), app.get('port'), app.get('env')); 
    console.log('  Press CTRL-C to stop\n');
});
