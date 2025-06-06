function fetchData(url){
    return new Promise(function exec(resolve, reject){
        console.log("Starting downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download completed");
            resolve(data);
        }, 7000);
    });
}

console.log("Start");
let promiseObj = fetchData("skfgkdjb");
promiseObj.then(function A(value){
    console.log("value is ", value);
})
console.log("end");

//start
//start downloading from skfgkdjb
//end
//Download completed
// value if skfgkdjb




// event Queue     ->  
// microTask queue ->  A(skfgkdjb) 