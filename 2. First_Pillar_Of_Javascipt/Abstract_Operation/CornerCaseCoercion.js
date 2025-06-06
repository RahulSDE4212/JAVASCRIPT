// ****************   ToString -> "" + value; *********************

    console.log("" + (+0));  // javascript convert +0 to "0".
    console.log("" + (-0)); // javascript convert -0 to "0".
    console.log("" + []); // javascript convert empty array into empty string.
    console.log("" + {}); // javascript convert an object into a string "[object Object]"
    console.log("" + [1,2,3]); 
    // javascript will remove the big bracket and then convert the thing written inside the big bracket into string in case of array.
    // But javascript eradicate null and undefined written in the array.
    console.log("" + [null, undefined]);
    console.log("" + [1,2,3,null,4]);
    console.log("" + [1,2,3,undefined,4]);

// ********************** ToNumber *************************

    console.log(0 - "010"); 
    console.log(0 - "o10");
    console.log(0 - "O10");
    //console.log(0 - 010);   // when you have a number starting with 0, then javascript convert it into octal number.
    console.log(0 - "0xb"); // when a number/string starts with 0x, then javascript consider it a hexadecimal number.
    console.log(0 - 0xb);
    console.log([] - 1); // javascript convert empty array into 0, in case of converting it into a number.
    console.log([""] - 1); // javascript convert empty array with empty string to also zero.
    console.log(["0"] - 1); // convert it to 0.