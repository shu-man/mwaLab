var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {

    const db = req.db;

    //1
    db.asssignment9.aggregate([{$match: {state: "IA"}}, {$project: {_id: 1}}], function (err, data) {
        console.log(data);

    });

    //2
    db.asssignment9.aggregate([{$match: {pop: {$lt: 1000}}}, {$project: {_id: 1}}], function (err, data) {
        //console.log(data);
    });

    //3
    db.asssignment9.aggregate([
        {$group: {_id: {'city': '$city', 'state': '$state'}, 'numZipCodes': {$sum: 1}}},
        {$match: {'numZipCodes': {$gt: 1}}},
        {$project: {'_id': 0, 'city': '$_id.city', 'state': '$_id.state', 'numZipCodes': 1}},
        {$sort: {'state': 1, 'city': 1}}

    ], function (err, data) {
        // console.log(data);

    });

    //4
    db.asssignment9.aggregate([
        {$group: {_id: {'city': '$city', 'state': '$state'}, 'population': {$sum: '$pop'}}},
        {$sort: {'population': 1}},
        {$group: {'_id': '$_id.state', 'city': {$first: '$_id.city'}, 'population': {$first: '$population'}}},
        {$sort: {'_id': 1}}
    ], function (err, data) {
        // console.log(data);

    });

    res.send('respond with a resource');


});

module.exports = router;
