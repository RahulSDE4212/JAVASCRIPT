function fetchData(url){
    return new Promise(function exec(resolve, reject){
        console.log("Starting downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            resolve(data);
            console.log("Download completed");
        }, 7000);
    });
}

console.log("Start");
let promiseObj = fetchData("skfgkdjb");
promiseObj.then(function A(value){
    console.log("value is ", value);
})
console.log("end");

// start
// Start Downloading from skfgkdjb
// end
// Download Completed
// value is dummy data