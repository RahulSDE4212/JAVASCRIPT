/*
    -> Arrays are custom objects in javascript.
    -> Index in the array is the key and the element is the value.
    -> For ex:
        ["abc", "def", "ghi", "jkl"] -> {0: "abc", 1: "def", 2: "ghi", 3: "jkl"};
    -> There are many functions that the array has.
*/

/*
    ***************** Functions Available with Arrays.
    1) Map function.
        -> Map is a higher order function which is available with arrays.
        -> It takes a function as an argument -> f()
        -> It returns an array in which every value is actually populated by calling function f with original array element
           as argument.
        -> Every element in the original array is passed one by one as an argument in the function f.
        -> Whatever is the output of each individual element, we populate that output in a new array.
        -> So basically, Map internally loops/iterate each element in the original array, pass the element as an argument
           to the function and store the returned value in the new array.

    
    ------------- When to use Maps ----------
        -> In any situation, if we have to do an operation on every element of an array and store the result of each
           operation. Map can be good option.
*/

const arr = [1,2,3,4,5];
console.log(arr);

function square(ele){
    return ele*ele;
}
// const squareResult = arr.map(square());
/*
    -> When we put () after function name, then we are calling the function.
    -> In an argument we cannot put () after function name because we do not want to call the function.
       We just need to send the function as an argument. 
*/
const squareResult = arr.map(square); // square is a function passed as an argument.
console.log(squareResult);


function cube(x){
    return x*x*x;
}
const cubeResult = arr.map(cube);
console.log(cubeResult);


function isEvenOrOdd(x){
    if(x % 2 == 0) return "Even";
    else return "Odd";
}
const evenOdd = arr.map(isEvenOrOdd);
console.log(evenOdd);


const newArr = [1,2,3,4,5];
/*
    -> When the function that we are passing as an argument to the arr.map() function excepts 2 arguments,
       then the element of the array will be passed as the first arguemnt and the index of the element 
       as the second argument.
*/
function print(element, idx){
    return `element at index ${idx} is ${element}`;
}

/*
    * Here map is looping over every element and passing element, index to the function print.
*/
const result2 = newArr.map(print);
console.log(result2);

// Creating my own Map function 
function customMapper(arr, func){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(func(arr[i], i));
    }
    return result;
}
const value = customMapper(newArr, print);
console.log(value);











/*
    ***************** Functions Available with Arrays.
    2) sort function.
        -> It is  an higer order function.
        -> In other language like java, sort() function of array sort the element of the array in increasing order.
        -> But in javascript, default implementation of arr.sort() function is going to sort the array in lexicographical order.
           Lexicographical order means dictionary order.
        -> sort() function of array in js takes comparator function as an arguemnt.
           arr.sort(function (a, b){
                return a - b;
           })
                -> if a < b -> a - b is negative -> the comparator function will give negative.
                   When the cmp function gives negative, then the sort() function place a before b in the array.
                -> if a > b -> a - b is positive -> the comparator function will give positive.
                   When the cmp function gives positive, then the sort() function place a after b in the array.

*/

let num = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3]; // unsorted array
console.log(num); 
/* 
    * it will sort the array . The expectation was that it will sort the array in increasing order.
    * The default implementation of arr.sort() sort the array in lexicographical order.
*/
num.sort();
console.log(num);

let num2 = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];
// sort num2 in increasing order.

// The sort function takes the comparator function as an arguement.
num2.sort(function (a,b){
    // if a < b -> a - b is negative -> if comparator function gives negative then a will be placed before b.
    // if a > b -> a - b is positive -> if comparator function gives positive then a will be placed after b.
    return a - b;
})// sort() function of the array is HOF, it takes comparator function as an argument.

console.log(num2);
