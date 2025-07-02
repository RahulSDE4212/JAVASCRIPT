/*
    ********** Various Data types in javascript.
    1) Number. 
    2) String.
    3) Boolean.
    4) Undefined.
    5) Objects.
    6) Null
*/


/* ********************** Number Data Type ********************** */
console.log(typeof 2);
console.log(2); // positive number.
console.log(-4); // negative number.
console.log(-Infinity);
console.log(+Infinity);
console.log(+0);
console.log(-0);
console.log();

/* ********************** String Data Type ********************** */
console.log(typeof "rahul");
let name = "Rahul";
console.log(name);
console.log(name[0]);
console.log();

/* ********************** Boolean Data Type ********************** */
console.log(typeof true);
let bool = true;
console.log(true);
console.log(false);
console.log();

/* ********************** Undefined Data Type ********************** */
console.log(typeof undefined);
let a;
console.log(a);
console.log();

/* ****************** Object Data Type **************************/
var user = {
    name : "Rahul",
    age : 21,
    salary : 120000,
    home : "Bihar",
    Designation : "Front-End Developer"
}
console.log("The details of rahul is : ", user);
console.log();

/* ***************** Null Data Type ******************************* */
var b = null;
console.log(null);
console.log();
