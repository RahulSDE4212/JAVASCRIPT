console.log("Hi");
/*  
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━👑━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  
  🔥 **JavaScript & Its Synchronous Nature** 🔥  
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━⚡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  

  🟢 **JavaScript Core is Synchronous**  
  ───────────────────────────────────  
  ✅ JavaScript executes **synchronously** by default for its **core logic**  
     (as defined in the **ECMAScript documentation** 📜).  

  ⚠️ **What About `setTimeout()`?**  
  ───────────────────────────────────  
  🔹 `setTimeout()` is **NOT** part of the ECMAScript specification.  
  🔹 It is provided by the **runtime environment** (e.g., Browser, Node.js).  
  🔹 The **runtime** decides whether `setTimeout()` executes **synchronously** or **asynchronously**.  

  🚀 **Key Takeaway:**  
  JavaScript’s **async behavior** comes from the runtime, NOT the language itself!  
  Understanding this is essential for mastering the **event loop** & async programming! ⚡  
*/


setTimeout(function fun(){
    console.log("timeout");
}, 5000);
console.log("by");