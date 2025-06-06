/**
 * ⏳ setTimeout() in JavaScript ⏳
 * --------------------------------------------
 * ✅ `setTimeout()` is a built-in JavaScript function that executes a specified function **after a delay**.
 * ✅ It takes **two arguments**:
 *      1️⃣ A function to execute.
 *      2️⃣ A time delay (in milliseconds) after which the function will run.
 * 
 * 🛠️ Example:
 * --------------------------------------------
 * setTimeout(function fun() {
 *     console.log("Executed after 4000ms!");
 * }, 4000); // Executes after 4000 milliseconds (4 seconds)
 * 
 * 🎯 Key Points:
 * --------------------------------------------
 * ✅ `setTimeout()` **does not pause execution**, it schedules the function to run later.
 * ✅ The delay time is in **milliseconds** (1 second = 1000 milliseconds).
 * ✅ If `0ms` is given as delay, the function runs **as soon as possible** but after the current execution completes.
 */


setTimeout(function exec(){ // here exec() is the callback function.
    console.log("running after sometime");
}, 4000);