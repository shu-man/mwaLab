/**
 * Created by Hatake on 7/10/2017.
 */
interface bankAccount {
    money: number;
    deposit(value: number): void;
}
let bankAcc: bankAccount = {
    money: 2000,
    deposit(value: number){
        return this.money + value;
    }
}
interface myselfInterface {
    name: String;
    bankAccount: bankAccount;
    hobbies: string[];
}
let mySelf: myselfInterface = {
    name: "Asaad",
    bankAccount: bankAcc,
    hobbies: ['Violin', 'Cooking']
}
console.log(mySelf.bankAccount.deposit(3000));