function fun(){
    for(var i = 0; i < 10; i++){
        // some logic
    }
    console.log(i); 
    // I am able to access i outside the for loop also which i don't want. Hence, let instead of var is preferrable.
}
fun();

function process(){
    if(x > y){
        //var temp = x; 
        // This variable has no use outside the if block. But, it is accessible there. Hence let is more preferrable here.

        let temp = x;
        x = y;
        y = temp;
    }
    console.log(y - x);
}

