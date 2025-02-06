let obj = {
    name:'sri krishna',
    age:23,
    job:'developer'
}

obj.age = 24;
obj.color = "brown"

console.log(obj["age"]);
console.log(obj);


for (let key in obj){
    console.log(key + ": "+obj[key]);
}


//merging
let obj1 = {name:'sourav'}
let obj2 = {age:23};

let obj3 = {...obj1,...obj2};
console.log(obj3);

//object length 
console.log (Object.keys(obj3).length);

console.log(typeof obj === 'object' && obj != null);
