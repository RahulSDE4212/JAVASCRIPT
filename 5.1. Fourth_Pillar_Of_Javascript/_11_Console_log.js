console.log("Hi");
for(let i = 0; i < 100000000; i++){
    // some logic
}
console.log("by");

/*  
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━📢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  
  🔥 **Understanding `console.log()` in JavaScript** 🔥  
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━⚡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  

  🟢 **Is `console.log()` a Core JavaScript Feature?**  
  ───────────────────────────────────────────────  
  ❌ **No!** `console.log()` is **NOT** part of **core JavaScript** (ECMAScript).  
  ✅ It is a **runtime feature**, provided by the **execution environment**  
     (e.g., Browser, Node.js).  

  ⚡ **Synchronous vs Asynchronous Behavior**  
  ───────────────────────────────────────────  
  🔹 The **runtime environment** determines whether `console.log()` behaves **synchronously** or **asynchronously**.  
  🔹 If the runtime enforces **synchronous execution**, `console.log()` follows a sequential flow.  
  🔹 Otherwise, it may behave **asynchronously**, depending on the implementation.  

  🚀 **Key Takeaway:**  
  `console.log()` is **not part of JavaScript itself** but is provided by the **runtime**,  
  which decides its execution behavior! ⚡  
*/
