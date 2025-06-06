/*
    ****************** Higher Order Function ********************
    -> These are functions which take another function as an argument or return another function, then these functions are called
       Higher Order Functions.
*/

function f(x, fn){
    /*
    * x -> variable
    * fn -> function
    */
   console.log(x);
   console.log(fn);
   fn();
}

f(10, function exec(){
    console.log("Hi, I am a function expression passed to a HOF");
})

