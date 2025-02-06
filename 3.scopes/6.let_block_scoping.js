var teacher = 'sanketh';

function fun (){
    console.log(teacher); // no error will be fun var is function aceessible every where
    console.log(content);//TDZ accessing block scope before declartion
    var teacher = 'pulkit';
    
    let content = 'js';
    if (content == 'js'){
        let hours = '120+';
        console.log(hours);
    }
    console.l
}
fun();
console.log(teacher);
