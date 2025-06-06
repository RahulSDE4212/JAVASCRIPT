let x = setInterval(function fn(){console.log("the first one")}, 1000);
let y = setInterval(function gn(){console.log("the second one")}, 500);
clearInterval(x); // this will stop the set interval having the id x.
console.log(typeof x);
console.log(typeof y);


/*  
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━⏳━━━━━━━━━━━━━━━━━━━━━━━━━━┓  
  🔥 **Understanding `setInterval(fn, time)` in JavaScript** 🔥  
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━⚡━━━━━━━━━━━━━━━━━━━━━━━━━━┛  

  🟢 **Syntax:**  
  ───────────────────────────────────────  
  setInterval(function fn() {}, 1000);  

  ✅ `setInterval()` takes **two arguments**:  
  🔹 **First argument** → A **callback function** (`fn`) to execute repeatedly.  
  🔹 **Second argument** → A **time interval** in **milliseconds (ms)**.  
     - This represents the **delay** **between** each function execution.  
     - Example: `1000 ms` = **1 second** ⏳  

  ⚡ **Return Value (ID of `setInterval`)**  
  ───────────────────────────────────────  
  🔹 **Chrome Browser (Client-side JavaScript)** → Returns a **unique number (ID)**.  
  🔹 **Node.js Environment (Server-side JavaScript)** → Returns a **unique object (ID)**.  

  🚀 **Key Takeaway:**  
  `setInterval()` runs **infinitely** at a fixed interval unless cleared using `clearInterval(ID)`.  
  Understanding its behavior is essential for **timers, animations, and background tasks**! ⏲️⚡  
*/
