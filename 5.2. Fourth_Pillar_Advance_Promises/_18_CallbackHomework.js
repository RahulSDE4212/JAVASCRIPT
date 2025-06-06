// Tasks : (Don't use promises only use callbacks)
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename.
// 3. Write a function to upload the file written in previous step to a new url.

function download(url, cb){
    // downloads content from the given url and passed the downlaoded content to the given callback cb.
    console.log("starting to dowload data from", url);
    setTimeout(function download(){
        console.log("downloading completed!!");
        const content = "ABCDEF";
        cb(content);
    }, 4000);
}


function writeFile(data, cb){
    // write the given data into a new file.
    console.log("started writing a file with ", data);
    setTimeout(function write(data){
        console.log("completed writing the data in a file");
        const newFileName = "file.txt";
        cb(newFileName);
    }, 5000)
}


function upload(url, file, cb){
    // uploads the given data from a file to a given url.
    console.log("starting uploading ", file, "on", url);
    setTimeout(function up(){
        console.log("upload completed!!!");
        const response = "success";
        cb(response);
    }, 2000);
}


download("www.xyz.com", function processDownload(content){
    console.log("we are now going to process the downloaded data");
    writeFile(content, function processWrite(filename){
        console.log("we have downloaded and written the file, now will upload");
        upload("www.upload.com", filename, function processUpload(response){
            console.log("we have uploaded with", response);
        })
    })
})
