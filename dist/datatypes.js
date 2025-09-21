export {};
let username = 'Naveen';
//varname: username
//type: string
//value = Naveen
let marks = 12.33;
console.log(marks);
console.log(typeof (marks));
let age = 30;
console.log(age);
let isActive = true;
//array: dynamic + homgeneous : only simlar data type
let num = [10, 20, 30];
num.push(40);
let browser = ['chrome', 'firefox', 'edge'];
console.log(browser);
//Array with generics: <>
let names = ['tom', 'peter'];
console.log(names);
//this will take any kind of data types
let usernames = ['tom', 'peter', 123, 11, true, null];
console.log(usernames);
//tuple: fixed length array: heterogenrous: different type of data
//if we push anything, it will be increared 
let person = ['tom', 30, true];
console.log(person);
person.push(40);
person.push(false);
console.log(person);
let empdata = ['naveen', 'MS', 20, 12.33, true];
//from the TS: 4.0+ : you can give name for tuple elements:
let employee = [101, 'tom', 34.55, false];
console.log(employee);
//enum: collection of constants: 
var Browser;
(function (Browser) {
    Browser["chrome"] = "google chrome";
    Browser["firefox"] = "mozilla firefox";
    Browser["edge"] = "MS edge";
    Browser["safari"] = "apple safari";
})(Browser || (Browser = {}));
console.log(Browser.chrome);
var Env;
(function (Env) {
    Env["QA"] = "qa";
    Env["DEV"] = "dev";
    Env["UAT"] = "uat";
    Env["PROD"] = "prod";
    Env[Env["PQA"] = 5] = "PQA";
})(Env || (Env = {}));
console.log(Env.QA);
console.log(Env.PQA);
//any:
let data = 45;
data = 'playwright';
data = true;
data = 120;
data = 12.33;
console.log(data);
//unknown:
let value = 'hello';
console.log(value);
//run this code: at RT: type = string
if (typeof value === 'string') {
    console.log(value.length);
}
function add(x, y) {
    return x + y; //number
}
let s1 = add(10, 20);
console.log(s1);
//# sourceMappingURL=datatypes.js.map