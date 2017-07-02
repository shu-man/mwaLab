/**
 * Created by Hatake on 6/28/2017.
 */

const EventEmitter = require("events");
class Clock extends EventEmitter {
    constructor() {
        super();
        let self = this;
        setInterval(function () {
            self.emit('tick');
        }, 1000);
    }
}

const clock = new Clock();
clock.on('tick', function () {
    console.log("woohoo");
});