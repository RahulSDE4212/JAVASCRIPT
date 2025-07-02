/*
    =========================
    📘 JavaScript Prototype Deep Explanation
    =========================

    🔧 In JavaScript, everything is either:
        - a **primitive** (like number, string, boolean), OR
        - an **object** (functions, arrays, custom objects, etc.)

    📌 Now here’s the key:
        ➤ Every JavaScript **function** automatically gets a special object attached to it called **prototype**.

    🔑 prototype is just a normal object. It's used for **sharing methods** across all instances of that function.

    ================================
    🧠 Real-life Analogy (Prototype Chain):
    ================================

    Suppose you are creating a **factory** (function) to manufacture smartphones.
    - Every smartphone (object) should have the ability to **make a call**, but you don’t want to copy the same method inside each smartphone manually.

    ✅ So instead:
        - You attach `makeCall()` method to the prototype of the `Smartphone` factory.
        - Now all phones can access it *indirectly* via the prototype chain.

    ==================================================================
    ✅ In code terms:
    ==================================================================

        function Smartphone(name) {
            this.name = name;
        }

        Smartphone.prototype.makeCall = function() {
            console.log("Calling from", this.name);
        };

        let phone1 = new Smartphone("iPhone");
        phone1.makeCall(); // Works via prototype chain

    ==================================================================
    🔄 Prototype Chain:
    ==================================================================

    - When you do `phone1.makeCall()`:
        → JS checks if `makeCall` exists directly on `phone1`
        → If not found, it checks `phone1.__proto__` → which is `Smartphone.prototype`
        → If still not found, it goes to `Object.prototype`
        → If not found even there, then `undefined`

    This chain is called the **prototype chain**.

    ==================================================================
    🧩 constructor property:
    ==================================================================

    - `Smartphone.prototype.constructor === Smartphone` is true.
    - This means the prototype object "remembers" which function created it.

    ==================================================================
    🔍 Important Points:
    ==================================================================
    1. Functions in JS act like classes in other languages (function constructors).
    2. prototype is not the same as __proto__, but they are connected:
       - Every object has a hidden property `__proto__` that points to the constructor’s `.prototype`.
       - So, `obj.__proto__ === Constructor.prototype`

    3. You can add methods to prototype and save memory:
       - Instead of putting methods inside the constructor (which would create a copy for every object), attach them to `.prototype`.

    4. Built-in Objects like Array, Object, Function also use prototypes.
       - You can even add your own methods to `Object.prototype` (though **not recommended** in production code).

*/


// =====================
// 🚀 Demonstration Code
// =====================

function Product(n) {
    this.name = n;
}

// Add method to Product's prototype
Product.prototype.display = function() {
    console.log("Product name:", this.name);
};

// Add method to Object.prototype (every object inherits from this)
Object.prototype.eat = function() {
    console.log("I am eating");
};

let d = new Product("iPhone");

d.display();  // Looks into Product.prototype
d.eat();      // Falls back to Object.prototype via prototype chain

// 🔍 Shows the constructor function that created `d`
console.log(d.constructor);  // function Product(n) { ... }
