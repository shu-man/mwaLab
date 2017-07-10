/**
 * Created by Hatake on 7/10/2017.
 */
class Car {
    constructor(public name: String, public accelaration: number) {

    }

    honk() {
        console.log(this.name + "is saying toooot....");
    }

    accelerate(speed: number) {
        this.accelaration = this.accelaration + speed;
    }
}
let car1 = new Car("Honda Accord", 20);
car1.honk();
car1.accelerate(60);
console.log(car1.accelaration);
