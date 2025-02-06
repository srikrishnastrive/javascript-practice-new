//higher order function - > there are dunction whicn take another function as an argument
// these are called higher order functions

function f(x,fn){
    /**
     * x - > number
     * fn -> function 
     */
    console.log(x);
    fn();
}

f(10,function exec(){
    console.log("I am expression passed to a HOF");
})
