/*
    ***************** Functions Available with Arrays.
    ** reduce function.
        -> reduce is a Higher Order Function.
        -> Reduce takes function f as an argument.
        -> What Reduce does is it goes one by one to every element of the array
           For example, let's say current element is arr[0], Reduce will pass this element to the function f
           and accumulate the result of further function calls to this result.
*/

const arr = [1,2,3,4,5,6];
function sum(prevResult, currValue){
    console.log(prevResult, currValue);
    return currValue + prevResult;
}

/*
    -> Reduce function starts doing its job from the element at the 1st index of the array, not from 0th index.
*/
const result = arr.reduce(sum);
console.log(result);

/*
    [iphone{price = 100000, name = "Ipnone"}, case{price = 500 , name = "backcover"}, 
      tempered glass {price = 300, name = "tempered glass"};
*/

function addPrices(prevResult, currValue){
    console.log(prevResult, currValue);
    let newPrice =  prevResult.price + currValue.price;
    return {price : newPrice};
}
let cart = [{price : 100000, name : "Ipnone"},{price : 500, name : "backcover"}, {price : 300, name : "tempered glass"}];
const totalPrices = cart.reduce(addPrices);
console.log(totalPrices.price);