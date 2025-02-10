class Product {
    #price
    #name;
    #description
    #rating
    constructor(builder) {
        console.log('calling product constructor')
        this.#name = builder.name;
        this.#price = (builder.price > 0 && typeof builder.price === 'number') ? builder.price : 0; // Use a backing variable
       
        this.#description = builder.description;
        this.#rating = builder.rating;
    }

    displayProduct() {
        return {
            name: this.#name,
            price: this.#price,
            description: this.#description,
            rating: this.#rating
        };
    }

    static get Builder(){
        class Builder{
            constructor(){
                this.name = '';
                this.price = 0;
                this.description = '';
            }
            setName(incomingName){
                this.name = incomingName;
                return this;
            }
            setPrice(incomingPrice){
                this.price = incomingPrice;
                return this;
            }
            setDescription(incomingDescription){
                this.description = incomingDescription;
                return this;
            }
            setRating(incomingRating){
                this.rating = incomingRating;
                return this;
            }
            build(){
                return new Product(this);
            }
        }
        return Builder;
    }
}

const product = new Product.Builder()
    .setName('iPhone 15 Pro Max')
    .setPrice(-1000)
    .setDescription('Latest Apple flagship phone')
    .setRating(4.8)
    .build();

console.log(product.displayProduct());
