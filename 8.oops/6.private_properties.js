class Product {
    #name;
    #price;
    description;
    constructor(n,p,d){
        this.#name = n;
        this.#price = p;
        this.description = d;
        //return 10; //nothing will happen //primitive keyword no effect just avoid
        //constructor meant to be return an object
        // return {
        //     x:10
        // }
    }
    display(){
        console.log(this.#name,this.description,this.#price);
    }

    set Name (name){
        if (typeof(name) !== 'string') {
            console.log('Invalid name passed');
            return;
        }
        this.#name = name;
    }
    set Price(price){
        if (price < 0) return;
        this.#price = price;
    }
    get  getName(){
        return this.#name;
    }
}

const p = new Product("bag",100,"a gucci bag");
// p.name = -1;
p.Name='iphone'; // set avoid them passing into a function
p.Price ='100000';
console.log(p);
p.display();
