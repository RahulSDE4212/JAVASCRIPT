function isPalindrome(num){
    let str = "" + num;

    let start = 0;
    let end = str.length - 1;

    while(start <= end){
        if(str[start] == str[end]){
            start++;
            end--;
        }else return false;
    }

    return true;
}

console.log(isPalindrome(1231));