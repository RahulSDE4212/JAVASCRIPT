// --------------------
// 🚀 GOAL OF THIS CODE:
// Simulate an asynchronous workflow:
// 1. Download some data from a URL
// 2. Write the data into a file
// 3. Upload the file to another URL
// --------------------

// ✅ Step 1: Function to simulate downloading data from the internet
function download(url){
    // Returning a Promise to simulate an asynchronous download operation
    return new Promise(function exec(resolve, reject){
        console.log("Starting to download data from ", url);

        // setTimeout used to simulate delay (like a real network request)
        setTimeout(function down() {
            console.log("Downloading completed");

            // Dummy data that represents downloaded content
            const content = "ABCDEF";

            // Calling resolve to indicate download is finished successfully
            resolve(content);
        }, 6000); // delay = 6 seconds
    });
}

// ✅ Step 2: Function to simulate writing data into a file
function writeFile(data){
    // Returning a Promise to simulate file-writing operation
    return new Promise(function exec(resolve, reject) {
        console.log("started writing a file with ", data);

        // Simulating a 5-second delay for writing the file
        setTimeout(function write() {
            console.log("completed writing a data in a file: ");

            // Assuming the file is saved with the name 'file.txt'
            const fileName =  "file.txt";

            // File writing successful, returning file name
            resolve(fileName);
        }, 5000);
    })
}

// ✅ Step 3: Function to simulate uploading a file to a server
function uploadData(file, url){
    // Returning a Promise to simulate upload operation
    return new Promise(function exec(resolve, reject) {
        console.log("started uploading file ", file, "on", url);

        // Simulating a 2-second delay for upload
        setTimeout(function up() {
            console.log("upload completed ");

            // Upload successful, returning a dummy response
            const response = "success";
            resolve(response);
        }, 2000);
    })
}

// ✅ Helper function to handle the promise returned from each generator step
function doAfterReceiving(value){
    // Resume the generator by passing in the last resolved value
    let future = iter.next(value);

    // Log what the generator yields or returns
    console.log("future is", future);

    // If generator is done, stop the process
    if(future.done) return;

    // Otherwise, wait for the current promise to resolve,
    // then call this function again with the resolved value
    future.value.then(doAfterReceiving);
}

// ✅ Generator function to define the steps in sequence
// Each step is paused using 'yield' and resumed after the promise resolves
function* steps() {
    // Step 1: Download data
    const downloadedData = yield download("Www.xyz.com");
    console.log("data downloaded is", downloadedData);

    // Step 2: Write the downloaded data into a file
    const fileWritten = yield writeFile(downloadedData);
    console.log("file written is ", fileWritten);

    // Step 3: Upload the file to another URL
    const uploadResponse = yield uploadData(fileWritten, "www.drive.google.com");
    console.log("upload respone is ", uploadResponse);

    // Final return value from the generator (not used in this code, but possible to access)
    return uploadResponse;
}

// ✅ Kick-off point: start running the generator step by step
const iter = steps(); // Create a generator instance
const future = iter.next(); // Start the first step (download)

future.value.then(doAfterReceiving); // Begin the promise chain using recursion

/*
📝 SUMMARY OF CONCEPTS USED:

🔸 Promises:
   - A way to handle async tasks in JavaScript.
   - They represent something that will finish in the future (resolve or reject).

🔸 setTimeout():
   - Simulates delay like real-world network or file tasks.

🔸 Generator functions (function*):
   - Can pause execution using 'yield'.
   - Used here to write async code in a more readable, step-by-step way.

🔸 .next(value):
   - Used to resume generator function from the last paused point.
   - We pass resolved values from promises to continue to the next step.

🔸 Recursive Promise Handling:
   - doAfterReceiving handles one step, waits for it to finish,
     then automatically triggers the next step using recursion.

🧠 This whole pattern was often used before `async/await` became popular in JS,
   giving full control over async sequences.
*/
