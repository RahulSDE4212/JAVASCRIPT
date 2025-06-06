let name = "Rahul";
/*
    -> This name variable is a global-scoped variable because it has been implemented outside any function and block.
       Hence this variable can be accessible within the entire file.
*/
function fun(){
    console.log(name);
}
fun();
console.log(name);