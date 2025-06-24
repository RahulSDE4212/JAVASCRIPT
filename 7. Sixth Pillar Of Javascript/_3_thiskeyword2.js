let product = {
    arr : [
        {
            name : "Iphone",
            price : 1000000,
            description : "The new apple iphone 13 pro",
            rating : 4.8,
            getCategories : function print(){console.log(this.category);}
        },
        {
            name : "MackBook M2",
            price : 125000,
            description : "The new apple macbook m2",
            rating : 4.9,
            getCategories : function print(){console.log(this.category);}
        }
    ],
    Category : "Electronics"
}

product.arr[0].getCategories();


/*

========================= 🧠 DETAILED DRY RUN =========================

1️⃣ JS Engine starts ➤ Creates **Global Execution Context (GEC)**
   🔹 Call Stack: [GEC]
   🔹 Memory phase:
       - `product` is allocated memory with its structure
       - `product.arr[0].getCategories` and `product.arr[1].getCategories` are both regular functions

2️⃣ Line: `product.arr[0].getCategories();`
   🔸 JS evaluates:
       - `product.arr` ➝ returns the array
       - `product.arr[0]` ➝ accesses first object in array (iPhone)
       - `product.arr[0].getCategories()` ➝ method call

   ✅ A **new Execution Context** is created for `getCategories`
   🔹 Call Stack: [GEC, getCategories]

   🔸 Inside `getCategories`, `this` is determined by **how the function was called**:
       ➤ `product.arr[0].getCategories()`  
       ➤ So `this` === `product.arr[0]`

3️⃣ Line: `console.log(this.category);`
   🔸 Now JS looks for `.category` in `product.arr[0]`
   🔸 But `product.arr[0]` has no `category` key
   🔹 So: `this.category === undefined`

4️⃣ Console Output:
   🔸 Output: `undefined`

5️⃣ Function finishes ➤ Execution context popped
   🔹 Call Stack: [GEC]

========================= ✅ FINAL OUTPUT =========================
undefined

========================= 📌 KEY TAKEAWAY =========================

🔸 `this` inside a regular function (declared using `function`) refers to the **object that called the function**
   - Here, `this` === `product.arr[0]`

🔸 `product.arr[0]` does NOT have a `category` property
   - So `this.category` returns `undefined`

========================= 🛠️ FIX IF YOU WANT TO PRINT "Electronics" =========================

If you want to print `"Electronics"` (which is under `product.Category`), you have options:

🔹 Option 1: Use closure or reference to outer object:

```javascript
getCategories: function () {
    console.log(product.Category); // Direct access from outer object
}


*/
