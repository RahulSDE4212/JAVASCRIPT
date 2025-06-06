/*
    -> IIFE
        I -> Immediately
        I -> Invoked
        F -> function 
        E -> Expression.

    -> IIFE is a function expression, which we can immediately invoke it at the time of declaring it.
*/


/*
    Use case of IIFE
        -> whenever we have naming collision of function, then IIFE is preferrable instead of 
           creating another function with diff name.
*/

function fun(){
    console.log("rahul");
} 


(function fun(y){
    console.log("hi", y);
    console.log("you are using immediately invoked function expression.");
})("Rahul");


fun();


function f(){
    return 1;
}

function g(){
    return 2;
}

var i = 10;
var res = (function evaluate(i) {
    if(i % 2 == 0) return g();
    else return f();
})(i);
console.log(res);


/* ************ Output *******************
    hi rahul
    you are using immeditaely invoked function expression
    rahul
    2


*/