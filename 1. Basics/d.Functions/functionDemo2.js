function isEvenOrOdd(num){
    if(num % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}


// we have to check the number is even or odd from 1 - 50

for(let i = 1; i <= 50; i++){
    console.log(i, isEvenOrOdd(i));
}