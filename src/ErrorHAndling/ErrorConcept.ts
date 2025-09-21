
// let num = 9 / 0;
// console.log(num);

//amazon
function m1() {
    console.log('m1 method...');
    m2();
}
//amazon
function m2() {
    console.log('m2 method...');
    try {
        m3();
        //connetion with DB
        //hit SQL
        //get the results - from db table
    }
    catch (error) {
        console.log(error);//db error
    }
    finally {
        console.log('close db connection...');
    }
}

//bank system
function m3(): void {
    console.log('m3 method...');
    throw new Error('===some error===');
}

//caller
m1();
console.log('BYE!!!!!!!');
