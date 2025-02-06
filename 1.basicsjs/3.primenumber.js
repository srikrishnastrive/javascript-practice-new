

function isPrime(x){
    for (let i = 2; i < x-1; i++){
        if (x % i == 0){
            return false;
        }
       
    }
    return true;
}

let x = 10;
console.log(isPrime(x));
