let a = [10,20,30,40,50];

console.log(a);

let b = new Array(10,20,30);
console.log(b);

console.log(b.length);
console.log(b.toString());


//join
let c  = ["html","css","bootstrap","react"];
console.log(c.join('|'));

//javascript array delete operator

let emp = {
    firstName :"Riya",
    lastName : "kaur",
    salary : 40000
}

console.log(delete emp.salary);
console.log(emp);
//concat

let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
let a3 = [17, 18, 19];

let newArr = a1.concat(a2,a3);
console.log(newArr);

//flat 

const a12 = [['1', '2'], ['3', '4', '5',['6'], '7']];
const a21 = a12.flat(Infinity);
console.log(a21);

//push
let pu = [10,20,30,40,50];
pu.push(60);
pu.push(70,80,90);
console.log(pu)

//unshift is used to add elements the to the front of the array 
let un = [20,30,40];
un.unshift(10,50);
console.log(un);
un.shift();
console.log(un);

//The splice() method is used to Insert and Remove elements in between the Array.
//The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments
const sli = [1,2,3,4,5];
const res = sli.slice(1,4);
console.log(res);


//some function atleast check any one ele satisfy the condition

const temp = [1,2,3,4,5];
let res1 = temp.some((val)=> val > 4);
console.log(res1);

//filter 

let temp1 = [1,2,3,4,5,6];
let temp2 = temp1.filter((num )=> num > 4);
console.log(temp2);

//reduce

let red1 = [88,50,25,10];

//javascript array values()

const val1 = ["apple","banana","cherry"];

const resval = val1.values();

for (const value of resval){
    console.log(value);
}

//index of
let array = ["hello","geeksforgeeks","javascript"];
console.log(array.indexOf('geeksforgeeks'));
console.log(array.includes('geeksforgeeks'));


//for each
let courses = ["html","css","javascript"];

let newArray = [];

courses.forEach(function (course){
    newArray.push(course);
})

console.log(newArray);
