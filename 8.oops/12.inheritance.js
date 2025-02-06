

function product(name,price,c){
    this.name = name,
    this.price = price,

    Category.call(this,c);
}

function Category(c){
    this.categoryName = c;
    this.getCategoryName = function (){
        console.log(this.categoryName);
    }
}

let p = new product("Iphone",10000,"electronics");
p.getCategoryName();


