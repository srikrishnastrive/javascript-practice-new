

function download (url){
    console.log('started downloading content form',url);
    return new Promise(function exec(resolve,reject){
        let content = 'abcd';
        resolve(content);
    })
}

let x = download('www.google.com');
x.then(function fullfillHandler(value){
    console.log('content downloaded is 1',value);
    return "New promise string";
    },
    function rejectionHandler(value){
        console.log('creject with ',value);
    }
)
.then(
    function newFullfillHandler(value){
        console.log("value from chained then promise",value);
    }

)
