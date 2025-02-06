
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop(){
    return new Promise(function executor(resolve,reject){
        for (let i = 0; i< 10000000; i++){}
        let num = getRandomInt(10);
        if (num % 2 == 0){
            resolve(num);
        }
        else {
            reject(num);
        }
    })
}

let x = createPromiseWithLoop();
console.log(x);

