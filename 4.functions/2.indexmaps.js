const newArr = [9,8,7,6,5];

function print(element,index){
    return `Elemeent at index ${index} is ${element}`;
}

const result = newArr.map(print);

console.log(result);
