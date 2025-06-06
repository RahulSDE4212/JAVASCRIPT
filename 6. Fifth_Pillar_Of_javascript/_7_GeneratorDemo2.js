/**
 * 🔥 Generator Function Explanation:
 * ------------------------------------
 * - A generator function (`function*`) allows execution to be paused and resumed later.
 * - `yield` pauses execution and returns a value.
 * - `.next(value)` resumes execution and can pass values back into the generator.
 */

function* fetchNextElement() {
    console.log("inside generator"); // ✅ Logs when the generator starts executing
    
    const x = 10; // ✅ Declares a constant variable `x` with value 10

    yield 11; // ✅ First `yield`, returns 11 and pauses execution

    console.log("entering after a yield"); // ✅ Logs when execution resumes after first `yield`

    /**
     * 🔥 Key Concept:
     * ----------------
     * - `yield 30` pauses execution again and waits for `.next(value)`.
     * - The passed value from `.next(value)` replaces `yield 30`.
     */
    const y = x + (yield 30); // ✅ `yield 30` pauses, `y` is assigned when resumed with `.next(value)`

    console.log("value of y is: ", y); // ✅ Logs the computed value of `y`
}

// ✅ Creating a generator object
const iter = fetchNextElement();

console.log("called generator"); // ✅ Logs before calling `.next()`

// ✅ First `.next()`: Starts generator execution until first `yield`
console.log("first", iter.next()); 
// Output:
// "inside generator"
// "first" { value: 11, done: false }

// ✅ Second `.next()`: Resumes execution after `yield 11`, stops at `yield 30`
console.log("second", iter.next());
// Output:
// "entering after a yield"
// "second" { value: 30, done: false }

/**
 * 🔥 Third `.next(40)`:
 * ----------------------
 * - Passes `40` back into `yield 30`, so `y = 10 + 40 = 50`.
 * - Execution continues until the function finishes.
 */
console.log("third", iter.next(40));
// Output:
// "value of y is: 50"
// "third" { value: undefined, done: true }
