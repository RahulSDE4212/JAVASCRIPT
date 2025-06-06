/*
    *********** ToBoolean(argument)
    -> ToBoolean abstract operation considers following value as falsy value.
        undefined, null, NaN, +0, -0, false, ""(empty String).
    
    -> Anything other than these values are true value.
*/
let x = 10;
console.log(!x);

let y = undefined; // undefined is false value.
console.log(!y);

if(y){
    console.log(y, ": It is truthy value");
}
else{
    console.log(y, ": It is falsy value");
}