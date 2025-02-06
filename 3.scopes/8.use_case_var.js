

function fun (x){
    let i; //here it is undefinde
    if (x % 2 == 0){
        i = 0;
    }
    else {
        i = 1;
    }
}
// not accessible out side the fun

function gun(x){
    if (x % 2 == 0){
        var i = 0;
    }
    else {
        var i = 1;
    }
    console.log(i);
}
gun(10);


