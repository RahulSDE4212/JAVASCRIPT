let x = -0;
console.log(x === 0);
console.log(x === -0);

console.log(Object.is(x, 0));
console.log(Object.is(x, -0));

console.log(Math.sign(-3));
console.log(Math.sign(3));

console.log(Math.sign(-0));
console.log(Math.sign(0));

console.log(0 * -1);
console.log(-0 * -1);

function signOfNumber(x){
    if(x * -1 == -0) return "positive";
    else if(x * -1 >= 0) return "negative";
    else return "positive";
}

console.log(signOfNumber(-0));
console.log(signOfNumber(0));