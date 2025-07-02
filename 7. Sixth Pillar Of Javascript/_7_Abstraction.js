/*
    =============================
    🎯 Access Modifiers in JavaScript
    =============================

    🔒 Access Modifiers control what part of a class is accessible **outside** of it.
    
    - JavaScript supports `public` and `private` members. 
    - There is no `protected` keyword in JS (yet), but we can simulate it using conventions.

    👉 Real-Life Analogy:
        Think of a class like a **smartphone**:
        - Some parts you can use directly (like the screen or buttons) — these are **public**.
        - Some parts are internal (like the CPU or battery) — you can't access or modify them directly — these are **private**.

    ✅ In JavaScript:
        - By default, all properties are **public**.
        - To make something private, we use the `#` prefix (introduced in ES2022).

        Example:
        class Example {
            #hiddenValue;   // private
            visibleValue;   // public
        }

        Now `#hiddenValue` cannot be accessed outside the class directly.

    ➕ Why Use Access Modifiers?
        - Encapsulation: hide complexity
        - Data protection: prevent misuse or tampering
        - Maintain clean interfaces (only expose what is needed)

*/

/*
    ========================
    💡 Abstraction in JavaScript
    ========================

    Abstraction means exposing **only the essential details** and hiding the internal logic.

    👉 Real-Life Analogy:
        Consider a **car**:
        - You know how to drive it (steering, accelerator, brakes)
        - But you don’t know or care how the engine processes fuel or how the brakes work internally.

    🔧 In Programming:
        - You only expose methods that are relevant to the outside world.
        - Internal state or helper methods stay hidden.

    ✅ How we achieve abstraction in JavaScript:
        1. Use private variables/methods (`#`)
        2. Provide **public methods** to interact with the object safely (e.g., `setPrice()`, `getPrice()`)

    ➕ Benefits of Abstraction:
        - Reduce complexity for the user
        - Focus on **what** the object does rather than **how** it does it
        - Prevent misuse by hiding irrelevant or dangerous internals
*/


// ========== Implementation ==========

class Product {
    #name; // # matlab private. Dusre language me hum "private name" likhte hai , javascript me "private" ke jagah hum "#" use karte hai.
    #price;
    description;

    constructor(n, p, d){
        this.#name = n;
        this.price = p;
        this.description = d;
    }

    set name(n){
        if(typeof(n) != 'string'){ 
            console.log("invalid name passed", n);
            return;
        }
        this.#name = n;
    }

    setPrice(p){
        if(p < 0) return;
        this.#price = p;
    }

    get name(){
        return this.#name;
    }

    getPrice(){
        return this.#price;
    }

    display() {
        console.log(this.#name, this.price, this.description);
    }
}


const p = new Product("boat airdopes 311", 1200, "noise cancellation buds");
p.name = -1;
console.log(p); // Invalid update will not change the name

p.name = "oneplus buds";
console.log(p.name); // Valid update, logs: oneplus buds
