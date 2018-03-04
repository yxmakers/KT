var mongoose = require('mongoose')
var Point = require('../models/point');
module.exports.controller = function (app) {

    /**
     * for point CRUD
     */
    app.post('/p/c', function (req, res) {
        //res.send('point create: ')
        //TODO insert to points
        const title = req.body.title;
        const des = req.body.des;
        const posX = req.body.x;
        const posY = req.body.y;
        //const pointVersion = req.body.v;

        console.log('create point -> ' + title + ':' + des);
        var newPoint = new Point({
            "title": title,
            "des": des,
            "x": posX,
            "y": posY,
            "v": 1
        });
        newPoint.save(
            function (err, rt) {
                if (err) {
                    console.log('err:' + err)
                    res.status(201).send({
                        'err': err
                    });
                    return;
                }
                else {
                    //TODO only send id;
                    res.status(201).send(rt);
                }
            }
        );
    });

    app.post('/p/r', function (req, res) {
        Point.find(function(err,rt) {
            if(err) {
                console.log('point read error: '+ err);
                return res.status(201).send({'err':err});
            }
            else {
                console.log('point read : '+ rt);
                return res.status(201).send(rt);
            }
        });
    });

    app.post('/p/u', function (req, res) {
        //res.send('point update: ')
        //TODO 
        const p_id = req.body.id;
        let newPoint = req.body

        console.log('update :'+p_id + ' to '+ newPoint.x + ':'+newPoint.y);
        Point.findByIdAndUpdate({_id:p_id},{$set:newPoint}, function(err){
            if(err){
                console.log('point read error: '+ err);
                return res.status(201).send({'err':err});
            }
        })
        res.status(201).send({'rt':'update success!'});

    });

    app.post('/p/d', function (req, res) {
        res.send('point delete: ')
        //TODO 

    });

}