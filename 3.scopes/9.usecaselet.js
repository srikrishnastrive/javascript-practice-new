

function fun (){
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
   
}

function process(x,y){
    if (x > y){
        //var temp = x;
        let temp = x;
        x = y;
        y = temp;
    }
    return y- x;
}

fun();

console.log(process(5,3));
