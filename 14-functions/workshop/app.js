// 1. Function declarations
function sayHi(name, age) {
  return `Hi, my name is ${name} and I'm ${age} years old.`;
}

console.log(sayHi("John", 42));
console.log(sayHi("Mary", 23));

// 2. Default parameters
function greet(greeting = "Hello", name = "stranger") {
  return `${greeting}, ${name}!`;
}

console.log(greet());
console.log(greet("Hi", "John"));

// 3. Function expressions
// anonymous
const square1 = function (number) {
  return number * number;
};

// named
const square2 = function sq(number) {
  return number * number;
};

console.log(square1(2));
console.log(square2(3));

// 4. Arrow functions
const add = (number1, number2) => number1 + number2;

console.log(add(2, 3));
console.log(add(5, 3));

// 5. Function scope
const num1 = 20;
const num2 = 3;
const name = "John";

function multiply() {
  return num1 * num2;
}

console.log(multiply());

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore());
