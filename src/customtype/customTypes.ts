let myusername: string = 'tom';
let myage: number = 20;

type userID = string | number;
let myUserID: userID = "naveenautomation";
let custID: userID = 123;

console.log(myUserID);

type status = "pending" | "inprogress" | "completed" | 100;
let orderStatus: status = "inprogress";

type httpStatus = 400 | 200;

type buttonSize = "small" | "medium" | "large";
let loginBtn: buttonSize = "small";

type User = {
    id: string | number,
    name: string,
    salary: number,
    isActive: boolean,
    createdAt: Date
}

let newuser1: User = {
    id: 123,
    name: "Peter",
    salary: 12.33,
    isActive: true,
    createdAt: new Date()
}

let newuser2: User = {
    id: "nave0101",
    name: "Naveen",
    salary: 13.33,
    isActive: false,
    createdAt: new Date()
}

console.log(newuser1);
console.log(newuser2);

