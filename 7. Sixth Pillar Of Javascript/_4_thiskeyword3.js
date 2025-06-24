const iphone = {
    name : "iphone 13 pro",
    price : 1000000,
    description : "The new apple iphone 13 pro",
    rating : 4.8,

    display : function () {
        let iphoneRed = {
            name : "Iphone red",
            price : 1100000,
            print : () => {
                console.log(this);
            }
        }
        iphoneRed.print();
    }
}

iphone.display();

/*
=========================== 🧠 DRY RUN START ===========================

1️⃣ JS Engine starts ➤ Creates **Global Execution Context (GEC)**
   🔹 Call Stack: [GEC]
   🔹 Memory Phase:
      - `iphone` object is stored in memory
      - `iphone.display` is a regular function
      - Nested inside `display`, `iphoneRed.print` is an **arrow function**

2️⃣ Line: `iphone.display();`
   ✅ `display()` is called on `iphone`
   🔹 Call Stack: [GEC, display]

   📌 Important: Since `display` is a regular function, `this` inside it will refer to the calling object ➝ `iphone`

3️⃣ Inside `display()`:
   - `let iphoneRed = {...}` is declared
   - Inside `iphoneRed`, `print` is an **arrow function**

4️⃣ Line: `iphoneRed.print();`
   ✅ Arrow function `print()` is called
   🔹 Call Stack: [GEC, display, print]

   📌 Arrow functions DON'T have their own `this`
   ➤ They capture `this` from their **lexical parent scope**

   In this case:
   - Lexical parent = `display()`
   - `this` inside `display()` = `iphone`
   → So `this` inside arrow function also refers to `iphone`

5️⃣ Line: `console.log(this);`
   🔹 `this` = `iphone`
   🔹 Entire `iphone` object will be logged

6️⃣ Execution finishes:
   🔹 `print()` context pops ➝ [GEC, display]
   🔹 `display()` context pops ➝ [GEC]
   🔹 Program ends ➝ Call Stack: []

=========================== ✅ FINAL OUTPUT ===========================
{  
  name: 'iphone 13 pro',  
  price: 1000000,  
  description: 'The new apple iphone 13 pro',  
  rating: 4.8,  
  display: [Function: display]  
}

=========================== 📌 KEY CONCEPTS ===========================

🔹 `this` in a regular function → refers to the **caller object**
   ➤ Here, `display()` was called via `iphone`, so `this` = `iphone`

🔹 `this` in an arrow function → does **NOT** have its own `this`
   ➤ It uses `this` from **its lexical parent scope**
   ➤ So `this` inside `print()` also refers to `iphone`

🔹 Arrow function is perfect here if you want to **inherit `this` from outer scope**

*/
