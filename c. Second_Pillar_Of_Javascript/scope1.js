console.log(teacher); 
/* since teacher variable is already got the memory in parsing phase. Hence while execution it will show 
   undefined because it has not been initialized yet. It is initialized in execution phase.*/
var teacher = "Rahul";

function fun(){
    var teacher = "Manish";
    content = "Js";
    console.log(teacher);
}

function gun(){
    var student = "Pawan";
    console.log(student);
}

//console.log(content);
fun();
gun();
console.log(teacher);
console.log(content);
