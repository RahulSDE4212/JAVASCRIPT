/**
 * Why `innerProcess` Remembers `i` and `j` but Not `k`?
 * ------------------------------------------------------
 * The reason `innerProcess` remembers **`i` and `j`** but **not `k`** is due to 
 * **JavaScript's closure mechanism and garbage collection process**.
 */

function process() {
    let i = 0;         // Local variable (primitive)
    let j = [1, 2, 4]; // Local variable (reference type - array)
    let k = 0;         // Local variable (primitive)

    function innerProcess() {
        i += 1;       // Accessing `i` (closure)
        console.log(j); // Accessing `j` (closure)
    }

    return innerProcess; // Returning the inner function
}

let res = process(); // `process()` is executed, but `res` holds `innerProcess`

/**
 * 1️⃣ Understanding Closures First
 * ---------------------------------
 * A **closure** is created when an inner function (`innerProcess`) **retains access** 
 * to the variables of its outer function (`process`), even after the outer function has executed.
 */

/**
 * 2️⃣ What Happens When `process()` Executes?
 * -------------------------------------------
 * 1. `process()` runs and creates:
 *    - `i = 0` (a **primitive** variable)
 *    - `j = [1, 2, 4]` (an **array**, i.e., a **reference type**)
 *    - `k = 0` (another **primitive** variable)
 *    - `innerProcess()` (which is returned)
 * 2. Since `process()` **returns** `innerProcess`, JavaScript keeps `innerProcess` alive.
 * 3. But `innerProcess` **only uses** `i` and `j` inside its body.
 */

/**
 * 3️⃣ Garbage Collection and Memory Optimization
 * ----------------------------------------------
 * JavaScript’s **Garbage Collector** removes unused variables from memory using a technique 
 * called **reference counting**.
 *
 * ✅ **`i` and `j` are kept in memory** because:
 * - `i` is a **primitive value**, but it is **modified** (`i += 1`) inside `innerProcess`, so the closure retains it.
 * - `j` is an **array** (a reference type) that is **logged** inside `innerProcess`, so it remains accessible.
 *
 * ❌ **`k` is removed from memory** because:
 * - It is **never used** inside `innerProcess`.
 * - Since no active function references `k`, JavaScript's **garbage collector** automatically removes it from memory.
 */

/**
 * 5️⃣ Scope Chain and Lexical Scope
 * ---------------------------------
 * Since `innerProcess` is **defined inside `process`**, it forms a **closure** over `process`'s scope:
 * - `innerProcess` **remembers** variables from its outer function (`process`) **only if they are used inside it**.
 * - JavaScript keeps only the **necessary** variables in memory.
 */


