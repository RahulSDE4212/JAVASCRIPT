/*
    Use Cases of Named Function Expression
        -> it increases the readability.
        -> for recursive cases named function expression is needed.
        -> when we call console.trace() function then it gives us the call-stack of the function which are getting called.
           Now if the function is not named, how will i get to know which function is in the call stack.
*/

function fun(fn){  // fn -> askingAboutFun
    console.log("Welcome to fun");
    fn();
}

fun(function askingAboutFun(){
    console.log("Too much fun!!!");
    console.trace();
})

// output
// Welcome to func
// Too much fun!!!
// AskingAboutFun
// fun