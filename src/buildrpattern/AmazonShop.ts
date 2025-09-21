export class Shop{
    //private const...
    private constructor() { }

    login(): Shop{
        console.log('login to app');
        return this;
    }

    search(): Shop{
        console.log('search the product');
        return this;
    }

    addToCart(): Shop{
        console.log('add to cart for this product');
        return this;
    }

    payment(): Shop{
        console.log('making the payment using CC');
        return this;
    }

    logout(): Shop{
        console.log('logout');
        return this;
    }

    static builder(): Shop{
        return new Shop();
    }

    build(): void{
        console.log('email is sent...shopping is done!!');
    }


}

//method chaining: Fluent way of calling the method: builder pattern
//uc1:
Shop.builder()
    .login()
    .search()
    .addToCart()
    .payment()
    .logout()
    .build();     

//uc2:
Shop.builder()
    .login()
    .search()
    .logout()
    .build();

//uc3:
Shop.builder()
    .login()
    .logout()
    .build();


//stratgegy
//behaviour
//factory
//pom
//singleton
//builder
    