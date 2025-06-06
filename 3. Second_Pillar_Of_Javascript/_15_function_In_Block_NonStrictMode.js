/*
    -> In normal mode, the function always get global-scope or function-scoped. no matter where the function is defined.
    -> WhereAs, in strict-mode, the function in block will get the block scope and hence it will be not 
       accessible outside the block.
*/
{
    function fun(){
        return "123";
    }
}
console.log(fun);