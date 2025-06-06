if(false){
    var x = 10;
}
console.log(x);

function fun(){
    console.log(y); // y is accessible here also.
    var y = 20; // not accessible outside.
}

function gun(){
    console.log(z); // not accessible here.
    let z = 23;
}

fun();
gun();