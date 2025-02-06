


function isEven(num){
    if (num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

let x = 1;
let y = 10
let result = isEven(x);
if (result){
    console.log("even");
}
else {
    console.log("odd")
}

for (let i = x ; i <= y; i++){
    if (isEven(i)){
        console.log(i,"even number");
    }
    else {
        console.log(i,"is odd number");
    }
}


function welcome(name){
    return console.log("Hello",name,"welocome to js");
}

let result1 = welcome("sanketh");
console.log(result1);
