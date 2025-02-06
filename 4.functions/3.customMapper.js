
const newArr = [9,8,7,6,5];

function customMapper (arr,func){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(func(arr[i],i));
    }
    return result;

}

function print(value,index){
    return `element at index ${index} at ${value}`;
}

const value = customMapper(newArr,print);
console.log(value);

