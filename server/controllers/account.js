var mongoose = require('mongoose')
var Video = require('../models/point');
module.exports.controller = function (app) {
    app.get('/account', function (req, res) {
        res.send('account pages. ')
        //TODO 

    });
}