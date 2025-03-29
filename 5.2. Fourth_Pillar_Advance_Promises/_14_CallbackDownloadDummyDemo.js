function download(url, cb){
    console.log("Started downloading from url", url);
    setTimeout(function exec(){
        console.log("Completed Downloading after 5 sec");
        const content = "ABCDEF";
        cb(content);
        cb(content);
    }, 5000);
};

download("www.xyz.com", function processDownload(data) {
    console.log("downloaded data is ", data);
});

//started downloading from www.xyz.com
//Completed Downloading after 5s
//downloaded data is ABCDEF
