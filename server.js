var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());


// var mongoose = require('mongoose');
// var db = mongoose.connection;
// mongoose.connect('mongodb://admin:admin@localhost/kt');
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     // we're connected!
//     console.log.bind(console, 'we\'re connected!');
//   });



app.post('/sessions/create', function (req, res) {
    console.log.bind(console, 'sessions create: '+ req.body.username);
    res.status(201).send({
        id_token:'id_'+req.body.username,
        access_token:'access_tokennnnnnnnnnn'
    });
});
//static router
app.use(express.static(__dirname + '/build/default'));

app.get('/login', function (req, res) {
    res.send('Hello world!');
});


app.listen(3000);