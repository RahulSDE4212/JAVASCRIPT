/**
 * 🔄 CALLBACK FUNCTIONS 🔄
 * --------------------------------------------
 * ✅ A callback function is a function that is **passed as an argument** to another function.
 * ✅ It is executed later, often after some asynchronous operation completes.
 * 
 * 🛠️ Example:
 * --------------------------------------------
 * function fun(fn) {
 *     // `fn` is a function passed as an argument
 *     fn(); // Executing the callback function
 * }
 * 
 * function exec() {
 *     console.log("Hello from exec function!");
 * }
 * 
 * fun(exec); // Here, `exec` is the callback function.
 * 
 * 🎯 Key Points:
 * --------------------------------------------
 * ✅ Callbacks allow handling asynchronous tasks (e.g., fetching data, reading files, timers).
 * ✅ Higher-order functions accept callback functions as arguments.
 * ✅ Callbacks can be synchronous or asynchronous depending on the use case.
 */



function fun(x, fn){
    for(let i = 0; i < x; i++){
        console.log(i);
    }
    fn();
}

fun(10, function exec(){ // here exec is the callback function.
    console.log("I am being executed.");
})