/*
    **************** ToNumber(argument) abstract operations *********************

    > The abstract operation ToNumber converts argument to a value of type Number.

    > ToNumber conversion of the following types.
        undefined -> NaN
        null      -> +0
        true      -> 1
        false     -> 0
    
    > ToNumber applied to String types.
        --> Javascript tries to convert the string into a valid number based on character by character basis.
        --> If it is not able to convert it to a valid number then it will convert it to NaN.
*/

console.log(10 + undefined);
console.log(10 + null);
console.log(10 + true);
console.log(10 + false);
console.log(1 - "453");
console.log(10 - "2345d");