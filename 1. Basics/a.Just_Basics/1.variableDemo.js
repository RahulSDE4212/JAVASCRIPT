/*
    There are 3 ways to create variable in javascript:
    1) using var keyword.
        -> Syntax: var <variable_name> = value;
        -> ex:
            var a = 24;
            var b = 45;

    2) using let keyword.
        -> Syntax: let <variable_name> = value;
        -> ex:
            let a = 24;
            let b = 45;

    3) using const keyword.
        -> Syntax: const <variable_name> = value;
        -> ex:
            const a = 24;
            const b = 45;
*/

var score = 90;
var marks = 5;

let age = 24;
let flag = 0;

const x = 100;



/*
    ✅ In JavaScript, we use **variables** to store values. There are 3 ways to declare them:
        1. var
        2. let
        3. const

    📦 Think of a variable like a **box** that holds something — like your toys, books, or money.
       But each type of box (`var`, `let`, `const`) behaves a little differently.

=======================================================================================================
    1️⃣ var – (Old way, not used much now)

    📦 Real-life example:
        Imagine you're using an **open basket**. You can access it from anywhere in the room.
        Even if you declare it inside a cupboard (function), you can still pull it out if it's not locked.

    🔧 Syntax:
        var name = "Rahul";

    🔍 Key points:
        - 🏠 Scope: Only limited to functions, NOT blocks (like if or for).
        - 🔄 You can **declare it again** (not safe).
        - 🪄 It is hoisted, meaning JS moves it to the top but leaves it as undefined initially.

    💡 Example:
        var age = 10;
        var age = 20; // ✅ Allowed — but this can cause bugs!
        console.log(age); // 20

=======================================================================================================
    2️⃣ let – (Modern way, safe and preferred)

    📦 Real-life example:
        Imagine a **drawer in a specific room**. You can only access it inside that room.
        Once you declare the drawer inside that room, you can't declare another drawer with the same name in that room.

    🔧 Syntax:
        let age = 24;

    🔍 Key points:
        - 📦 Scope: Limited to **block**, like inside `{}`.
        - 🔁 You can **change** the value, but you **cannot declare it again** in the same scope.
        - ❌ Not hoisted the same way as `var`; it’s in a “**temporal dead zone**” until declared.

    💡 Example:
        let name = "Rohit";
        name = "Rahul";     // ✅ Can change value
        let name = "Ram";   // ❌ Error – already declared in same block

=======================================================================================================
    3️⃣ const – (Fixed values, safe and clean)

    📦 Real-life example:
        Think of a **locker with a lock**. You put your gold inside and lock it. 
        You can open and modify the gold (change its shape), but you **can’t remove the gold** and put something new.

    🔧 Syntax:
        const x = 100;

    🔍 Key points:
        - 📦 Scope: Block-scoped like `let`.
        - 🛑 Once given a value, it **cannot be changed**.
        - ✅ Must be given a value at the time of declaration.
        - 🛠 Objects/arrays can still be changed inside — only the **reference** stays locked.

    💡 Example:
        const PI = 3.14;
        PI = 3.14159;    // ❌ Error – can’t reassign

        const car = { brand: "Tesla" };
        car.brand = "BMW"; // ✅ Allowed – object properties can be modified
        car = {};          // ❌ Not allowed – can't assign a new object

=======================================================================================================
    📊 Summary Table:

    | Feature           | var             | let              | const              |
    |-------------------|------------------|-------------------|---------------------|
    | Scope             | Function          | Block             | Block               |
    | Re-declaration    | ✅ Yes            | ❌ No             | ❌ No               |
    | Re-assignment     | ✅ Yes            | ✅ Yes            | ❌ No               |
    | Must Initialize   | ❌ No             | ❌ No             | ✅ Yes              |
    | Hoisting          | ✅ (undefined)    | ⚠️ Error if early | ⚠️ Error if early   |
    | Use Case          | Not recommended  | Changeable data   | Fixed/constant data |

=======================================================================================================
    ✅ When to use what?

    - Use `let` if the value **can change** later (like a counter, user input, etc.).
    - Use `const` if the value **should stay the same** (like PI, config, fixed settings).
    - Avoid `var` unless working in **old code** or maintaining legacy systems.

*/
