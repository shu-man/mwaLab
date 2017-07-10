/**
 * Created by Hatake on 7/10/2017.
 */

class BaseObject{
    width:number=0;
    length:number=0;
}
class Rectangle extends BaseObject{
    constructor(width:number,length:number){
        super();
        this.width=width;
        this.length=length;
    }
    calcSize(){
        return this.length*this.width;
    }
}
let rectan=new Rectangle(5,2);
console.log(rectan.calcSize());
