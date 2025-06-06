function isPrime(num){
    for(let i = 2; i <= num - 1; i++){
        if(num % i == 0) return false;
    }
    return true;
}


console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(15));
