"use strict";

{
    /*
        In Strict mode, if a function is defined inside a block, then it will get block-scoping.
        Whereas in non-strict mode, the function always get the global-scoping or function-scoping.
    */
    function fun(){
        return "123";
    }
    console.log(fun);
}

console.log(fun);