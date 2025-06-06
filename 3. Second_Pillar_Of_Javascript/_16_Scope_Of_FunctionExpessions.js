/*
    -> Function expression are of two-types.
        1) anonymous function expression.
        2) named function expression.
*/

/*
    -> fun -> f-scoped. It is only accessible via f outside the f-scope.
    -> When we try to access the function with the name of fun outside the scope of f, then we will get error.
    -> The scoping is done here
        f -> global-scoped.
        fun -> f-scoped.
*/
const f = function fun(){
    console.log("itna sare mazeeee!!!!");
    fun();
}

f();
//fun(); // It will give me error, as fun is f-scoped only.
         // fun is defined in the scope of f only i.e. in the scope of f, we can use fun. Outside its scope, we cannot access it.