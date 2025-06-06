console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
}, 0);

for(let i = 0; i < 1000000000; i++){
    // something
}


/*
    **** Promise.resolve(data) ****************
    -> This returns the promise with the state as "resolved".
*/
let x = Promise.resolve("Rahul's Promise");

x.then(function processPromise(value){
    console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
    console.log("Timer 2 done");
}, 0);

console.log("End of the file");

// macroTask Queue -> setTimeout SetTimeout
// microTask Queue -> processPromise


// start of the file
// End of the file
// Whose promise ? Rahul's Promise
// Timer 1 done
// Timer 2 done
