class Product {
    static x = 10;
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

// let p1 = new Product("Iphone",1000);
// console.log(p1.x);
Product.x = 20;
console.log(Product.x); //associated with the class not with the object
