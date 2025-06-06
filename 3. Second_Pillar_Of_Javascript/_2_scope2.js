var teacher = "Rahul";

function fun(){
    var teacher = "Manish";
    content = "software engineer";
    console.log(teacher);
}

function gun(){
    var student = "Pawan";
    console.log(student);
}

console.log(teacher); 
fun();
console.log(content);
gun();
console.log(teacher);

//console.log(content); 
/*
    > after calling fun(), when i accessed content then it did not give the error.

    > before calling fun(), when i tried to access the content, then it gave me the error.
      because autogloballing occurs in the execution phase, not the parsing phase.

    > *************** What is Auto-globalling *****************************
       -> Auto-globalling is the scoping of varible in the execution phase which is not formally declared.
       -> During Auto-globalling, the variable is checked whether the variable is outer scope is present or not.
          If not, it is given that scope.

*/
