// Primitive types
// String
const name = "John";
// Number
const age = 42;
// Boolean
const isActive = true;
// Null
const hasFerrari = null;
// Undefined
let notDefined;
// Symbols (ES6)
const symbol = Symbol("Symbol");

console.log(name);
console.log(typeof name);

console.log(symbol);
console.log(typeof symbol);

// Reference types
// Arrays
const hobbies = ["cinema", "football", "PS%"];
// Object Literals
const address = {
  street: "Ermou 88",
  city: "Athens",
  postcode: 12345,
};
// Functions
function helloWord() {
  return "hello world!";
}
// Dates
const date = new Date(1999, 2, 25);

console.log(date);
console.log(typeof date);

// Immutability / Mutability
//  Primitive values
const myName = "John";
const otherName = "John";

console.log(myName === otherName); // true

// Reference values
const john = {
  name: "John",
  surname: "Tsevdos",
};

const tsevdos = {
  name: "John",
  surname: "Tsevdos",
};

// tsevdos.surname = "Doe";

console.log(john === tsevdos); // false
