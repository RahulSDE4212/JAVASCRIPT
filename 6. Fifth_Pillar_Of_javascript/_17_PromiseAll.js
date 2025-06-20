function download(url, time) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from ", url);

        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF";
            resolve(content);
        }, time);
    });
}

const p1 = download("www.abc1.com", 3000);
const p2 = download("www.abc2.com", 1000);
const p3 = download("www.abc3.com", 5000);

Promise.all([p1, p2, p3]).then(function fullfillHandler(values){
    console.log(values);
})


/*
## 🧠 DRY RUN OF YOUR CODE — Step-by-step with Runtime Internals

> ✅ File is parsed — function `download()` is hoisted. `p1`, `p2`, `p3`, and `Promise.all(...)` are declared and executed sequentially.

---

### 🔷 Line 11: `const p1 = download("www.abc1.com", 3000);`
- 📌 Call stack: `download()` is **pushed**
- 🔽 Enters `download()`

---

### 🔷 Line 3: Inside `download("www.abc1.com", 3000)`
- 🔸 `console.log(...)`  
  🖨️ Output: `Starting to download data from  www.abc1.com`

---

### 🔷 Line 5: `setTimeout(..., 3000)`
- ⏳ Registers `down()` in Web APIs
- 🕒 3s timer → will enter **Macrotask Queue** after 3000ms
- 📌 Call stack: `download()` is **popped**
- ✅ Returns a pending Promise (assigned to `p1`)

---

### 🔷 Line 12: `const p2 = download("www.abc2.com", 1000);`
- 📌 Call stack: `download()` is **pushed**

---

### 🔷 Line 3: Inside `download("www.abc2.com", 1000)`
- 🔸 `console.log(...)`  
  🖨️ Output: `Starting to download data from  www.abc2.com`

---

### 🔷 Line 5: `setTimeout(..., 1000)`
- ⏳ Registers `down()` in Web APIs
- 🕒 1s timer → will enter **Macrotask Queue** after 1000ms
- 📌 Call stack: `download()` is **popped**
- ✅ Returns a pending Promise (assigned to `p2`)

---

### 🔷 Line 13: `const p3 = download("www.abc3.com", 5000);`
- 📌 Call stack: `download()` is **pushed**

---

### 🔷 Line 3: Inside `download("www.abc3.com", 5000)`
- 🔸 `console.log(...)`  
  🖨️ Output: `Starting to download data from  www.abc3.com`

---

### 🔷 Line 5: `setTimeout(..., 5000)`
- ⏳ Registers `down()` in Web APIs
- 🕒 5s timer → will enter **Macrotask Queue** after 5000ms
- 📌 Call stack: `download()` is **popped**
- ✅ Returns a pending Promise (assigned to `p3`)

---

### 🔷 Line 15: `Promise.all([p1, p2, p3]).then(...)`
- 🔒 `Promise.all()` waits for all 3 promises to fulfill
- 📥 `then()` callback is registered in **Microtask Queue** only after **all are resolved**
- Runtime is now idle — timers ticking in Web APIs

---

### ⏱️ After 1000ms (p2 resolves first)
- ✅ Callback `down()` for p2 enters **Macrotask Queue**
- 📌 Call stack: `down()` is **pushed**
- 🔸 `console.log("Downloading completed");`  
  🖨️ Output: `Downloading completed`
- 🔸 `resolve("ABCDEF")` → p2 is now **fulfilled**
- 📌 Call stack: `down()` is **popped**
- ❌ `Promise.all()` does **not proceed yet** (p1 and p3 still pending)

---

### ⏱️ After 3000ms (p1 resolves)
- ✅ Callback `down()` for p1 enters **Macrotask Queue**
- 📌 Call stack: `down()` is **pushed**
- 🔸 `console.log("Downloading completed");`  
  🖨️ Output: `Downloading completed`
- 🔸 `resolve("ABCDEF")` → p1 is now **fulfilled**
- 📌 Call stack: `down()` is **popped**
- ❌ `Promise.all()` still waits (p3 pending)

---

### ⏱️ After 5000ms (p3 resolves)
- ✅ Callback `down()` for p3 enters **Macrotask Queue**
- 📌 Call stack: `down()` is **pushed**
- 🔸 `console.log("Downloading completed");`  
  🖨️ Output: `Downloading completed`
- 🔸 `resolve("ABCDEF")` → p3 is now **fulfilled**
- 📌 Call stack: `down()` is **popped**

---

### 🧷 All promises are now fulfilled → `.then()` of `Promise.all()` enters **Microtask Queue**
- 🔁 Event loop executes `.then()` since call stack is empty

---

### 🔷 Line 15: `fullfillHandler(values)`
- 📌 Call stack: `fullfillHandler()` is **pushed**
- 🔸 `console.log(values);`  
  🖨️ Output: `["ABCDEF", "ABCDEF", "ABCDEF"]`
- 📌 Call stack: `fullfillHandler()` is **popped**

---

## ✅ Final Call Stack is Empty
## ✅ All Macrotasks and Microtasks executed
## ✅ Program Complete

---

### 📄 Final Console Output (in order):
Starting to download data from  www.abc1.com  
Starting to download data from  www.abc2.com  
Starting to download data from  www.abc3.com  
Downloading completed  
Downloading completed  
Downloading completed  
[ 'ABCDEF', 'ABCDEF', 'ABCDEF' ]
*/
