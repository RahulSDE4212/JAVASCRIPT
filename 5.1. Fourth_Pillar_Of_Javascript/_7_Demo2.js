function timeConsumingByLoop(){
    console.log("loop starts");
    for(let i = 0; i <= 10000000000; i++){
        // some logic
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature0(){
    console.log("Timer0 starts");
    setTimeout(function exec(){
        console.log("completed the timer0!!!");
        for(let i = 0; i <= 100000000; i++){
            // some logic
        }
    }, 5000); // 5 sec
}

function timeConsumingByRuntimeFeature1(){
    console.log("Timer1 starts");
    setTimeout(function exec(){
        console.log("completed the timer1!!!");
    }, 0);
}

function timeConsumingByRuntimeFeature2(){
    console.log("Timer2 starts");
    setTimeout(function exec(){
        console.log("completed the timer2!!!");
    }, 200);
}


console.log("HI");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("by");


/*
    ****************** Output
    Hi
    loop starts
    loop ends
    Timer0 starts
    Timer1 starts
    Timer2 starts
    Timer3 starts
    loop starts
    loop ends
    by
    completed the timer1!!!
    completed the timer2
    completed the timer0 
*/
/*
    Event Queue
    exec Of Runtime Feature 1
    exec of Rumtime feature 2
    exc of Runtime feature 3
*/