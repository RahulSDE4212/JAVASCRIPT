//   -> in javascript this always refer to the calling site/context except one case.
let iphone = {
    name : "iphone 13 pro",
    price : 1000000,
    description : "The new apple iphone 13 pro",
    rating : 4.8,

    display : () => {
        console.log(this);
    }
}

let macbook = {
    name : "MackBook M2",
    price : 125000,
    description : "The new apple macbook m2",
    rating : 4.9,

    display : function (){
        console.log(this);
    }
}

//console.log(iphone, macbook);
macbook.display();
iphone.display();


/*
======== 🧠 DRY RUN (LINE BY LINE EXECUTION) ========

1️⃣ Line: let iphone = { ... }
   ✅ A new object `iphone` is created with properties:
      - name
      - price
      - description
      - rating
      - display (arrow function)

2️⃣ Line: let macbook = { ... }
   ✅ A new object `macbook` is created with similar properties,
      but the `display` method is a regular function

3️⃣ Line: macbook.display();
   ✅ Call stack: [GEC, macbook.display]
   ✅ Since `display` is a REGULAR FUNCTION,
      → Inside regular functions, `this` refers to the **calling object**
      → Here, `macbook.display()` => this = `macbook`

   🔹 Output:
   {
     name: 'MackBook M2',
     price: 125000,
     description: 'The new apple macbook m2',
     rating: 4.9,
     display: [Function: display]
   }

   ✅ After execution, macbook.display is popped off the call stack.

4️⃣ Line: iphone.display();
   ✅ Call stack: [GEC, iphone.display]
   ✅ But wait — `display` here is an ARROW FUNCTION
      → Arrow functions do NOT have their own `this`
      → They lexically inherit `this` from their surrounding scope.
      → Surrounding scope is the global scope (`window` in browser / `global` in Node.js)

   🔹 Output:
   → In Browser: `window` object is logged
   → In Node.js: `{}` (empty object or module context)

   ✅ After execution, iphone.display is popped off the call stack.

======== 📌 KEY TAKEAWAY ABOUT `this` ========

🔸 Arrow Function (`iphone.display`) ❌ doesn't bind `this`
   → `this` refers to the surrounding lexical scope (global)

🔸 Regular Function (`macbook.display`) ✅ binds `this`
   → `this` refers to the object on which the function was called

======== ✅ FINAL OUTPUT (Browser Console) ========
macbook.display():
👉 Logs the macbook object itself

iphone.display():
👉 Logs the global object (window in browser / {} in Node.js)

*/






/*
============================== 📘 JavaScript `this` Keyword — Full Explanation ==============================

🔹 `this` is a special keyword in JavaScript which refers to the **execution context** — i.e., 
    ➤ Who is calling the function?
    ➤ What object is "responsible" for running the current code?

------------------------------------------------------------------------------------
🧠 Rule #1 — Regular Functions (non-arrow)
------------------------------------------------------------------------------------
In a **regular function**, the value of `this` is determined by the **caller** (object before the dot `.`)

Example:
const obj = {
    name: "Rahul",
    greet: function () {
        console.log(this.name);  // here, `this` refers to obj
    }
};

obj.greet();  // Output: Rahul

✳️ NOTE: If a regular function is called in the global scope (not as a method), `this` becomes:
    - `window` in browsers
    - `undefined` in strict mode (or module scope in Node.js)

------------------------------------------------------------------------------------
🧠 Rule #2 — Arrow Functions
------------------------------------------------------------------------------------
Arrow functions DO NOT have their own `this`.  
Instead, they **lexically inherit** `this` from the **surrounding (parent) scope**.

Example:
const obj = {
    name: "Rahul",
    greet: () => {
        console.log(this.name);  // ❌ this is not 'obj', it's inherited from the global scope
    }
};

obj.greet();  // Output: undefined (in strict mode), or window.name (in browser)

✔️ Use arrow functions when you want to **retain `this` from the outer scope**, e.g., inside `setTimeout`, array callbacks, etc.

*/

