let str = "javascript";

let freqMap = {

}
for(let ch of str){
    if(freqMap[ch]){
        // if character is present, we will increment its count by 1.
        freqMap[ch] += 1;
    }
    else{
        // if not present, we will add the character and its count is 1.
        freqMap[ch] = 1;
    }
}

console.log(freqMap);