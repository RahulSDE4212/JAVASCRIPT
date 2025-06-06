/*
    ************** const variable ******************
    -> It is used to create a block-scoped variable.
    -> It has temporal dead zome i.e. it cannot be accessed before its initialization.
    -> It can never create a global-scoped or function-scoped variable.
*/

const x = 9;
//x = 10; // It will throw the error, as constant cannot be updated.
console.log(x);
const obj = {
    x : 9
};
obj.x = 10; 
// This can be done as we are not updating the const value by assigning it a new object, instead we are updating the object.
console.log(obj);
//obj = {}; // It will throw error as we are assigning new object to const.



function fun(){
    // temporal dead zone exist for the const variable also.
    //console.log(x);
    const x = 12;
    console.log(x);
}
fun();