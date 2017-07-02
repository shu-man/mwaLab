var express = require('express');
var router = express.Router();
var fetch=require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
    const promise=fetch("http://jsonplaceholder.typicode.com/users/");
    promise.then(function(data){
        return data.json();
    }).then(function (data) {
        res.render("users",{data});
    })
});

module.exports = router;
