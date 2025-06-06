function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function dnf(arr){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        if(arr[start] == 0) start++;
        else{
            swap(arr, start, end);
            end--;
        }
    }
}

let arr = [1,1,1,0,0,0,1,1,1,1,0,1,0,1];
console.log("before dnf: ", arr);
dnf(arr);
console.log("after dnf: ", arr);
