/*
    🌟 How Promises Execute Internally 🌟

    🔹 A Promise is an Object with the Following Properties:
    --------------------------------------------------------
    A promise internally maintains the following structure:

    {
        value: undefined,   // Stores the resolved or rejected value
        state: "pending",   // Can be "pending", "fulfilled", or "rejected"
        onFulfillment: [],  // Stores .then() fulfillment handlers
        onRejection: []     // Stores .catch() rejection handlers
    }
    
    🔹 When the promise is resolve or rejected, the functions/handler present if "onfullfillment" or "onrejectin" array
       is not immediately executed.


    ✅ onFulfillment[] (Array of Fulfillment Handlers)
    --------------------------------------------------
    - This array stores functions that should execute when the promise resolves (fulfilled).
    - These functions are added using the `.then()` method.
    - Once the promise is fulfilled, the functions inside this array execute **one by one**, 
      receiving the resolved value as an argument.

    ❌ onRejection[] (Array of Rejection Handlers)
    ----------------------------------------------
    - This array stores functions that should execute when the promise is rejected.
    - These functions are also added using the `.then()` method (or `.catch()`).
    - Once the promise is rejected, the functions inside this array execute **one by one**, 
      receiving the rejected reason as an argument.

    🔄 Event Loop in JavaScript 🔄
    -------------------------------
    🔹 What is the Event Loop?
       - The Event Loop acts like a manager that ensures smooth execution of asynchronous tasks.

    🔹 How Does It Work?
       ✅ It continuously checks whether the **Call Stack** is empty.
       ✅ If the **Call Stack is empty** and no global code is left to execute, 
          it picks functions from the **Event Queue** and executes them **one by one**.

    📌 This is how JavaScript handles asynchronous operations efficiently, ensuring non-blocking execution.
*/


/*
    -> Whenever javascript sees the code that is not ecmascript code, it gives the code to the runtime.
    -> It is the runtime who puts these codes in the event queue
    -> The event loop continuously check whether the call stack is empty as well as no more global code is left, then 
       it executes the code present is event queue one by one.
*/





function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout(){
    return new Promise(function executor(resolve, reject){
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function () {
            let num = getRandomInt(10);
            if(num % 2 == 0){
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
p.then(
    function fulfillHandler(value) { 
        console.log("inside fullfill handler with value ", value); 
        console.log("promise after fullfillment....", p);
    }, 
    function rejectionHandler(value) { 
        console.log("inside rejection handler with value ", value); 
        console.log("promise after rejection....", p);
    }
);
