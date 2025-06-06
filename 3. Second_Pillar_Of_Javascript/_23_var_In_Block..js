/*
    -> If i declare var variable inside a block, then it will not be block-scoped, instead
       whatever will be the first enclosing function of the variable, it will get the scope of that function.
*/

function fun(){
    var i = 5;
    while(i < 10){
        var x = i;
        i++;
    }
    console.log(x);
}
fun();