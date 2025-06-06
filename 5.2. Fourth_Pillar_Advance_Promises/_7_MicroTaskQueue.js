/*
    ╔══════════════════════════════════════════════╗
    ║           🚀 MICROTASK QUEUE 🚀              ║
    ╚══════════════════════════════════════════════╝

    🔹 When a promise is resolved or rejected, the functions/handlers in 
      the "onfulfillment" or "onrejection" array are **not executed immediately**.

    🔹 When the state of a promise object changes, these handlers **move** 
      into the **Microtask Queue**.

    🔹 These handlers **wait** for a green signal from the **Event Loop**. 
      The signal is given when the **Call Stack** and **Global Code** are empty.

    🔹 Once the Event Loop gives the **green signal**, the handlers stored 
      in the Microtask Queue are **executed one by one**.

    🔹 If the Event Loop has two options:
        ✅ Functions inside the **Event Queue** (Callback Queue)
        ✅ Functions inside the **Microtask Queue**

      👉 **Which one gets priority?**
         🔥 The **Microtask Queue** is **always** prioritized over the Callback Queue.
         🔥 At any point, if the Event Loop can choose between the **Microtask Queue** 
            and the **Callback Queue (Macrotask Queue)**, it will **always prefer** 
            the **Microtask Queue**.
*/

/*
    ╔══════════════════════════════════════════════════╗
    ║         🔥 PRIORITY ORDER IN EVENT LOOP 🔥       ║
    ╚══════════════════════════════════════════════════╝

    📌 **Execution Flow**:  
       🏆 Call Stack / Global Code  
       ⬇️ Microtask Queue  
       ⬇️ Callback Queue / Macrotask Queue
*/



function createPromise(){
    return new Promise(function exec(resolve, reject){
        console.log("Resolving the promise!!!");
        resolve("Done");
    });
}

setTimeout(function process(){
    console.log("Timer completed!!!");
}, 0);

let p = createPromise();
p.then(
    function fullfillmentHandler(value){
        console.log("We fullfilled1 with a value", value);
    }, 
    function rejectionHander(value){}
)
p.then(
    function fullfillmentHandler(value){
        console.log("We fullfilled2 with a value", value);
    }, 
    function rejectionHander(value){}
)
p.then(
    function fullfillmentHandler(value){
        console.log("We fullfilled3 with a value", value);
    }, 
    function rejectionHander(value){}
)

console.log("Ending");
