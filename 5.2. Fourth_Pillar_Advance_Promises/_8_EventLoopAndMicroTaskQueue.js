function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function () {
            console.log("rejecting the promise");
            reject("done");
        }, 1000);
    });
}

setTimeout(function process(){
    console.log("Timer completed!!!");
}, 0);

let p = createPromise();
p.then(
    function fullfillmentHandler(value){
        console.log("We fullfilled1 with a value", value);
    }, 
    function rejectionHander(value){
        console.log("We rejected1 with  a value", value);
    }
)
p.then(
    function fullfillmentHandler(value){
        console.log("We fullfilled2 with a value", value);
    }, 
    function rejectionHander(value){
        console.log("We rejected2 with value", value);
    }
)

for(let i = 0; i < 1000000000; i++){};
console.log("Ending");
