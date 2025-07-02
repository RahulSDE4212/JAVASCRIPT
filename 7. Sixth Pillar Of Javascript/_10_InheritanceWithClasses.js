/*
    ================================
    🔗 Inheritance in JavaScript (ES6+ using `class`)
    ================================

    ✅ Inheritance is a way to **create a new class from an existing class**, reusing code and building on top of existing functionality.

    ➕ Why Use Inheritance?
        - To avoid code duplication (DRY principle)
        - To promote reusability
        - To model real-world relationships like "is-a"

    ================================
    🧠 Real-Life Analogy:
    ================================
    - Think of a **Product** as a specific item (like "iPhone").
    - A **Category** is a broader group ("Electronics" or "Phones").
    - Product *is-a* Category (iPhone is a kind of product which belongs to a category).

    🔧 In code:
        - `Product` class **extends** `Category` class.
        - That means `Product` inherits all the properties and methods of `Category`.

    ================================
    🛠️ Technical Terms:
    ================================
    1. `extends`: Used to declare that one class inherits from another.
    2. `super()`: Used to call the parent class's constructor.
       - Must be called **before** using `this` in the child constructor.

    ================================
    🔍 Execution Flow in Inheritance:
    ================================

        const d = new Product("mobilesname", "Iphone");

        Step-by-step:
        1. JavaScript sees `new Product(...)` → triggers `Product` constructor
        2. `super(c)` is called → goes to `Category` constructor and sets `categoryName`
        3. Then sets `name` inside `Product`
        4. Final object has:
           - d.name = "mobilesname"
           - d.categoryName = "Iphone"

    ================================
    🧬 Prototype Chain in Class Inheritance:
    ================================

        d
        └── __proto__ → Product.prototype
              └── __proto__ → Category.prototype
                    └── __proto__ → Object.prototype
                          └── __proto__ → null

    This means:
    - If `d` doesn't have a method, JS will look in `Product.prototype`, then `Category.prototype`, then `Object.prototype`.

*/

class Category {
    constructor(c) {
        this.categoryName = c;
    }
}

class Product extends Category {
    constructor(n , c){
        super(c); // Calls the constructor of Category
        this.name = n;
    }
}

// Creating an object of Product class
const d = new Product("mobilesname", "Iphone");

console.log(d); 
/*
    Output:
    Product {
        categoryName: 'Iphone',
        name: 'mobilesname'
    }
*/
