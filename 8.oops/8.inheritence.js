

class Category{
    constructor(c){
        this.category = c;
    }
}

class product extends Category{
    constructor(n,c){
        super(c);
        this.name = n;
    }
}

const p = new product("iphone","electronics");
console.log(p);
