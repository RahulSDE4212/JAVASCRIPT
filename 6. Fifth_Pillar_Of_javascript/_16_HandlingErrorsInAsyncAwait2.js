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
    try{
        console.log("starting steps");
        const downloadedData = await download("Www.xyz.com");
        return downloadedData;
    }
    catch(error){
        console.log("we have handled the error", error);
    }
    finally{
        console.log("ending");
    }
}

steps();