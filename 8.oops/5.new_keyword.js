class Product {
    name;
    price;
    description;
    constructor(n,p,d){
        this.name = n;
        this.price = p;
        this.description = d;
        //return 10; //nothing will happen //primitive keyword no effect just avoid
        //constructor meant to be return an object
        // return {
        //     x:10
        // }
    }
    display(){

    }
}

const p = new Product("bag",100,"a gucci bag");
console.log(p);
