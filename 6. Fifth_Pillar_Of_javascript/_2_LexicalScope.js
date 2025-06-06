/**
 * Lexical Scope in JavaScript
 * ----------------------------
 * - Lexical Scope (also called **static scope**) determines how variable access is resolved 
 *   based on **where** functions are defined in the code, not where they are executed.
 * - It defines how inner functions can access variables from their outer functions.
 * - JavaScript uses a **scope chain** to look up variables in the outer scope if they 
 *   are not found in the current function’s local scope.
 */

function process() {
    let i = 0;  // `i` is declared inside `process`, making it part of its local scope.

    /**
     * Inner function `innerProcess`
     * -----------------------------
     * - `innerProcess` is defined inside `process`, so it has access to `i` because of **lexical scope**.
     * - Even when `innerProcess` is executed outside `process`, it still "remembers" the `i` variable.
     * - This is possible because **JavaScript functions remember the scope in which they were created**.
     */
    function innerProcess() {
        i += 1;  // `i` is modified inside `innerProcess`, but it was originally declared in `process`.
        return i;
    }

    return innerProcess; // Returns the function `innerProcess` instead of executing it.
}

// Calling `process` returns `innerProcess`, which is stored in `res`.
let res = process(); 

// `res` now holds the reference to `innerProcess`, which still has access to `i`.

console.log(res); // Logs: [Function: innerProcess], because `res` holds a function reference.

console.log("after first call", res()); // Output: 1
console.log("after second call", res()); // Output: 2
console.log("after third call", res()); // Output: 3

/**
 * Lexical Scope Explanation:
 * ----------------------------
 * - `innerProcess` is defined inside `process`, so it **inherits** the scope of `process`.
 * - This means `innerProcess` can access `i`, even though `i` is not declared inside `innerProcess`.
 *
 * How JavaScript Resolves Variable Access:
 * ----------------------------------------
 * 1. When a function executes, JavaScript first looks for variables inside its **own scope**.
 * 2. If the variable is **not found**, JavaScript moves to the **outer scope** (where the function was defined).
 * 3. This continues up the chain until the variable is found or the global scope is reached.
 *
 * Example: Scope Chain in Action
 * -------------------------------
 * function outer() {
 *     let outerVar = "I am from outer function";
 *
 *     function inner() {
 *         console.log(outerVar); // Accessing `outerVar` from the outer function.
 *     }
 *
 *     return inner;
 * }
 *
 * let myFunc = outer(); // Returns `inner`
 * myFunc(); // Logs: "I am from outer function"
 *
 * - `inner()` does not have `outerVar` in its local scope.
 * - Because of **lexical scoping**, `inner()` can access `outerVar` from `outer()`, even after `outer()` has finished executing.
 *
 * Summary:
 * ---------
 * ✅ **Lexical Scope** means:
 *    - A function can access variables from its outer scope based on where it was **defined**, not where it is **executed**.
 *    - **Closures rely on lexical scope** to "remember" variables even after the outer function has returned.
 *    - This is why `innerProcess()` can still access `i` in our original code.
 *
 * ✅ **Benefits of Lexical Scope**:
 *    - **Encapsulation:** Keeps variables private inside functions.
 *    - **Memory Efficiency:** Variables persist as long as they are needed.
 *    - **State Maintenance:** Retains state across function calls.
 */
