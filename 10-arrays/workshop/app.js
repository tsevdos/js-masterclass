// Array declaration
const numbers = [0, 1, 2, 3, 5, 8, 13, 21];
const numbers2 = new Array(0, 1, 2, 3, 5, 8, 13, 21);
const languages = ["JavaScript", "PHP", "Rust", "C#"];
const mixed = [22, "Hello", true, undefined, null, { name: "John", age: 38 }];

let val;

// Array length
const numbersLenth = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Concatenate arrays
val = numbers.concat(languages);
val = ["first item", ...numbers, ...languages, "last item"];

// Accessing items
val = languages[0];
val = languages[1];
val = languages[languages.length - 1];

// Insert into array
languages[2] = "Java";

// Find index of value
val = numbers.indexOf(5);

// push()
numbers.push(500);

// unshift()
numbers.unshift(123);

// pop()
val = numbers.pop();

// shift()
val = numbers.shift();

// splice()
val = numbers.splice(1, 3);

// reverse()
numbers.reverse();

// sort()
val = languages.sort();

console.log(val);
