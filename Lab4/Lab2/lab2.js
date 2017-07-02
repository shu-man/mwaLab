/**
 * Created by Hatake on 6/30/2017.
 */

const os = require('os');
const Rx = require('@reactivex/rxjs');

function checkSystem() {
    console.log("Checking your system");
    if (os.freemem() < 2147483648) {
        console.log("This apps need at least 2GB of ram");
    }
    else if (os.cpus().length < 2) {
        console.log("Processor is not supported");
    }
    else {
        console.log("System is checked successfully");
    }
}


checkSystem();

var checkObservable = Rx.Observable.create(observer => {
    observer.next(os);
}).subscribe(os => {
    console.log("Checking your system");
    if (os.freemem() < 2147483648) {
        console.log("This apps need at least 2GB of ram");
    }
    else if (os.cpus().length < 2) {
        console.log("Processor is not supported");
    }
    else {
        console.log("System is checked successfully");
    }
});