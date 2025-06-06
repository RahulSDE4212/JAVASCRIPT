/**
 * ⚠️ Problems with Callback Functions ⚠️
 * --------------------------------------------
 * While callbacks are useful, they come with certain challenges:
 * 1️⃣ **Inversion of Control** – Loss of control over execution.
 * 2️⃣ **Callback Hell** – Nested callbacks leading to unreadable code.
 * 
 * 🌀 Callback Hell 🌀
 * --------------------------------------------
 * ✅ Callback hell occurs when multiple asynchronous functions are nested inside one another, making code hard to read and maintain.
 * ✅ This leads to deeply indented and difficult-to-debug code.
 * 🔗 Refer to: [callbackhell.com](http://callbackhell.com) for a detailed explanation.
 * 
 * 🏗️ Example of Callback Hell:
 * --------------------------------------------
 * asyncTask1(function(result1) {
 *     asyncTask2(result1, function(result2) {
 *         asyncTask3(result2, function(result3) {
 *             console.log("Final Result:", result3);
 *         });
 *     });
 * });
 * 
 * 😵 This deep nesting makes the code **hard to read and maintain**.
 * 
 * 🔄 Inversion of Control 🔄
 * --------------------------------------------
 * ✅ When passing a callback function to a higher-order function, we **lose control** over how and when it is executed.
 * ✅ The **higher-order function** decides **when, how, and how many times** the callback will be invoked.
 * ✅ This can lead to unexpected behavior or bugs if we don't fully understand the implementation.
 * 
 * 🎯 Solution:
 * --------------------------------------------
 * ✅ Use **Promises** or **Async/Await** to write cleaner and more maintainable asynchronous code.
 */


function doTask(fn, x){
    // whole implementation is done by team A
    fn(x*x); // calling my callback function with square of x.
    fn(x*x);
} // coded by team A



doTask(function exec(num){ // due to callback, i am passing control of how exec function will be called to the function doTask()
    console.log("whoh, num is ", num);
}, 9);  // coded by team B