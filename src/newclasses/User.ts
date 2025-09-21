export class User{

    public name: string;
    public age: number;
    public salary: number;
    readonly shares: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.shares = 800;
    }

    drive():void {
        console.log('user is driving: ' + this.name);
       // this.shares = 900;
    }

}

//create the object of User: new keyword:
// let u1 = new User('Abhi', 30, 12.33);
// console.log(u1.name, u1.age);
// u1.drive();
// u1.age = 35;
// console.log(u1.name, u1.age);
// //u1.shares = 30;

let u1 = new User('Abhi', 30, 12.33);
let u2 = new User('manisha', 30, 12.33);


console.log(u1.shares);
//u1.shares = 10;

