var x = 10;
var y = 2;

// *************************** Arithmetic Operator ****************************
console.log(x + y); //Addition operator
console.log(x - y); //Subtraction Operator
console.log(x * y); //Muliplication Operator
console.log(x / y); //Division Operator
console.log(x % y); //Modulus Operator
console.log(y**3);  //exponent operator.

// *********************** Assignment Operator ************************
var a = 10;
console.log(a) // 10
a += 2;
console.log(a) // 12
a -= 2;
console.log(a) // 10
a *= 2;
console.log(a) // 20
a /= 2;
console.log(a) // 10
a %= 2;
console.log(a) // 0
a = 2;
a **= 2;
console.log(a) // 4

// ************************* Relational  Operator *******************************
console.log(2 > 10);
console.log(2 >= 10);
console.log(3 < 10);

/*  *********************** Logical Operator *******************************************/
console.log(true && true);
console.log(false && 9);
console.log(16 && 9);
/* 
Coercion: (Type Casting)
    > In javascript, while using logical operator, if its operand is not a expression which returns boolean value.
      Then, the javascript converts the expression into boolean value. This process is called coercion(type-casting).
    > The value which is falsy value: null, undefined, +0, -0, NaN, empty String.

Short-circuiting:
    > first exp && second exp.
        > &&(And) operator just check the first exp, if first exp is false, it immediately return the first value without checking 
          the second one. If first operator is true, it return the second value. This process is called short-ciruiting.
    
    > first exp || second exp.
        > ||(Or) operator checks the first exp, if it is true, it immediately return the first exp without checking the second exp.
          If it is false, it return the second exp. This process is called short-ciruiting.
*/


/*  *********************** Bitwise Operator ****************************************** 
> Bitwise operator perform the corresponding operation bit by bit on the given operand.
> These are the following bitwise operator.
  1) &(bitwise And)
  2) |(bitwise Or)
  3) ^(bitwise Xor)
  4) ~(bitwise Not)
*/

console.log(5 & 7);
