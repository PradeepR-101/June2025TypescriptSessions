export { };
let username: string = 'Naveen';

//varname: username
//type: string
//value = Naveen

let marks: number = 12.33;

console.log(marks);

console.log(typeof(marks));

let age: number = 30;
console.log(age);


let isActive: boolean = true;

//array: dynamic + homgeneous : only simlar data type
let num: number[] = [10, 20, 30];
num.push(40);

let browser: string[] = ['chrome', 'firefox', 'edge'];
console.log(browser);

//Array with generics: <>
let names: Array<string> = ['tom', 'peter'];
console.log(names);

//this will take any kind of data types
let usernames: Array<any> = ['tom', 'peter', 123, 11, true, null];
console.log(usernames);

//tuple: fixed length array: heterogenrous: different type of data
//if we push anything, it will be increared 
let person: [string, number, boolean] = ['tom', 30, true];
console.log(person);
person.push(40);
person.push(false);
console.log(person);

let empdata: [string, string, number, number, boolean] = ['naveen', 'MS', 20, 12.33, true];

//from the TS: 4.0+ : you can give name for tuple elements:
let employee: [id: number, name: string, salary: number, isActive: boolean] = [101, 'tom', 34.55, false];
console.log(employee);

//enum: collection of constants: 
enum Browser {
    chrome = 'google chrome',
    firefox = 'mozilla firefox',
    edge = 'MS edge',
    safari = 'apple safari'
}

console.log(Browser.chrome);

enum Env {
    QA = 'qa',
    DEV = 'dev',
    UAT = 'uat',
    PROD = 'prod',
    PQA = 5
}

console.log(Env.QA);
console.log(Env.PQA);


//any:
let data: any = 45;
data = 'playwright';
data = true;
data = 120;
data = 12.33;

console.log(data);

//unknown:
let value: unknown = 'hello';
console.log(value);

//run this code: at RT: type = string
if (typeof value === 'string') {
    console.log(value.length);
}

function add(x:number, y:number): number{
    return x + y; //number
}

let s1:number = add(10, 20);
console.log(s1);



