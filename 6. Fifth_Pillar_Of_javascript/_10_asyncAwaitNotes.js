/*
==============================
🌐 ASYNC / AWAIT IN JAVASCRIPT
==============================
*/

/*
🔁 Traditional Callbacks & Promises
Before async/await, we used:
1. Callbacks → leads to "callback hell"
2. Promises → better, but still messy with chained `.then()`
*/

/*
💡 async/await is syntactic sugar built on Promises.
It allows us to write asynchronous code in a *synchronous* style — cleaner and more readable.
*/

/*
=========================
📌 SYNTAX BASICS
=========================
*/

// ✅ Declare a function as async using the `async` keyword
async function fetchData() {
  // ✅ Use `await` to pause execution until the Promise settles (resolves or rejects)
  let result = await someAsyncFunction();
  console.log(result);
}

/*
=========================
📦 WHAT async DOES?
=========================
- Declares that a function will always return a Promise.
- Even if you return a simple value, it gets wrapped in a Promise.
*/

// Example:
async function foo() {
  return 42;
}
// same as:
function foo() {
  return Promise.resolve(42);
}

/*
=========================
⏳ WHAT await DOES?
=========================
- Can only be used inside async functions.
- Waits for the Promise to resolve or reject.
- Pauses execution without blocking the thread.
*/

// Example:
async function getUser() {
  const response = await fetch('https://api.example.com/user');
  const data = await response.json(); // Waits until response is converted to JSON
  console.log(data);
}

/*
=============================
🔥 ERROR HANDLING WITH TRY/CATCH
=============================
Use `try...catch` to handle errors just like synchronous code.
*/

async function getProduct() {
  try {
    const response = await fetch('https://api.example.com/product');
    const product = await response.json();
    console.log(product);
  } catch (error) {
    console.error("❌ Error fetching product:", error);
  }
}

/*
=============================
⚠️ RULES OF async/await
=============================
1. `await` only works inside async functions.
2. If the awaited Promise rejects and it's not caught → it throws.
3. You can use `Promise.all()` with multiple awaits to run them in parallel.
*/

// Example using Promise.all for parallel execution:
async function loadData() {
  const [user, orders] = await Promise.all([
    fetch('/user').then(res => res.json()),
    fetch('/orders').then(res => res.json())
  ]);
  console.log(user, orders);
}

/*
=============================
🧠 WHEN TO USE async/await?
=============================
✅ When you have multiple async operations
✅ When code readability matters
✅ When you want cleaner syntax than .then() chaining
*/

/*
=============================
🔁 COMMON MISTAKE TO AVOID
=============================
❌ Don't forget to handle errors with try/catch
❌ Don't await non-Promise values (it’ll just pass through)
*/

// WRONG: Awaiting something that's not a promise
async function badExample() {
  const result = await 123; // Just passes through, no actual wait
  console.log(result); // Prints 123
}

/*
=============================
🧪 CONCLUSION
=============================
- `async/await` = Promises made pretty
- Cleaner syntax
- Try/catch for error handling
- Use when you want to avoid "callback hell" and long `.then()` chains
*/
