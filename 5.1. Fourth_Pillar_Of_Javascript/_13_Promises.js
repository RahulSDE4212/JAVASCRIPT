/*
    *************** PROMISES ******************
    * Readibility Enhancers.
    * They can solve the problem of "Inversion of Control".
    * In javascript, Promises are special type of objects that get returned immediately when we call them.
    *  Promise object has following properties:
        1) state property -> Default value: Pending
        2) value property -> Default value: undefined
    * Promises also act as a placeholder for the data that we may get back sometime in future.
      For example : 
            x = fetch("http://www.xyz.com");
                -> here, fetch is a runtime property, so java will tell the runtime environment that please complete the fetch task and 
                   return me the result.
                -> Assume fetch() is written using promises then it will immediately returns a promise object which will 
                   act as a placeholder for the result that i expect.
    * In these promises objects we can attach the functionality we want to execute once the future task is done.
      Once the future task is done then promises will automatically execute the attached functionality.
*/


/*
    **************** Detailed Information About Promises *************
    * In order to understand promises very well, we need to understand two things
      1) How we can create a promise.
      2) How we can consume a promise.
*/


/*
    *********** HOW TO CREATE A PROMISE ****************
    * Promises are native to javascript.
    * Creation of Promise object is synchronous in nature.
    * Three States of Promises. Actually, the state is a property of promise object which can have three values.
        1) Pending
            -> When we create a new promise object, this is the default state.
            -> It represents work in progress.
            -> the state property of promise object can migrate from pending to either fulfilled or rejected.

        2) Fulfilled
            -> When the operation is successfully completed, then the state property of promise object will migrate from 
               pending to fulfilled.

        3) Rejected
            -> When the operation is not successfully completed, then the state property of promise object will migrate from 
               pending to rejected.

    * Syntax of a promise object.
            -> new Promise(fn) 
                -- here the promise() constructor expects a callback function fn.
                -- callback function fn() is also known as executer function.
*/


/*
    *************** CREATING A PROMISE ****************
    * new Promise(function (resolve, reject) {
            // inside this function we can write our time consuming task.
      })
    * Here the callback function has two parameters "resolve" and "reject".
    * "resolve" and "rejects" are functions only.
    * Whenever in the implementation of executor/ callback 
        -- you call the "resolve" function, the "promise" goes to a "fullfilled" state.
        -- if you call a "reject" function, it will goes to a "rejected" state.
        -- if you call nothing, then "promise" remains in "pending" state.

    * The "value" property of "promise" object will remain undefined if the "state" property if "pending"
    * with whatever argument we call resolve or reject with, the "value" property gets assigned with the same argument.
*/




function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
function createPromiseWithLoop(){
    return new Promise(function executor(resolve, reject) {
        for(let i = 0; i < 1000000000; i++){};
        let num = getRandomInt(10);
        if(num % 2 == 0){
            // if the random number is even then the promise is fullfilled.
            resolve(num);
            console.log("fulfilling");
            // even if you call resolve function again and again, it is the first call of resolve() function which 
            // will change the state and value of "promise" object.
            resolve(10);
            return num;
        }
        else{
            // if the random number is even then the promise is rejected.
            reject(num);
            console.log("rejecting");
            // even if you call "reject" function again and again, it is the first call of "reject"() function which 
            // will change the state and value of "promise" object.
            reject(10);
            return num;
        }
    });
};

let x = createPromiseWithLoop();
console.log(x);
