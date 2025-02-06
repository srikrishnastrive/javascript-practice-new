

function A(){
    
}
A.prototype.fun = function () {console.log('having fun')};

function B(){

}

Object.setPrototypeOf(B.prototype,A.prototype);
x = new B();
x.fun();
