/*
    ===========================================
    🔎 What is __proto__ in JavaScript?
    ===========================================

    📌 `__proto__` (pronounced as "dunder proto") is a property **present on every object** in JavaScript.
    
    ✅ It points to the object's **prototype** — the object it inherits from.

    ===========================================
    🤝 Relationship:
    ===========================================

        obj.__proto__ === ConstructorFunction.prototype ➜ ✅ True

        This means:
        - If `d = new Product("iPhone")`, then:
          → `d.__proto__` points to `Product.prototype`
          → `d.__proto__.__proto__` points to `Object.prototype`
          → `d.__proto__.__proto__.__proto__` is `null` (end of chain)

    ===========================================
    🧠 Real-life Analogy:
    ===========================================

    Think of a student (object) who has a teacher (prototype), and that teacher has a principal (higher prototype), and so on...

    So:
        d = student
        d.__proto__ = teacher (Product.prototype)
        d.__proto__.__proto__ = principal (Object.prototype)
        d.__proto__.__proto__.__proto__ = null (no one above principal)

    This chain is called the **prototype chain**.

    ===========================================
    ❗ Important Notes:
    ===========================================
    1. `__proto__` is a historical feature (still widely used for learning).
       Modern JavaScript prefers using:
            → `Object.getPrototypeOf(obj)`
            → `Object.setPrototypeOf(obj, prototype)`

    2. It’s different from `.prototype`:
        - `Function.prototype` → Used to define methods for all instances
        - `__proto__` → Exists on objects, points to their prototype

    3. `__proto__` helps with **method lookup**:
        - When you call `d.display()`, JS:
            → Looks in `d`
            → Then in `d.__proto__` (i.e., Product.prototype)
            → Then in `d.__proto__.__proto__` (i.e., Object.prototype)
            → Stops when found or when it reaches `null`

    ===========================================
    🔁 Prototype Chain Flow (Visual)
    ===========================================

        const d = new Product("iPhone");

        d
        └── __proto__ → Product.prototype
              └── __proto__ → Object.prototype
                    └── __proto__ → null

*/

// ========== Code Demo ==========

function Product(n){
    this.name = n;
}
Product.prototype.display = function (){
    console.log("i am in a display funciton");
};

const d = new Product("Iphone");

// Display the prototype of Product.prototype (should be Object.prototype)
console.log(d.__proto__.__proto__);  // This will log Object.prototype
