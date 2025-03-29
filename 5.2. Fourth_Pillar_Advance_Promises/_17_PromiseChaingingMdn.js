/*
=====================================================================================
🌟 **Understanding the Execution Flow of the Given Promise Chain** 🌟
=====================================================================================

🔹 **Step 1: `Promise.resolve("foo")`**
   - This creates a resolved promise with the value `"foo"`.
   - The resolved value is passed to the first `.then()`.

🔹 **Step 2: First `.then()` (p1 function)**
   ```js
   .then( function p1(string) {
       new Promise((resolve, reject) => {
           setTimeout(() => {
               string += "bar";
               resolve(string);
           }, 10000);
       });
   })
   ```
   - This function **creates a new promise** inside but **does not return it**.
   - Since `.then()` expects a return value, and nothing is explicitly returned,
     it implicitly returns `undefined`.
   - The new promise inside is completely ignored by the chain.

🔹 **Step 3: Second `.then()` (p2 function)**
   ```js
   .then( function p2(string) {
       setTimeout(() => {
           string += "baz";
           console.log(string);
       }, 1);
       return string;
   })
   ```
   - Since `p1` returned `undefined`, `p2` receives `undefined` as its `string` argument.
   - The `setTimeout()` modifies `string`, but since it's `undefined`, concatenation fails.
   - The function still **returns `undefined`**, which is passed to the next `.then()`.

🔹 **Step 4: Third `.then()` (p3 function)**
   ```js
   .then( function p3(string) {
       console.log("Last then: oops... didn't bother to instantiate and return a promise in the prior then something.");
       console.log(string);
   })
   ```
   - The previous `.then()` returned `undefined`, so `string` is still `undefined`.
   - The first `console.log()` prints the message.
   - The second `console.log(string)` prints `undefined`.

=====================================================================================
🚀 **Key Takeaways** 🚀
=====================================================================================
✅ Always **return** promises inside `.then()` to ensure they are part of the chain.
✅ If nothing is returned from `.then()`, `undefined` is passed to the next `.then()`.
✅ The inner promise inside `p1` is completely ignored because it's not returned.
✅ `setTimeout()` does not delay execution in the chain; it runs asynchronously in the background.
=====================================================================================
*/

// Given Promise Chain Code
Promise.resolve("foo")
.then( function p1(string){
        new Promise((resolve, reject) => {
            setTimeout(() => {
                string += "bar";
                resolve(string);
            }, 10000);
        });
    }
)
.then( function p2(string){
        setTimeout(() => {
            string += "baz";
            console.log(string);
        }, 1);
        return string;
    }
)
.then(
    function p3(string){
        console.log("Last then: oops... didn't bother to instantiate and return a promise in the prior then something.");
        console.log(string);
    }
);