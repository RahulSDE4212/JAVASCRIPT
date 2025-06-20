// --------------------------------------------------------
// ✅ STEP-BY-STEP DRY RUN EXPLANATION (OUTSIDE FUNCTIONS)
// --------------------------------------------------------

/*
Absolutely Rahul! Here's a step-by-step dry run of your code — like a timeline of what happens first, second, third... in super clear order 🔍👇
*/

// 🔁 Step-by-Step Execution Flow

// ✅ Step 1: Start main script execution
// steps().then(...); → Calls the `steps()` async function.


// ✅ Step 2: Inside `steps()`
// console.log("starting steps"); → Output: starting steps


// ✅ Step 3: Begin `download("www.xyz.com")`
// const downloadedData = await download("Www.xyz.com");
// This pauses the `steps()` function at `await`.
// Meanwhile, it enters `download()`:

// Inside download():
// console.log("Starting to download data from ", url); 
// Output: Starting to download data from  Www.xyz.com
// Then setTimeout(..., 6000) is scheduled to complete after 6 seconds.


// ✅ Step 4: JavaScript continues
// console.log("outside"); → Output: outside


// ✅ Step 5: The long `for` loop runs
// for (let i = 0; i < 1000000; i++) {}
// It just blocks the thread for a moment (no output)


// ✅ Step 6: This prints immediately after loop
// console.log("for loop done"); → Output: for loop done


// ✅ Step 7: Timer is scheduled
// setTimeout(..., 4000); → logs "timer done" after 4 sec


// 🕓 At ~4 sec:
// timer done


// 🕕 At ~6 sec: download() resolves
// console.log("Downloading completed"); → Output: Downloading completed
// Now `await download(...)` resumes.
// console.log("data downloaded is", downloadedData); → Output: data downloaded is ABCDEF


// 🕡 Step 8: Start writing file
// const fileWritten = await writeFile(downloadedData);
// Inside writeFile():
// console.log("started writing a file with ", data); → Output: started writing a file with  ABCDEF
// Another 5-second setTimeout is set up.


// 🕚 At ~11 sec: writeFile resolves
// console.log("completed writing a data in a file:"); → Output: completed writing a data in a file:
// Then back in steps():
// console.log("file written is ", fileWritten); → Output: file written is  file.txt


// 🕣 Step 9: Start upload
// const uploadResponse = await uploadData(fileWritten, "www.drive.google.com");
// Inside uploadData():
// console.log("started uploading file ", file, "on", url); → Output: started uploading file  file.txt on www.drive.google.com
// Another setTimeout for 2 sec.


// 🕙 At ~13 sec: uploadData resolves
// console.log("upload completed"); → Output: upload completed
// Back in steps():
// console.log("upload respone is ", uploadResponse); → Output: upload respone is  success


// 🏁 Final step — .then() handler
// console.log("we have completed steps with ", value); → Output: we have completed steps with  success


// 🧠 Final Output in order:
/*
starting steps
Starting to download data from  Www.xyz.com
outside
for loop done
timer done
Downloading completed
data downloaded is ABCDEF
started writing a file with  ABCDEF
completed writing a data in a file:
file written is  file.txt
started uploading file  file.txt on www.drive.google.com
upload completed
upload respone is  success
we have completed steps with  success
*/




// --------------------------------------------------------
// 🔽 ORIGINAL CODE BELOW
// --------------------------------------------------------

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

async function steps() {
    console.log("starting steps");

    const downloadedData = await download("Www.xyz.com");
    console.log("data downloaded is", downloadedData);

    const fileWritten = await writeFile(downloadedData);
    console.log("file written is ", fileWritten);

    const uploadResponse = await uploadData(fileWritten, "www.drive.google.com");
    console.log("upload respone is ", uploadResponse);

    return uploadResponse;
}

steps().then((value) => {
    console.log("we have completed steps with ", value);
});

console.log("outside");

for (let i = 0; i < 1000000; i++) {
    // just delay
}

setTimeout(function f() {
    console.log("timer done");
}, 4000);
