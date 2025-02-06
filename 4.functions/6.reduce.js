//reduce is a higher order function available for arrays
//reduce alos takes an function
//it one by one goes to every element of the array
//arr[0] reduce will pass this element to the function f,and accumalate the result 

const arr = [1,2,3,4,5,6];
function sum (prevResult,currValue){
    return prevResult + currValue;
}

const result = arr.reduce(sum);
console.log(result);


let cart = [
    {price:100000,name:'Iphone'},
    {price:500,name :'backcover'},
    {price:300,name:'temper glass'}
];

function addPrice (prevPesult,currValue){
    let newprice = prevPesult.price + currValue.price;
    return {price:newprice};
}
const totalPrice = cart.reduce(addPrice);
console.log(totalPrice);
