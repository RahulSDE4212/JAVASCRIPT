// Simulates downloading content from a given URL using a Promise
function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from ", url);

        setTimeout(function down() {
            console.log("Downloading completed");

            const content = "ABCDEF";

            resolve(content); // Resolving the promise with downloaded data
        }, 6000); // delay = 6 seconds
    });
}

// Simulates writing data to a file and returning the file name
function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("started writing a file with ", data);

        setTimeout(function write() {
            console.log("completed writing a data in a file: ");

            const fileName = "file.txt";

            resolve(fileName); // Resolving with the name of the file created
        }, 5000);
    });
}

// Simulates uploading a file to a given URL and returning a server response
function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("started uploading file ", file, "on", url);

        setTimeout(function up() {
            console.log("upload completed ");

            const response = "success";
            resolve(response); // Resolving with a response string
        }, 2000);
    });
}

/*
    Core concept: async/await

    - `async` makes a function always return a Promise, even if you return a value.
    - `await` pauses the execution of the async function until the awaited Promise settles (either resolved or rejected).
    - This allows you to write asynchronous code in a **synchronous-looking flow**, improving readability.
    - Behind the scenes, `await` pushes the remaining code into the microtask queue to run after the Promise resolves.
*/
async function steps() {
    // Execution pauses here until download() resolves
    const downloadedData = await download("Www.xyz.com");
    console.log("data downloaded is", downloadedData);

    // Now using the downloaded data to write into a file
    const fileWritten = await writeFile(downloadedData);
    console.log("file written is ", fileWritten);

    // Uploading the written file to a remote server
    const uploadResponse = await uploadData(fileWritten, "www.drive.google.com");
    console.log("upload respone is ", uploadResponse);

    // Final result returned as a resolved Promise from this async function
    return uploadResponse;
}

/*
    Notes:
    - `steps()` is an async function, so it returns a Promise.
    - If needed, you can use `.then()` or `await steps()` to get its result.
    - While `await` makes code look blocking, it's non-blocking under the hood — the call stack is freed up, and the next microtask is scheduled.
    - Ideal for linear workflows like:
        1. Fetch data
        2. Process data
        3. Store data
        4. Send result
    - Use try/catch around awaits to handle errors just like synchronous code.
*/

// Calling the async function (fire-and-forget style here)
steps();

// This line runs **immediately** after calling steps()
// because async functions are non-blocking — they don’t stop JS from executing
console.log("outside");

/*
    ✅ Real-life analogy:
    Imagine downloading a file, writing to disk, then uploading it — each step
    must finish before moving to the next. With async/await, JS waits "smartly" at each step
    without freezing the entire program.

    🔥 Pro Tip:
    Use Promise.all([]) with await if tasks are independent and can be done in parallel
    to drastically improve performance.
*/
