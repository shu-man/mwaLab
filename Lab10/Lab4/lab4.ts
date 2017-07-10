/**
 * Created by Hatake on 7/10/2017.
 */
class Person{
    private _firstName:String="";
    get firstName(){
        return this._firstName;
    }
    set firstName(name:String){
        this._firstName=name.toUpperCase();
    }
}
let person1=new Person();
person1.firstName="Asaad";
console.log(person1.firstName);