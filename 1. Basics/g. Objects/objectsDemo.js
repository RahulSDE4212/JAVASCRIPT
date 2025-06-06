/*
    * Objects are mutable.
    * Objects are key-value pairs.
    * In an Object, from key you can access value but not vice-versa.
      Because in an Object keys are unique but multiple different keys can have same value.

    * In javascipt, there are two ways to get the value of a corresponding key.
        1) object_name["keyname"]
        2) object_name.keyname

    * How to add the new properties in an already existing object.
        -> x.marks = 99;
        -> x["marks"] = 99;

    * How to delete a key, value pair from an object.
        -> delete y.name;
    
    * if i try to fetch a key which is not present, then it will give me undefined and undefined is a falsy value.
    
*/

let y = {
    name : "Rahul",
    age : 21,
    university :"Gu"
}

// getting value from a corresponding key
console.log(y["name"]);
console.log(y.name);

// updating value of a corresponding key
console.log(y);
y.age = 22;
console.log(y);

// How to add the new properties in an already existing object.
y.marks = 99; // if marks key is present, it will update it. otherwise it will add it.
console.log(y);
y.bestFriend = "Rohit";// if bestFriend key is present, it will update it. otherwise it will add it.
console.log(y);

// deleting a key, value pair from an object
delete y.bestFriend;
console.log(y);

// if i try to fetch a key which is not present, then it will give me undefined.