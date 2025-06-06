function timeConsumingByLoop(){
    console.log("loop starts");
    for(let i = 0; i <= 10000000000; i++){
        // some logic
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature(){
    console.log("Timer starts");
    setTimeout(function exec(){
        console.log("completed the timer!!!");
    }, 5000);
}

console.log("HI");
timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();
console.log("by");

/*
    ************** Output **************
    Hi
    loop starts
    loop ends
    Timer starts
    loop starts
    loop ends
    By
    completed the timer!!!
*/