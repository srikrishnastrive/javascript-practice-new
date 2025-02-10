class Product {
    constructor(builder) {
        this.name = builder.name;
        this._price = (builder.price > 0 && typeof builder.price === 'number') ? builder.price : 0; // Use a backing variable
        this.category = builder.category;
        this.description = builder.description;
        this.rating = builder.rating;
    }

    get price() {
        return this._price; // Return the backing variable
    }

    set price(p) {
        if (p > 0) {
            this._price = p; // Assign to the backing variable
        } else {
            console.log('Invalid price');
        }
    }
}

const p = new Product({
    name: 'Iphone',
    price: 1000,
    category: 'Electronics',
    description: 'Apple iPhone'
});

console.log(p.price);  // 1000
p.price = -500;        // "Invalid price"
console.log(p.price);  // Still 1000
