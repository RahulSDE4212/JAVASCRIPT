/*
    ************ Addition Operator ********************

    -> The addition operator either performs string concatenation or numeric addition.

    -> Addition Operator tries to convert both of its operand into ToPrimitive(val).

    -> if operand is an Object, then it calls toPrimitive(operand) and tries to convert the operand into primitive value.

    -> If any of the operand is String, then it convert both operands into string and return the string concatenation of them.
 */
console.log(10 + 5);
console.log(10 + "5");
console.log("10" + "5");

let obj = {
    toString(){
        return "99";
    }
};
console.log(10 + obj);
