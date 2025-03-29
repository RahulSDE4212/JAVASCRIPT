// 🖥️ Types of Programming Languages
// ---------------------------------
// 1️⃣ Imperative Programming Language
//    - Focuses on **how** to achieve a result by specifying explicit steps.
//    - The programmer defines **each step** to manipulate data.
//    - Examples: C, Java, Python (when using loops), JavaScript (when using traditional loops).
//
// 2️⃣ Declarative Programming Language
//    - Focuses on **what** needs to be done rather than detailing the steps.
//    - The program describes **the goal**, and the system figures out how to achieve it.
//    - Examples: SQL, HTML, Functional JavaScript (map, filter, reduce), React.js

// Example of Imperative Programming:
let arr = [1, 2, 3, 4, 5];
console.log(arr[2]); // Output: 3

// 🔍 Explanation:
// In this example, we **explicitly** define:
// ✅ A collection (`arr`)
// ✅ The exact way to retrieve data (`arr[2]` -> index 2)
// This step-by-step approach is a characteristic of **Imperative Programming**.

// 🆚 Declarative Alternative:
// If we wanted to find a specific element using **Declarative Programming**, we would use `.find()`:
let result = arr.find(num => num === 3);
console.log(result); // Output: 3

// ✅ Here, we describe **what** we want (find number 3) rather than manually accessing indices.
// ✅ JavaScript internally handles the iteration for us.
