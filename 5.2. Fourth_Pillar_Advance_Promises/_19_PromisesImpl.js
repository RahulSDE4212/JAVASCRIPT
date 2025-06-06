// Tasks : (Don't use callbacks only use promises)
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename.
// 3. Write a function to upload the file written in previous step to a new url.


function download(url){
    return new Promise(function exec(resolve, reject){
        console.log("starting to dowload data from", url);
        setTimeout(function download(){
            console.log("downloading completed!!");
            const content = "ABCDEF";
            cb(content);
        }, 4000);
    })
}

function writeFile(data){
    return new Promise(function exec(resolve, reject){
        console.log("started writing a file with ", data);
        setTimeout(function write(data){
            console.log("completed writing the data in a file");
            const newFileName = "file.txt";
            resolve(newFileName);
        }, 5000)
    })
}

function uploadData(file, url){
    return new Promise(function exec(resolve, reject){
        console.log("starting uploading ", file, "on", url);
        setTimeout(function up(){
            console.log("upload completed!!!");
            const response = "success";
            resolve(response);
        }, 2000);
    })
}


download("www.xyz.com")
.then(
    function processDownload(value){
        console.log("downloading done with the following value", value);
        return writeFile;
    }
)
.then(
    function processWrite(value){
        console.log("data written in the file", value);
        return uploadData(value, "www.abc.com");
    }
)
.then(
    function processUpload(value){
        console.log("we have uploaded with", value);
    }
)