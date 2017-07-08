var express = require('express');
var router = express.Router();

var db;
/* GET home page. */
router.get('/', function (req, res, next) {

    db = req.db;
    next();
});

//to display all documents in the collection restaurants
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({}).each(function (err, data) {

        if (!err) next();
        // console.log(data);
    })
});

//display fields restaurant_id,name,district and cuisine
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({}, {"restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1}).each(function (err, data) {

        if (!err) next();
        // console.log(data);
    })
});

//display fields restaurant_id,name,district and cuisine but exclude field_id
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({}, {
        "restaurant_id": 1,
        "name": 1,
        "district": 1,
        "cuisine": 1,
        "_id": 0
    }).each(function (err, data) {

        if (!err) next();
        //  console.log(data);
    })
});

//display fields restaurant_id,name,district,zipcode and cuisine but exclude field_id
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({}, {
        "restaurant_id": 1,
        "name": 1,
        "district": 1,
        "cuisine": 1,
        "_id": 0,
        "address.zipcode": 1
    }).each(function (err, data) {

        if (!err) next();
        //console.log(data);
    })
});

//display all restaurant which is in district Bronx
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"district": "Bronx"}).each(function (err, data) {

        if (!err) next();
        // console.log(data);
    })
});

//display first 5 restaurants which is in district Bronx
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"district": "Bronx"}).limit(5).each(function (err, data) {

        if (!err) next();
        //console.log(data);
    })
});

//display next 5 restaurants after skipping 5 restaurants which is in district Bronx
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"district": "Bronx"}).skip(5).limit(5).each(function (err, data) {

        if (!err) next();
        // console.log(data);
    })
});

//display restaurants with latitude value less than -95.754168
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"address.coord[1]": {$lt: -95.754168}}).each(function (err, data) {

        if (!err) next();
        // console.log(data);
    })
});

//display restaurants which are not American cuisine, grade score more than 70 and latitude less than -65.754168
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({$and: [{"address.coord[1]": {$lt: -95.754168}}, {"grades.score": {$gt: 70}}, {"cuisine": {$ne: "American"}}]}).each(function (err, data) {

        if (!err) next();
        // console.log(data);
    })
});


//display restaurants which contains Wil as first three letters and find resturantId,name,district and cuisine
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"name": {$regex: "^Wil"}}, {
        "restaurant_id": 1,
        "name": 1,
        "district": 1,
        "cuisine": 1
    }).each(function (err, data) {

        if (!err) next();
        // console.log(data);
    })
});


//display restaurants which contains res as last three letters and find restaurantId,name,district and cuisine
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"name": {$regex: "ces$"}}, {
        "restaurant_id": 1,
        "name": 1,
        "district": 1,
        "cuisine": 1
    }).each(function (err, data) {

        if (!err) next();
        //console.log(data);
    })
});

//display restaurants which contains Reg as three letters somewhere in the name and find restaurantId,name,district and cuisine
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"name": {$regex: "Reg"}}, {
        "restaurant_id": 1,
        "name": 1,
        "district": 1,
        "cuisine": 1
    }).each(function (err, data) {

        if (!err) next();
        //console.log(data);
    })
});

//display restaurants which belongs to district Bronx and prepared either American or Chinese dish
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({
        $and: [{"district": "Bronx"}, {
            "cuisine": {
                $in: ["American", "Chinese"]
            }
        }]
    }).each(function (err, data) {

        if (!err) next();
        // console.log(data);
    })
});

//display restaurants which belongs to the district Staten Island or Queens or Bronx or Brooklyn and find restaurantId,name,district and cuisine
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"district": {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {
        "restaurant_id": 1,
        "name": 1,
        "district": 1,
        "cuisine": 1
    }).each(function (err, data) {

        if (!err) next();
        //console.log(data);
    })
})

//display restaurants which doesn't belongs to the district Staten Island or Queens or Bronx or Brooklyn and find restaurantId,name,district and cuisine
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"district": {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {
        "restaurant_id": 1,
        "name": 1,
        "district": 1,
        "cuisine": 1
    }).each(function (err, data) {

        if (!err) next();
        //console.log(data);
    })
});

//display restaurants which score is not more than 10 and find restaurantId,name,district and cuisine
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"grades.score": {$lt: 10}}, {
        "restaurant_id": 1,
        "name": 1,
        "district": 1,
        "cuisine": 1
    }).each(function (err, data) {

        if (!err) next();
        // console.log(data);
    })
});

//display restaurants where second element of coord array contains a value which is more than 42 and up to 52 and find restaurantId,name,district and cuisine
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"address.coord[1]": {$gt: 42, $lte: 52}}, {
        "restaurant_id": 1,
        "name": 1,
        "district": 1,
        "cuisine": 1
    }).each(function (err, data) {

        if (!err) next();
        //console.log(data);
    })
});

//display restaurants name in ascending order as well as all the columns
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find().sort("name", 1)
        .each(function (err, data) {

            if (!err) next();
            //console.log(data);
        })
});

//display restaurants name in descending order as well as all the columns
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find().sort("name", -1)
        .each(function (err, data) {

            if (!err) next();
            //console.log(data);
        })
});

//display restaurants cuisine in ascending order and for the same cuisine district name should be in descending order
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find().sort({"cuisine": 1, "district": -1})
        .each(function (err, data) {

            if (!err) next();
            //console.log(data);
        })
});

//display restaurants whether all the addresses contains the street or not
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"address.street": {$exists: true}})
        .each(function (err, data) {

            if (!err) next();
            // console.log(data);
        })
});

//display restaurants where all the coord values are double
router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"address.coord": {$type: "double"}})
        .each(function (err, data) {

            if (!err) next();
            //console.log(data);
        })
});

//display restaurants name,district,longitude,latitude and cuisine for those restaurants which contains "Mad" as first three letters of its name.

router.get('/', function (req, res, next) {

    db = req.db;
    db.assignment8.find({"name": {$regex: "^Mad"}}, {
        "address.coord": 1,
        "name": 1,
        "district": 1,
        "cuisine": 1
    }).each(function (err, data) {

        if (!err) next();
        console.log(data);
    })
});
module.exports = router;
