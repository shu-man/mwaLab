/**
 * Created by Hatake on 6/27/2017.
 */

Array.prototype.even = function () {
    console.log(JSON.stringify(this.filter(arr => arr % 2 === 0)));
};

Array.prototype.odd = function () {
    console.log(JSON.stringify(this.filter(arr => arr % 2 !== 0)));

};
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();

