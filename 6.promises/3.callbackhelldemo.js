function download(url,cb){
    console.log('started downloading from url',url);
    setTimeout(function exec(){
        console.log("completed downloading after 5s");
        const content = 'abcdef';
        cb(content);
        cb(content);
    },5000)
}

download('www.google.com',function processDownload(data){
    console.log("downloaded data is",data);
})


function download1(url){
    console.log('started downloading content form',url);
    return new Promise(function exec(resolve,reject){
        setTimeout(function p(){
            console.log('completed the downloading data in 5 sec');
            const content = 'abcdef';
            resolve(content);
            resolve(content);
        })
    })
}

const x = download1('www.google.com');
x.then(function fullfillHandler(value){
    console.log('content downloaded is',value);
})
