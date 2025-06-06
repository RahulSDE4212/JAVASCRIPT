function fun(){ // fun -> global scope
    var x = 10; // x -> fun scope
    function gun(){ // gun -> fun scope
        var y = 20; // y -> gun scope
        console.log(y);// 20
        console.log(x); // 10
    }
    console.log(x); // 10
    //console.log(y); // It will throw error as there is no varible y declared with fun scope or outer scope.
}
fun();
gun();