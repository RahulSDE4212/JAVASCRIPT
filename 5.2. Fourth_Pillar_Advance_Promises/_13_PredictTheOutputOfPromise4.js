function blocking_for_loop() {
    for(let i = 0; i < 10000000000; i++){
        // something
    }
}

console.log("Start of the file");
setTimeout(function timer1() {
    console.log("timer1 done");
}, 0);

blocking_for_loop();
let x = Promise.resolve("Rahul's Promise");
x.then( function processPromise(value){
        console.log("Whose promise ? ", value);
        blocking_for_loop();
});

let y = Promise.resolve("Rahul's Promsie2 ");
y.then(function processPromise(value){
    console.log("whose promise ? ", value);
    setTimeout(function () {console.log("ok done")}, 0);
});

let z = Promise.resolve("Sanket's  Promise 3");
z.then(function processPromise(value){
    console.log("Whose promsie ? ", value);
});

setTimeout(function timer2(){
    console.log("timer 2 done");
}, 0);

console.log("end of the file");


// macroTask Queue ->  setTimeout22


// Output
// Start of the file
// end of the file
// Whose Promise ? Rahul's promise
// Whose Promise ? Rahul's promise 2
// Whose Promise ? Rahul's promise 3
// timer1 done
// timer2 done
// ok done




