// Any function that you define using "async" keyword, it automatically becomes a Promise-based function.

async function fun(){
    return 10;
}
const f = fun();
console.log(f);
