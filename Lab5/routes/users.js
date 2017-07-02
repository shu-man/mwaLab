var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var Rx = require('@reactivex/rxjs');

var globalData = {};

/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    const promise1 = fetch("http://jsonplaceholder.typicode.com/users/");

    promise1.then(function (data) {
        return data.json();
    }).then(function (data) {
        globalData.dataUsingPromise = data;
        updateDataUsingObservables();
    }).catch(err => console.error(err));

    function updateDataUsingObservables() {
        const promise2 = fetch("http://jsonplaceholder.typicode.com/users/");
        const observable1 = Rx.Observable.fromPromise(promise2);
        observable1.subscribe(function (response) {
            const observable2 = Rx.Observable.fromPromise(response.json());
            observable2.subscribe(function (data) {
                globalData.dataUsingObservable = data;
                updateDataUsingAsyncAwait();
            }, err => console.error(err));
        }, err => console.error(err));
    }

    async function updateDataUsingAsyncAwait() {
        const promise3 = fetch("http://jsonplaceholder.typicode.com/users/");
        try {
            const response = await promise3;
            const data = await response.json();
            globalData.dataUsingAsyncAwait = data;

            res.render("users", {data: globalData});

        } catch (err) {
            console.error(err);
        }
    }
});

module.exports = router;
