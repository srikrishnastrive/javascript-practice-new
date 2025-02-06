function sum(x,y){
    return x +y
}

console.log(sum(4,5));


function welcomeMsg(name){
    return ("hello  " +name + "  welcome to geeks for geeks");
}

let nameVal = "krishna";

console.log(welcomeMsg(nameVal));

//function expression

const mul = function (x,y){
    return x * y;
}
console.log(mul(4,5));
//arroe functions

const a = ["hydrogen","oxygen","carbon dioxide","lithium"];

const a2 = a.map(function (s){
    return s.length;
});

console.log("normal way",a2);

const a3 = a.map((s)=> s.length);

console.log('using arrow function',a3);

//call back function

function num (n, callback){
    return callback(n);
}

const double = (n) => n *2;

console.log(num(5,double));
