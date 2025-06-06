/*
    ***************** Functions Available with Arrays.
    ** filter function.
        -> filter is a Higher Order Function.
        -> filter also loops over the array element.
        -> there is a special thing about filter i.e. the argument function f which we have to pass inside
           the filter function should always return a boolean, otherwise output will be converted to a boolean.
        -> filter function loops over the every element of the array, passes the element into the argument function.
           If the output of this function call is true, then it store the original element in the new array otherwise
           doesn't store the element in the array.
*/

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function oddOrEven(x){
    return x % 2 == 0; // returning a boolean.
    //return "abc"; // "abc" will be converted to boolean.
}

let result = num1.filter(oddOrEven);
console.log(result);