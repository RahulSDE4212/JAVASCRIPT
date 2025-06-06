function download(url){
    console.log("started downloading content from ", url);
    return new Promise(function exec(resolve, reject){
        setTimeout(function p(){
            console.log("completed downloading data in 5s");
            const content = "ABCDEF";
            resolve(content);
        }, 5000);
    })
}

let x = download("www.xyz.com");
x.then(function fullfillhandler1(value){
    console.log("content dowloaded is ", value);
});

x.then(function fullfillhandler2(value){
    console.log("content dowloaded is ", value);
});

// started downloading content from www.xyz.com
// completed downloading data in 5s
// content downloaded is ABCDEF