
/**
 * 🔍 What is an Iterator in JavaScript?
 * ----------------------------------------
 * An **iterator** is an object that allows sequential access to elements in a collection, 
 * one at a time, without exposing the underlying structure.
 *
 * ✅ It follows the **Iterator Protocol**, which requires:
 *    1️⃣ A `.next()` method that returns an object `{ value, done }`.
 *    2️⃣ `value`: The next value in the sequence.
 *    3️⃣ `done`: A boolean (`true` when iteration is complete).
 *
 * JavaScript provides built-in iterators for structures like:
 * - Arrays
 * - Strings
 * - Maps and Sets
 * - NodeLists
 *
 * Now, let’s see an example where we implement a **custom iterator**.
 */

// 📌 Custom Iterator Function (Manually Implementing an Iterator)
function fetchNextElement(array) {
    let idx = 0; // Stores the current position in the array

    function next() {
        // If iteration is complete, return undefined
        if (idx == array.length) return { value: undefined, done: true };

        // Otherwise, fetch the next element and increment idx
        const nextElement = array[idx++];
        return { value: nextElement, done: false };
    }

    return { next }; // Returning an object that has `next()` method
}

// 🛠️ Using the Iterator
const automaticFetcher = fetchNextElement([99, 11, 12, 13, 0, 1, 2, 3, 4]);

console.log(automaticFetcher.next()); // { value: 99, done: false }
console.log(automaticFetcher.next()); // { value: 11, done: false }
console.log(automaticFetcher.next()); // { value: 12, done: false }
console.log(automaticFetcher.next()); // { value: 13, done: false }
console.log(automaticFetcher.next()); // { value: 0, done: false }

/**
 * 🧐 How `fetchNextElement` Works Step-by-Step:
 * --------------------------------------------
 * 1️⃣ `fetchNextElement([99, 11, 12, 13, 0, 1, 2, 3, 4])` is called.
 * 2️⃣ It initializes `idx = 0` and returns an object `{ next }`.
 * 3️⃣ When `.next()` is called:
 *     - If `idx < array.length`, it returns `{ value: array[idx++], done: false }`.
 *     - If `idx == array.length`, it returns `{ value: undefined, done: true }`.
 * 4️⃣ Once all elements are accessed, `done: true` indicates completion.
 */

/**
 * ✅ Key Features of Iterators:
 * -----------------------------
 * ✔ **Stateful** → The iterator maintains an internal state (`idx`) to track progress.
 * ✔ **Lazy Evaluation** → Values are produced **one by one** instead of all at once.
 * ✔ **Custom Iteration** → We control how elements are accessed.
 * ✔ **Avoids Memory Overhead** → Useful for large data sets.
 *
 * 🔥 Built-in JavaScript Iterators:
 * ---------------------------------
 * JavaScript provides **built-in iterators** for:
 * 1️⃣ Arrays: `.entries()`, `.keys()`, `.values()`
 * 2️⃣ Strings: Iterated by characters (`for...of`)
 * 3️⃣ Maps and Sets: `.entries()`, `.keys()`, `.values()`
 */

// 🔹 Using Built-in Array Iterator:
const arr = [10, 20, 30, 40];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: 40, done: false }
console.log(iterator.next()); // { value: undefined, done: true }