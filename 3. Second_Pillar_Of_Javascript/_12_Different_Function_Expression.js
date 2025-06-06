/* 
    -> when the first valid piece of code on the line where we are declaring a function is keyword "function", 
       then it is called function declaration.
*/
function fun(){ // function declaration.

}

/*
    -> Here we can see that the first valid piece of code is not function, it is a word let.
       Hence, function declaration is not happening.
    -> In that case we say function expression.
*/
let f = function gun(){ // named function expression.

}


let a = function() { // anonymous function expression.

}

/*
    -> Here also, the first valid piece of code is parentheses, hence it is also function expression.
*/
(function x(){ // named function expression.

})

(function(){ // anonymous function expression

})

let y = () => { // function expression

}