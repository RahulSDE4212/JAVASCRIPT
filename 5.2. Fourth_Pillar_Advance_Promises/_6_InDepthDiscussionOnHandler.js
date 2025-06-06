function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                // if the random number is even we fullfill
                resolve(num);
            } else {
                // if the random number is odd we reject.
                reject(num);
            }
        }, 1000);
        console.log("exiting the executor callback in the promise constructor");
    });
}


console.log("starting.....");
const p = createPromiseWithTimeout();
console.log("we are now waiting for the promises to complete ");
console.log("currently my promise object is like ", p);
console.log("Going to register 1st set of handlers....")
p.then(
    function fulfillHandler(value) {
        console.log("inside fullfill handler 1 with value ", value);
        console.log("promise after fullfillment....", p);
        setTimeout(function t(){console.log("Ended 0s timer")}, 0);
        console.log("exiting the full handler 1");
    },
    function rejectionHandler(value) {
        console.log("inside rejection handler 1 with value ", value);
        console.log("promise after rejection....", p);
        setTimeout(function t(){console.log("Ended 0s timer")}, 0);
        console.log("exiting the full handler 1");
    }
);

console.log("Going to register 2nd set of handler .......")
p.then(
    function fulfillHandler(value) {
        console.log("inside fullfill handler 2 with value ", value);
        console.log("promise after fullfillment....", p);
    },
    function rejectionHandler(value) {
        console.log("inside rejection handler 2 with value ", value);
        console.log("promise after rejection....", p);
    }
);

console.log("ending..")
setTimeout(function (){console.log("global timer of 0s")}, 1000);