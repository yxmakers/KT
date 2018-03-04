var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');
var db = mongoose.connection;

var User = require('./server/models/user.js')

mongoose.connect('mongodb://admin:admin%40c03@localhost/kt');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log( 'we\'re connected!');
  });

app.use(bodyParser.json());
app.post('/sessions/create', function (req, res) {
    console.log('sessions create: '+ req.body.username);
    const userName = req.body.username;
    const userPwd = req.body.password;
    
    if(!userName || !userPwd) {
        return res.status(400).send('You must send the username and password!');
    }

    User.findOne({'name':userName}, function(err,user) {
        if(err){
            console.log(err);
        }
        if(!user)
        {
            console.log('can\'t find :' + userName)
            return res.status(401).send('The username or password don\'t match!');
        }
        if(user.pwd !== userPwd)
        {
            console.log('error pass word: '+ userPwd);
            return res.status(401).send('The username or password don\'t match!');
        }

        console.log('success!');
        res.status(201).send({
            id_token:'id_'+req.body.username,
            access_token:'access_tokennnnnnnnnnn'
        });
    });

});
//static router
app.use(express.static(__dirname + '/build/default'));

app.get('/login', function (req, res) {
    res.send('Hello world!');
});

//dynamically include routes (controller)
fs.readdirSync('./server/controllers').forEach(function(file) {
    if(file.substr(-3) === '.js') {
        route = require('./server/controllers/' + file);
        route.controller(app);
    }
});

app.listen(3000);