console.log(teacher); 
/* since teacher variable is already got the memory in parsing phase. Hence while execution it will show 
   undefined because it has not been initialized yet. It is initialized in execution phase.*/

var teacher = "Rahul";  // teacher -> global-scoped.

function fun(){ // fun -> global-scoped.
    var teacher = "Manish"; // teacher -> fun-scoped
    content = "Js";
    console.log(teacher);
}

function gun(){ // gun -> global-scoped.
    var student = "Pawan"; // student -> gun-scoped.
    console.log(student);
}

//console.log(content);
fun();
gun();
console.log(teacher);
console.log(content);
