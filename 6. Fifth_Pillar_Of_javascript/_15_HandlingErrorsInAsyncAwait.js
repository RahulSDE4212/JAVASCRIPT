/*
## 🧠 DRY RUN OF YOUR CODE — Step-by-step with Runtime Internals

> ✅ File is parsed — all function declarations (`download`, `steps`) are hoisted and available in memory.

---

### 🔷 Line 17: `steps();`
- 📌 Call stack: `steps()` is **pushed**
- 🔽 Enters `steps()` (async function)

---

### 🔷 Line 10: Inside `steps()`
- 🔸 `console.log("starting steps");`  
  🖨️ Output: `starting steps`

---

### 🔷 Line 12: `const downloadedData = await download("Www.xyz.com");`
- ✅ `download()` is called
- 📌 Call stack: `download()` is **pushed**

---

### 🔷 Line 2: Inside `download()`
- 🔸 `console.log("Starting to download data from ", url);`  
  🖨️ Output: `Starting to download data from  Www.xyz.com`

---

### 🔷 Line 4: `setTimeout(...)`
- ⏳ `down()` callback registered in Web APIs with 6000ms delay
- 📥 Will enter **Macrotask Queue** after 6s
- 📌 Call stack: `download()` is **popped**

---

### 🔁 Execution suspends at `await`
- Because `await` waits for the promise, the function `steps()` is **suspended**, and its execution context is removed.
- 📌 Call stack: `steps()` is **popped**
- ✅ No `.catch()` attached to this `steps()` call.

---

### ⏱️ After 6000ms:
- ✅ `down()` enters **Macrotask Queue**
- 🔁 Event loop pulls `down()` in

---

### 🔷 Line 5: Inside `down()`
- 📌 Call stack: `down()` is **pushed**
- 🔸 `console.log("Downloading completed");`  
  🖨️ Output: `Downloading completed`

---

### 🔷 Line 7: `reject(content);`
- ❌ The promise returned by `download()` is **rejected** with `"ABCDEF"`
- 🔁 This rejection is propagated to the suspended `steps()` function
- 🔥 No `try...catch` block in `steps()` → results in **Uncaught Promise Rejection**
- 📌 Call stack: `down()` is **popped**

---

### ❌ Rejection reaches `steps()` caller
- Since there's no `.catch()` on `steps()` and no global `try...catch`, the error is:


---

### 📄 Final Console Output:
starting steps  
Starting to download data from  Www.xyz.com  
Downloading completed  
Uncaught (in promise) ABCDEF -> error

---

## ✅ Call stack is empty
## ❗ Microtask queue has no handler to catch rejection
## 🚨 Error bubble remains unhandled
*/


function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from ", url);

        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF";
            reject(content);
        }, 6000);
    });
}

async function steps() {
    console.log("starting steps");

    const downloadedData = await download("Www.xyz.com");

    return downloadedData;
}

steps();
