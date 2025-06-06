function fun(x){
    let i;
    if(x % 2 == 0){
        i = 0;
    }
    else {
        i = 1;
    }
    console.log(i);
}
fun(4);

function gun(x){
    if(x % 2 == 0){
        var i = 0;
    }
    else{
        var i = 1;
    }
    console.log(i);
}
gun(4);

var x = 10;
var x = 12;
// var allows the re-declaration of a variable.
// let doesn't allow the re-declaration of a variable.
// let x = 10;
// let x = 12;