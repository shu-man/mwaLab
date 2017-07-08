var express = require('express');
var router = express.Router();
var objectId=require('mongodb').ObjectID;
var db;
/* GET home page. */
router.get('/', function (req, res, next) {
    db = req.db;
    db.mwaLab8c.find({}).toArray(function (err, data) {
        console.log(JSON.stringify(data));
        res.render("home", {locationData:data});
    })
});

router.post('/', function (req, res, next) {
    db = req.db;
    const data = {
        "name": req.body.name,
        "Category": req.body.category,
        "coords": [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
    };
    db.mwaLab8c.insert(data, function (err, data) {
        if (!err)
            res.redirect("/");
    })
});

router.get('/delete/:id', function (req, res, next) {
    db = req.db;
   const id=req.params['id'];
   console.log(id);
   db.mwaLab8c.remove({_id:objectId(id)});
   res.redirect("/");
        /*db.mwaLab8c.insert(data, function (err, data) {
            if (!err)
                console.log("Inserted Successfully");
        })*/
});

router.post('/update', function (req, res, next) {
    db = req.db;
    const id=req.body.id;

    var obj = {
        name: req.body.name,
        Category: req.body.category,
        coords: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
    };

    db.mwaLab8c.update({_id: objectId(id)}, obj, function (err, data) {
        res.redirect('/');
    });
    // db.mwaLab8c.remove({_id:objectId(id)});
    // res.redirect("/");
    /*db.mwaLab8c.insert(data, function (err, data) {
     if (!err)
     console.log("Inserted Successfully");
     })*/
});



module.exports = router;
