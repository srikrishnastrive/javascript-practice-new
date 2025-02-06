


//map is a higher order function avialabel with arrays

function square(el){
    return el * el;
}

const arr = [1,2,3,4];
const result = arr.map(square); // square is function passed as an argument

console.log(result); // it will return array is a result
