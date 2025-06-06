console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number(0xa));

let x = NaN;
console.log(x == NaN); // NaN is never equal to each-other.
console.log(isNaN(x));
console.log(isNaN("Rahul")); // isNaN() method convert the incoming input to a number and checks whether the number is NaN or not.
console.log(Number.isNaN("rahul")); // here isNan() methods checks whether the input is a number or not. If not return false
/*
    -> isNaN(input) does the type conversion. It convert the incoming input to a number.
    -> Number.isNaN(input) method does not do the type conversion. It checks if the input is a number, return true else return false.
*/