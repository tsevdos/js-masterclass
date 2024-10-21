// 1. for loop
for (let i = 0; i < 10; i++) {
  console.log("for loop number: " + i);
}

// 2. while loop
let j = 0;
while (j < 10) {
  console.log("while loop number: " + j);
  j++;
}

// do while
let k = 0;
do {
  console.log("do while number: " + k);
  k++;
} while (k < 10);

// for in loop
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 38,
};

for (const prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}

// for...of loop
const languages = ["JavaScript", "PHP", "Rust", "C#"];

for (const item of languages) {
  const index = languages.indexOf(item);
  console.log(`${index}: ${item}`);
}
