// Variable declaration
// 1. var
// var name = "John";
// console.log(name);
// name = "John Doe";
// console.log(name);
// name = 38;
// console.log(name);

// 2.
// var test;
// console.log(test);
// test = "John Doe";
// console.log(test);

// 3.
// letters, numbers, _, $
// var my_var1 = "Test";
// console.log(my_var1);
// var myVar = 1;
// console.log(myVar);
// var MyVar = 2;
// console.log(MyVar);
// var $el = "DOM element";
// console.log($el);
////////////////////

// 4. let
// let name = "John";
// console.log(name);
// name = "John Doe";
// console.log(name);
// name = 3;
// console.log(name);
////////////////////

// 5. const
// const name = "John";
// console.log(name);
// name = "John Doe";
// const person = {
//   firstname: "John",
// };
// console.log(person);
// person.age = 42;
// console.log(person);
////////////////////

// Scopes
// 6. Global Scope
// anotherGlobalVar = "Global var"; // antipattern
// let globalScope = "John"; // antipattern

// console.log("globalScope", globalScope);
// console.log("anotherGlobalVar", anotherGlobalVar);

// 7. Global or Module Scope
// console.log("foo", foo);

// 8. Function scope
// Variable Shadowing
// var str = "global string!";

// function showMessage() {
//   var str = "local string!";
//   console.log(str);
// }

// showMessage();
// console.log(str);

// Block scope
// 9. var
// if (true) {
//   var test = "test";
// }

// console.log(test);

// 10.
// {
//   var test = "test";
// }

// console.log(test);

// 11. let
// if (true) {
//   let test = "test";
// }

// console.log(test);

// 12. const
// {
//   const test = "test";
// }

// console.log(test);
////////////////////

// Hoisting
// 13.
// console.log(varVariable); // Output: undefined
// // console.log(letVariable); // Error: Cannot access 'letVariable' before initialization
// // console.log(constVariable); // Error: Cannot access 'constVariable' before initialization

// var varVariable = "I am var";
// let letVariable = "I am let";
// const constVariable = "I am const";

// console.log(varVariable); // Output: I am var
// console.log(letVariable); // Output: I am let
// console.log(constVariable); // Output: I am const

// 14.
// var name;
// console.log(name);
// name = "John";

// 15.
// let name;
// console.log(name);
// name = "John";
// console.log(name);
