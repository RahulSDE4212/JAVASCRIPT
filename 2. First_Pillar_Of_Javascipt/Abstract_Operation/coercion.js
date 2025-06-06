// for documentation -> ecma-international.org

/* number conversion
    -> for addition and subtraction operator, if both of its operand is not number, then it convert its operands into a number.
       then do the operation.Basically implicit typecasting is happening here.
       -> javascript convert the null into +0.
       -> javascript convert the undefined into NaN.
*/
console.log(1 + 2);
console.log(1 + null);
console.log(1 + undefined);
console.log();

console.log(2 - 7);
console.log(2 - null);
console.log(2 - undefined);
console.log();


/*  String to number conversion.
    -> Firstly, String will be converted to a valid number. if it cannot be converted to a valid number, then it will return NaN.
*/
console.log(1 - "453"); // 1 - 453 -> - 452
console.log(1 - "456trsf67"); 
console.log(1 - "0xa");