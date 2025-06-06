/**
 * 🔥 What is a Generator in JavaScript?
 * ----------------------------------------
 * A **generator** is a special type of function that can be **paused and resumed** later.
 * It allows us to generate values lazily **on demand** instead of computing them all at once.
 *
 * ✅ Generators use `function*` syntax.
 * ✅ The `yield` keyword is used to pause execution and return a value.
 * ✅ The `.next()` method resumes execution from the last `yield`.
 * ✅ Once `return` is reached, the generator is considered done.
 *
 * 🔥 Difference Between `return` and `yield`
 * -------------------------------------------
 * - `yield` temporarily suspends execution, allowing the generator to be resumed later.
 * - `return` **terminates** the generator completely.
 */

// 📌 Simple Generator Example
function* fetchNextElement() {
    console.log("I am in the generator function ");
    yield 1; // "yield" is similar to return but allows resuming later.
    yield 2;
    console.log("Somewhere in the middle");
    yield 3;
    yield 4;
}

// 🔹 Calling the generator function doesn’t execute the code immediately.
const iter = fetchNextElement(); // Creates a generator/Iterator object but doesn’t execute anything yet

console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 4, done: false }
console.log(iter.next()); // { value: undefined, done: true }

/**
 * 🧐 How Generators Work Step-by-Step:
 * ------------------------------------
 * 1️⃣ `fetchNextElement()` is called, but execution doesn’t start immediately.
 * 2️⃣ The first `next()` call starts execution until the first `yield`, returning `{ value: 1, done: false }`.
 * 3️⃣ The second `next()` resumes execution until the next `yield`, returning `{ value: 2, done: false }`.
 * 4️⃣ The generator keeps running until all `yield` statements are exhausted.
 * 5️⃣ When `.next()` is called after the last `yield`, it returns `{ value: undefined, done: true }`, indicating completion.
 */

/**
 * 🔥 `return` in a Generator
 * ---------------------------
 * - If a `return` statement is used in a generator, it **immediately terminates execution**.
 * - Any `yield` statements after `return` are ignored.
 */

function* fetchNextElement2() {
    console.log("I am in the generator function ");
    yield 1;
    yield 2;
    console.log("Somewhere in the middle");
    yield 3;
    return 10; // Generator terminates here!
    yield 4;   // This will never execute
}

const iter2 = fetchNextElement2();

console.log(iter2.next()); // { value: 1, done: false }
console.log(iter2.next()); // { value: 2, done: false }
console.log(iter2.next()); // { value: 3, done: false }
console.log(iter2.next()); // { value: 10, done: true } ⬅ `done: true` means generator is finished
console.log(iter2.next()); // { value: undefined, done: true } ⬅ No more values

/**
 * 🔥 Infinite Generators
 * ------------------------
 * Generators can be used to create infinite sequences.
 * This is useful when working with **streams of data** or **large datasets**.
 */

function* infiniteCounter() {
    let count = 1;
    while (true) { // Infinite loop
        yield count++;
    }
}

const counter = infiniteCounter();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
console.log(counter.next().value); // 4

// The generator keeps running indefinitely without consuming memory unnecessarily

/**
 * 🔥 Passing Arguments to `next()`
 * --------------------------------
 * - You can send values into a generator using `.next(value)`.
 * - The value passed replaces the last `yield` expression.
 */

function* modifyValue() {
    const num = yield "Enter a number"; // Waits for input
    yield `You entered: ${num}`;
}

const mod = modifyValue();
console.log(mod.next());       // { value: 'Enter a number', done: false }
console.log(mod.next(42));     // { value: 'You entered: 42', done: false }
console.log(mod.next());       // { value: undefined, done: true }

/**
 * 🔥 Throwing Errors Inside Generators
 * -------------------------------------
 * - You can use `.throw(error)` to throw an error inside a generator.
 */

function* errorHandling() {
    try {
        yield "Hello";
        yield "World";
    } catch (error) {
        yield `Caught: ${error.message}`;
    }
}

const errGen = errorHandling();
console.log(errGen.next()); // { value: 'Hello', done: false }
console.log(errGen.throw(new Error("Something went wrong"))); // { value: 'Caught: Something went wrong', done: false }
console.log(errGen.next()); // { value: undefined, done: true }

/**
 * 🔥 Delegating to Another Generator (`yield*`)
 * ----------------------------------------------
 * - The `yield*` keyword allows a generator to delegate execution to another generator.
 */

function* numbers() {
    yield 1;
    yield 2;
}

function* letters() {
    yield "A";
    yield "B";
}

function* combined() {
    yield* numbers(); // Delegating to numbers()
    yield* letters(); // Delegating to letters()
    yield "Done!";
}

const combo = combined();
console.log(combo.next()); // { value: 1, done: false }
console.log(combo.next()); // { value: 2, done: false }
console.log(combo.next()); // { value: 'A', done: false }
console.log(combo.next()); // { value: 'B', done: false }
console.log(combo.next()); // { value: 'Done!', done: false }

/**
 * 🎯 Use Cases of Generators
 * ----------------------------
 * ✅ **Lazy Iteration:** Generators only compute values when needed, reducing memory usage.
 * ✅ **Data Streaming:** Efficiently handle large datasets or real-time data (e.g., paginated APIs).
 * ✅ **Async Operations:** Used in async programming to handle promises in a synchronous-like manner.
 * ✅ **Custom Iterators:** Build custom iterators for collections or data sources.
 * ✅ **State Machines:** Generators maintain their execution state, making them useful for simulations.
 *
 */

