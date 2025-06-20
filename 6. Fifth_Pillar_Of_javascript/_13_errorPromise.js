/*
## 🧠 DRY RUN OF YOUR CODE — Step-by-step with Runtime Internals

> ✅ File is loaded by JS engine — all function definitions (`download`, `writeFile`, `uploadData`) are hoisted and available in memory.

---

### 🔷 Line 49: `download("www.xyz.com")`
- 📌 Call stack: `download()` is **pushed**
- 🔽 Enters function `download`

---

### 🔷 Line 2: Inside `download()`
- 🔸 `console.log("Starting to download data from ", url);`  
  🖨️ Output: `Starting to download data from www.xyz.com`

---

### 🔷 Line 4: `setTimeout(function down() {...}, 6000);`
- ⏳ Timer registered in Web APIs (callback is `down()`)
- 🕒 Delay: 6000 ms
- 📥 Macrotask: Will go to **Macrotask Queue** after 6s
- 📌 Call stack: `download()` is **popped**

---

### 🔷 Line 49–63: `.then(...).then(...).then(...)`
- 🧷 All `.then()` handlers are registered on the promise returned by `download()`
- 📌 No function is called here, just **handlers attached**

---

### ⏱️ After 6000ms
- ✅ `down()` callback enters **Macrotask Queue**
- 🔁 Event Loop sees Call Stack is empty → pulls `down()` from Macrotask Queue

---

### 🔷 Line 5: Enters `down()`
- 📌 Call stack: `down()` **pushed**
- 🔸 `console.log("Downloading completed");`  
  🖨️ Output: `Downloading completed`

---

### 🔷 Line 7: `resolve(content)`
- `content = "ABCDEF"`
- Promise resolved → `.then(processDownload)` is now ready
- 📥 `processDownload` goes to **Microtask Queue**
- 📌 Call stack: `down()` is **popped**

---

### 🔁 **Microtask Queue is not empty**
- 🔄 Event loop executes next Microtask

---

### 🔷 Line 51: Enters `processDownload(value)`
- 📌 Call stack: `processDownload()` **pushed**
- 🔸 `console.log(...)`  
  🖨️ Output: `downloading done with the following value ABCDEF`

---

### 🔷 Line 52: `return writeFile(value);`
- Calls `writeFile("ABCDEF")`
- 📌 Call stack: `writeFile()` **pushed**

---

### 🔷 Line 10: Inside `writeFile()`
- 🔸 `console.log(...)`  
  🖨️ Output: `started writing a file with ABCDEF`

---

### 🔷 Line 12: `setTimeout(function write() {...}, 5000);`
- ⏳ Timer registered in Web APIs
- 🕒 Delay: 5000 ms
- 📥 `write()` will be queued in **Macrotask Queue**
- 📌 Call stack: `writeFile()` and `processDownload()` **popped**

---

### ⏱️ After 5000ms
- ✅ `write()` goes to **Macrotask Queue**
- 🔄 Event loop executes it (Call Stack is empty)

---

### 🔷 Line 13: Enters `write()`
- 📌 Call stack: `write()` **pushed**
- 🔸 `console.log(...)`  
  🖨️ Output: `completed writing a data in a file:`

---

### 🔷 Line 15: `resolve(fileName)`
- `fileName = "file.txt"`
- Promise resolved → `.then(processWrite)` enters **Microtask Queue**
- 📌 Call stack: `write()` **popped**

---

### 🔁 Microtask Phase

---

### 🔷 Line 58: Enters `processWrite(value)`
- 📌 Call stack: `processWrite()` **pushed**
- 🔸 `console.log(...)`  
  🖨️ Output: `data written in a file with name file.txt`

---

### 🔷 Line 59: `return uploadData(...)`
- Calls `uploadData(file.txt, www.upload.com)`
- 📌 Call stack: `uploadData()` **pushed**

---

### 🔷 Line 20: Inside `uploadData()`
- 🔸 `console.log(...)`  
  🖨️ Output: `started uploading file file.txt on www.upload.com`

---

### 🔷 Line 22: `setTimeout(function up() {...}, 2000);`
- ⏳ Timer registered in Web APIs
- 🕒 Delay: 2000 ms
- 📌 Call stack: `uploadData()` and `processWrite()` **popped**

---

### ⏱️ After 2000ms
- ✅ `up()` enters **Macrotask Queue**
- 🔄 Event loop pushes it to Call Stack

---

### 🔷 Line 23: Enters `up()`
- 📌 Call stack: `up()` **pushed**
- 🔸 `console.log(...)`  
  🖨️ Output: `upload completed`

---

### 🔷 Line 25: `resolve(response)`
- `response = "success"`
- `.then(processUpload)` enters **Microtask Queue**
- 📌 Call stack: `up()` **popped**

---

### 🔁 Microtask Phase

---

### 🔷 Line 65: Enters `processUpload(value)`
- 📌 Call stack: `processUpload()` **pushed**
- 🔸 `console.log(...)`  
  🖨️ Output: `we have uploaded with  success`
- 📌 Call stack: `processUpload()` **popped**

---

## ✅ **Final Call Stack is Empty**
## ✅ **All Microtasks and Macrotasks processed**
## ✅ **Program Complete**

---

### 📄 **Final Console Output (in order):**
Starting to download data from www.xyz.com  
Downloading completed  
downloading done with the following value ABCDEF  
started writing a file with ABCDEF  
completed writing a data in a file:  
data written in a file with name file.txt  
started uploading file file.txt on www.upload.com  
upload completed  
we have uploaded with  success
*/

function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from ", url);

        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF";
            resolve(content);
        }, 6000);
    });
}

function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("started writing a file with ", data);

        setTimeout(function write() {
            console.log("completed writing a data in a file: ");
            const fileName = "file.txt";
            resolve(fileName);
        }, 5000);
    });
}

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("started uploading file ", file, "on", url);

        setTimeout(function up() {
            console.log("upload completed ");
            const response = "success";
            resolve(response);
        }, 2000);
    });
}

download("www.xyz.com")
.then(
    function processDownload(value) {
        console.log("downloading done with the following value", value);
        return writeFile(value);
    },
    function downloadReject(value) {
        console.log("download is rejected", value);
        throw value;
    }
)
.then(
    function processWrite(value) {
        console.log("data written in a file with name", value);
        return uploadData(value, "www.upload.com");
    },
    function writeReject(value) {
        console.log("write is rejected", value);
        throw value;
    }
)
.then(
    function processUpload(value) {
        console.log("we have uploaded with ", value);
    },
    function processReject(value) {
        console.log("upload is rejected", value);
        throw value;
    }
);
