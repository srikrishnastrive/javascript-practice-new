

let obj = {};
console.log(obj.toString());
console.log(typeof obj.toString());

let obj1 = {
    toString(){
        return "let's learn javascript";
    }
}
console.log(obj1.toString());
console.log(typeof obj1.toString());

let obj2 = {
    toString(){
        return 10;
    }
}
console.log(obj2.toString());
console.log(typeof obj2.toString());

//value of object
let obj3 = {
    toString(){
        return "98";
    },
    valueOf(){
        //by default it return same object
        return 10;
    }
} 

console.log(obj3.valueOf());
console.log(obj3.toString());
console.log(typeof obj3.valueOf());
console.log(typeof obj3.toString());

