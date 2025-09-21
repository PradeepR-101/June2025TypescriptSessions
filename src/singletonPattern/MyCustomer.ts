export class Customer{

    //Singleton Pattern: u can create only one object/instance of the class

    private static customer: Customer;//null

    private constructor() { }

    public static getInstance(): Customer{
        if (Customer.customer == null) {
            Customer.customer = new Customer();
        }
        return Customer.customer;
    }

    getInfo(): void{
        console.log('getting cusmtoer info...');
    }

}

Customer.getInstance().getInfo();

//you can not create object of this class using new

let c1 = Customer.getInstance();
let c2 = Customer.getInstance();
console.log(c1 === c2);

// let c1 = Customer.getInstance();
// c1.getInfo();
