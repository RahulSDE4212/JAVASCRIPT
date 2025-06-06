let x = 12;
let y = 13;
let z = 14;


function isEvenOrOdd(num){
    if(num % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(x, isEvenOrOdd(x));
console.log(y, isEvenOrOdd(y));
console.log(z, isEvenOrOdd(z));