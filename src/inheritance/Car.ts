export class Car {

    // public name: string;
    // public color: string;
    // public price: number;

    // constructor(name: string, color: string, price: number) {
    //     this.name = name
    //     this.color = color
    //     this.price = price
    // }

    //ts will add one hidden default const....

    start(): void {
        console.log('car start');
    }

    stop(): void {
        console.log('car -- stop');
    }

}

export class BMW extends Car {

    // public name: string;
    // public color: string;
    // public price: number;

    // constructor(name: string, color: string, price: number) {
    //     //call the super class const...
    //     //super(name, color, price);
    //     super();//calling Car (parent) default const...
    //     this.name = name
    //     this.color = color
    //     this.price = price
    // }


    override start(): void {
        console.log('BMW start');
    }

    autoParking(): void{
        console.log('BMW -- auto parking');
    }

}

