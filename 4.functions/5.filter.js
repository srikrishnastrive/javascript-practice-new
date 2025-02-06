//filter should always return a boolean,output will be converted to boolean
//filter also loops over the array element
//output of the function call is true,then it stores the original element in a new array otherwise
//false doesn't add element in the array

function oddOrEven(x){
    return (x % 2 == 0);
}

let arr  = [1,2,3,4,5,6,7,8,9];

const result = arr.filter(oddOrEven);

console.log(result);

