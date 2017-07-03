/**
 * Created by Hatake on 7/3/2017.
 */

var express = require('express');
var router = express.Router();
var fs=require('fs');


/*Displays the subscription page for user to enter email*/
router.get('/', function (req, res, next) {
    res.render('subscription');
});

router.post('/', function (req, res, next) {
    const email = req.body.email;
    req.assert('email', 'Enter valid email').notEmpty().isEmail();
    const error = req.validationErrors();
    if (error) {
        res.render('subscription',{errors:error[0].msg});
    }
    else {
        fs.appendFileSync('subscribers.txt',email+'\n');
        res.render('thankyouPage', {data: email});

    }
});


module.exports = router;
