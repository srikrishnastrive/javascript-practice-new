class Product {
    name;
    price;
    category;
    description;
    rating;

    constructor(productName,productPrice,productCategory,productDescription,productRating){
        this.name = productName;
        this.price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }
    addToCart(){
        console.log('product added to cart');
    }
    removeFromCart(){
        console.log('product remove from product');
    }
    displayProduct(){
        console.log('Product displayed',this);
    }
    buyProduct(){
        console.log('Product bought');
    }

}

let iphone = new Product('iphone',10000,'electronics','iphone 15 pro max','releases with the new features');
iphone.displayProduct();
