/*
----------------------------------------
🔍 FULL EXPLANATION: CLASSES AND OBJECTS
----------------------------------------

🧱 1. What is a Class?
-> A class is like a **blueprint** or **design template** used to create objects.
-> It only defines how something should look or behave but is not the actual object itself.
-> It contains:
   - Variables to store data (called **properties**), it helps us to uniquely identify an object.
   - Functions to perform actions (called **methods**)

🎯 Real-life example:
   Suppose you are building mobile phones.
   - The **blueprint** of a phone defines its screen size, battery capacity, camera, etc.
   - But you can't use a blueprint to call someone. You need a real phone made from the blueprint.

   In JavaScript:
   - The blueprint = `class`
   - The real phone = `object`

🛠️ Example Blueprint (Class):
    class Product {
        constructor(name, price, rating) {
            this.name = name;
            this.price = price;
            this.rating = rating;
        }

        buy() {
            console.log(`${this.name} purchased for ₹${this.price}`);
        }

        wishlist() {
            console.log(`${this.name} added to wishlist!`);
        }
    }

🧍 2. What is an Object?
-> An object is a **real instance** created from a class.
-> It holds actual values and can use the methods defined in the class.

🎯 Real-life analogy:
   - Class = Recipe of Cake
   - Object = Real cake made from that recipe

🛍️ Example Object (Product):
    const iphone = new Product("iPhone 14", 79999, 4.7);
    iphone.buy();        // Output: iPhone 14 purchased for ₹79999
    iphone.wishlist();   // Output: iPhone 14 added to wishlist!

🔁 You can create multiple objects from a single class:
    const macbook = new Product("MacBook Pro", 199999, 4.9);
    macbook.buy();       // MacBook Pro purchased for ₹199999

📌 KEY TERMS:
- Class: Blueprint / design / template
- Object: Real entity made from the class
- Property: Data (like name, price)
- Method: Action (like buy, wishlist)

🧠 Real-life relatable analogy:
- 🏭 Class = Car factory’s design manual
- 🚗 Object = Actual car that you can drive
- 🔩 Properties = Color, engine power, seats
- ⚙️ Methods = Start, stop, honk

----------------------------------------
✅ FINAL SUMMARY
----------------------------------------
- Class defines structure & behavior, but holds no data itself.
- Object is the usable, data-filled version of a class.
- You use a class to create as many objects as you want.
- This is the core of Object-Oriented Programming (OOP) — modeling real-world things in code.
*/


/*
    -> "class" keyword is used to prepare the blueprint.
    -> class <name> {
                // properties

                // behaviour
            }

    -> with the help of the above blueprint, you can create real life entities.
*/

class Product{
    name; // no need to write var, let, const
    price;
    discount;
    desc;

    display(){
        // no need to write the function keyword
    }

    buy(){

    }

    wishlist(){

    }
}