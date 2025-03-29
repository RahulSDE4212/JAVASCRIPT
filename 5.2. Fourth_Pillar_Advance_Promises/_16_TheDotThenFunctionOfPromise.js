/*
    ****************** Promise.then() Function Explained ******************
    
    -> The `.then()` method registers a callback function to handle the resolution (fulfillment) 
       or rejection of a promise.
    
    -> It accepts two optional arguments:
       1. `fulfillHandler`: A function executed when the promise is successfully resolved.
       2. `rejectionHandler`: A function executed when the promise is rejected.
    
    -> `.then()` immediately returns a new promise object, enabling promise chaining.
    
    -> If a handler function returns a value, it is passed to the next `.then()` in the chain.
    
    -> If no return value is specified, JavaScript implicitly returns `undefined`.
    
    ****************** Understanding Promise Chaining ******************
    
    -> Promise chaining allows multiple `.then()` calls to be linked together sequentially.
    
    -> Each `.then()` receives the return value of the previous `.then()` unless an error occurs.
    
    -> If a `.then()` returns a promise, the next `.then()` waits for it to resolve before executing.
    
    -> If a rejection occurs at any point, the control moves to the closest rejection handler 
       in the chain.
    
    -> Chaining helps in structuring asynchronous operations in a readable manner, avoiding callback hell.
    
    Example:
    ```js
    asyncOperation()
      .then(result1 => { 
          console.log("Step 1:", result1); 
          return anotherAsyncOperation(result1); // Returns a new promise
      })
      .then(result2 => { 
          console.log("Step 2:", result2); 
          return finalAsyncOperation(result2);
      })
      .then(finalResult => {
          console.log("Final Step:", finalResult);
      })
      .catch(error => {
          console.error("Error occurred:", error);
      });
    ```
*/

// In JavaScript, when a function does not explicitly return a value, it returns `undefined` by default.

function download(url) {
    console.log("Started downloading content from:", url);
    
    return new Promise(function exec(resolve, reject) {
        setTimeout(function p() {
            console.log("Completed downloading data in 5 seconds.");
            const content = "ABCDEF";
            
            // Rejecting the promise with `content`.
            reject(content);
        }, 5000);
    });
}

// Calling the download function and storing the returned promise.
let x = download("www.xyz.com");

x.then(
    function fulfillHandler1(value) {
        console.log("Content downloaded is:", value);
        // Returning a new Promise object (if needed for further chaining).
        // return "A new Promise object";
    },
    function rejectHandler(value) {
        console.log("Promise rejected with:", value);
        return "An old Promise object"; // This return value is passed to the next `.then()`.
    }
)
.then(
    function newFulfillHandler(value) {
        console.log("Value from chained then promise:", value);
    },
    function newRejectionHandler(value) {
        console.log("Value from chained then promise:", value);
    }
);
