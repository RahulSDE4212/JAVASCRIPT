function display(n , p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
}

const p = new display("Rahul", 100000, "Iphone 13 pro");
console.log(p);

/*
========================= 🧠 DETAILED DRY RUN =========================

1️⃣ Line: function display(n, p, d) {...}
   🔹 JS creates a function object named `display`
   🔹 This function is intended to be used as a **constructor** (called with `new`)

-----------------------------------------------------------------------

2️⃣ Line: const p = new display("Rahul", 100000, "Iphone 13 pro");

🛠 What happens when `new` is used?

👉 JavaScript performs the following steps behind the scenes:

   Step 1: Creates an empty object → `let obj = {}`
   Step 2: Sets the internal prototype: `obj.__proto__ = display.prototype`
   Step 3: Calls the function: `display.call(obj, "Rahul", 100000, "Iphone 13 pro")`
   Step 4: Inside function body:
           - `this` is bound to `obj`
           - this.name = "Rahul"
           - this.price = 100000
           - this.description = "Iphone 13 pro"
   Step 5: Since function does NOT return anything → JS returns `this` (i.e., the object created in Step 1)

✅ Final value of `p` is:
{
  name: "Rahul",
  price: 100000,
  description: "Iphone 13 pro"
}

-----------------------------------------------------------------------

3️⃣ Line: console.log(p);

➡ Output:
{
  name: "Rahul",
  price: 100000,
  description: "Iphone 13 pro"
}

✅ No error — because constructor function returned `this` by default.

========================= 📌 KEY CONCEPTS =========================

🔹 Any regular function can act as a constructor if used with `new`
🔹 `this` inside the function refers to the new object being constructed
🔹 `new` ensures:
    - An empty object is created
    - Function is called with `this` = that object
    - Object is returned unless function returns another object explicitly

🔹 `display.prototype` can be used to attach shared methods:
    ➤ e.g., display.prototype.show = function() { console.log(this.name); }

🔹 This is the old way (pre-ES6) of creating class-like structures

========================= ✅ FINAL OUTPUT =========================

console.log(p);

{
  name: 'Rahul',
  price: 100000,
  description: 'Iphone 13 pro'
}

*/
