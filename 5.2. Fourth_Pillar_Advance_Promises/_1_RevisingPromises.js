
/**
 * 🌟 Promises in JavaScript 🌟
 * --------------------------------------------
 * ✅ A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation.
 * ✅ A Promise has two fundamental properties:
 *      - `value`  -> Initially `undefined`, later holds the resolved/rejected value.
 *      - `state`  -> Initially `"pending"`, changes to either `"fulfilled"` or `"rejected"`.
 * 
 * 🛠️ Creating a Promise:
 * ------------------------------
 * new Promise(function exec(resolve, reject) {
 *     // The `exec` function is called the "executor function".
 *     // It can contain any logic (synchronous or asynchronous).
 * 
 *     // If resolve(argument) is called:
 *     //    - `state` becomes "fulfilled".
 *     //    - `value` is assigned the argument passed to `resolve()`.
 * 
 *     // If reject(argument) is called:
 *     //    - `state` becomes "rejected".
 *     //    - `value` is assigned the argument passed to `reject()`.
 * });
 * 
 * 🎯 Key Points:
 * ------------------------------
 * ✅ At the time when the constructor generates a new promise object, it also generate a pair of function called as 
 *     "resolve" and "reject".
 * ✅ The Promise constructor accepts an executor function as an argument.
 * ✅ The executor function receives two functions: `resolve()` and `reject()`.
 * ✅ When a new Promise object is created, JavaScript automatically generates the `resolve` and `reject` functions.
 * ✅ The executor function runs **synchronously** when the Promise is created.
 * ✅ Generally the executor callback wraps some asynchronous / synchronous operations.
 * 
 */
