/**
 * Closure Property in JavaScript
 * --------------------------------
 * - A closure is a feature in JavaScript where an inner function has access to 
 *   the variables of its outer function, even after the outer function has finished execution.
 * - It allows functions to "remember" the scope in which they were created.
 * - Closures help in maintaining state between function calls, data encapsulation, 
 *   and creating private variables in JavaScript.
 */


function process() {
    // `i` is a local variable of the `process` function.

    let i = 0;

    /**
     * Inner function `innerProcess`
     * -----------------------------
     * - This function increments `i` and returns its value.
     * - Since `i` is declared in the outer `process` function,
     *   `innerProcess` has access to it even after `process` has returned.
     * - This is an example of closure, where `innerProcess` "remembers" the value of `i`.
     */
    function innerProcess(){
        i += 1; // `i` is modified inside the inner function.
        return i;
    }

    return innerProcess; // We return the function itself, not its execution result.
}

// Calling `process` returns `innerProcess`, which is stored in `res`.
let res = process(); 

// `res` is now holding the reference to `innerProcess`, which still has access to `i`.

console.log(res); // Logs: [Function: innerProcess], because `res` holds a function reference.

console.log("after first call", res()); // Output: 1
console.log("after second call", res()); // Output: 2
console.log("after third call", res()); // Output: 3

/**
 * Why does `res()` remember the value of `i`?
 * --------------------------------------------
 * - When `process()` is called, it creates a new execution context with `i = 0`.
 * - The inner function `innerProcess` is returned but still "remembers" the `i` variable.
 * - Each time `res()` is called, `i` is modified and retained in memory.
 * - This behavior happens because of closures, where functions retain access to their
 *   lexical scope even after the parent function execution has completed.
 *
 * Key Uses of Closures:
 * ----------------------
 * 1. **Data Encapsulation:** Variables inside closures can't be accessed directly from outside.
 * 2. **State Maintenance:** Retains state between function calls, as seen in this example.
 * 3. **Creating Private Variables:** Used in module patterns for private properties.
 */
