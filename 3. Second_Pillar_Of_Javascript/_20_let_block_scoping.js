/*
    -> Any block scoped variable will be accessible only after its declaration.
    -> If i try to access a block-scoped variable pre-declaration, then error will be thrown.
*/

var teacher = "Pulkit"; // teacher -> global scope.

function fun(){ // fun -> global scope.
    console.log(teacher);
    console.log(content);
    var teacher = "pulkit"; //teacher ->  fun scope
    let content = "JS"; // content -> block scope
    if(content == "JS"){
        let hours = "120+"; // hours -> block scope
        console.log(hours);
    }
    console.log(teacher, content);
}

fun();
console.log(teacher);
console.log(content);