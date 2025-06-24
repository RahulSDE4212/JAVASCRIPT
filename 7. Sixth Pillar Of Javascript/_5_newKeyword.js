class Product {
    name;
    price;
    description;

    constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;
        //return "10";
        //return {};
    }

    display() {
        console.log(10);
    }
}

const p = new Product("boats", 100000, "earbuds with noise cancellation");
console.log(p);

/*
========================= 🧠 DETAILED DRY RUN =========================

1️⃣ Line: class Product {...}
   🔹 JS engine hoists the class declaration
   🔹 Internally, it creates:
       - Constructor function
       - Product.prototype.display → method added to class prototype

-----------------------------------------------------------------------

2️⃣ Line: const p = new Product("boats", 100000, "earbuds with noise cancellation");

🔸 `new` keyword triggers the following steps:

    Step 1: JS creates an empty object → let obj = {}
    Step 2: obj.__proto__ is set to Product.prototype
    Step 3: Constructor is called: constructor("boats", 100000, "...")
            → Inside constructor:
                this = obj
                this.name = "boats"
                this.price = 100000
                this.description = "earbuds with noise cancellation"
            → No return statement present
            → So default behavior: constructor returns `this`

    ✅ Final result: `p` refers to the object with all assigned properties

-----------------------------------------------------------------------

3️⃣ Line: console.log(p);

    🔸 Prints the object created via `new`:
    ➤ {
        name: 'boats',
        price: 100000,
        description: 'earbuds with noise cancellation'
    }

    🔸 `p` also has access to `display()` method via its prototype chain

-----------------------------------------------------------------------

4️⃣ Agar tu chahe to ye bhi kar sakta hai:
    p.display();  // Output: 10

    Because:
    ➤ p.__proto__ === Product.prototype
    ➤ display() is defined on prototype

========================= ✅ FINAL OUTPUT =========================

console.log(p);
➤ {
     name: 'boats',
     price: 100000,
     description: 'earbuds with noise cancellation'
   }

========================= 📌 KEY CONCEPTS =========================

🔹 `new` keyword creates a blank object, binds `this`, sets prototype, and returns `this` if no object is returned manually.

🔹 If constructor returns nothing or a primitive ➤ JS returns `this`
🔹 If constructor returns an object ➤ JS returns that object instead

🔹 Classes in JS do NOT support constructor overloading (i.e., no multiple constructors)

🔹 Class fields (`name`, `price`, `description`) are public and defined directly on the instance.

========================= 🧪 MEMORY STRUCTURE =========================

        p  ─────────▶ {
                         name: 'boats',
                         price: 100000,
                         description: 'earbuds with noise cancellation'
                      }
                      ↑
                      |
               [[Prototype]] → Product.prototype → contains: display()

*/
