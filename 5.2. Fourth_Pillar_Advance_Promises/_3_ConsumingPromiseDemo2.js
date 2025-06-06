/*
    ************ SetTimeout(function fun(){}, 3000);
    -> It returns unique id
    -> The id is a number  in the chrome browser.
    -> The id is a object in the node.js environment.
*/

function createPromise(){
    return new Promise(function exec(resolve, reject){
        let x = setTimeout(function giveValue(){
            return 2;
        }, 3000);
        if(x % 2 == 0){
            resolve("successful");
        }
        else{
            reject("unsuccessful");
        }
    })
}

const p = createPromise();
console.log(p);
