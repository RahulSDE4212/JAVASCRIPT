let obj1 = {};
console.log(typeof obj1.toString()); // It return the string "[object Object]".
console.log(typeof obj1.valueOf()); // It return the same object.
console.log();


let obj2 = {
    toString() {
        /* It is a method in javascipt object. It by defualt gives you the output -> "[object Object]" -> This is a string.
         but you can override it, if you want this method to return something else.For ex. return "my name is rahul";
        */
       return "my name is rahul";
    },
    valueOf() {
        // It is a method in javascript object. It by default return you the same object.
        // but you can override it, if you want this method to return something else.
        return 10;
    },
    x: 10
}
console.log(obj2.toString());
console.log(obj2.valueOf());
console.log();

/*
    ******************** Subtract operator *******************
    -> Subtract operator will try to convert the both of its operand into a number, if it is not a number.
    -> since in the above example, first operand is 10 -> which is a number. 
                                   Second operand is obj3 -> this is not a number. It will be converted into a number.
*/
let obj3 = {};
console.log(10 - obj3);
let obj4 = {
    x: 10, 
    y: 20
};
console.log(100 - obj4);
let obj5 = {
    x: 10,
    valueOf(){
        return 99;
    }
}
console.log(100 - obj5);
let obj6 = {
    x: 10,
    toString(){
        return "88";
    }
}
console.log(90 - obj6);

let obj7 = {
    x: 10, 
    toString(){
        return {};
    }
}
console.log(100 - obj7);