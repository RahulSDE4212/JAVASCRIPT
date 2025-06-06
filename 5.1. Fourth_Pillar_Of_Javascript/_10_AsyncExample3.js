console.log("start");

for(let i = 0; i < 3; i++){
    setTimeout(function exec(){
        console.log("timer");
    }, 10);
}

for(let i = 0; i < 10000000000; i++){
    // some logic
}
console.log("end");
/*
    Start
    End
    timer
    timer
    timer
*/
/*
    exec()
    exec()
    exec()
*/