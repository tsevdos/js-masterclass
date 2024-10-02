---
marp: true
theme: default
style: |
  section {
    font-size: 220%;
  }
---

# Conditional statements

[tsevdos.me](https://tsevdos.me/) / [@tsevdos](https://twitter.com/tsevdos)

---

# Rules

Feel free to interrupt me for:

- questions
- relevant comments

---

# Agenda

- if...else statement
- switch statement
- ternary (conditional) operator
- (comparison and logical operators)

---

# if statement

<br />

```js
const name = "John";

if (name === "John") {
  console.log("Your name is John!");
}
```

---

# if...else statement

<br />

```js
const age = 16;

if (age >= 18) {
  console.log("adult");
} else {
  console.log("child");
}
```

---

# if...else if...else statement

<br />

```js
const age = 18;

if (age === 15) {
  console.log("fifteen");
} else if (age === 18) {
  console.log("eighteen");
} else if (age === 21) {
  console.log("twenty one");
} else {
  console.log("other");
}
```

---

# Switch statement

```js
switch (expression) {
  case choice1:
    // run this code
    break;
  case choice2:
    // run this code instead
    break;
    ...
  default:
    // actually, just run this code
    break;
}
```

---

# Switch statement

```js
const dayNumber = 3;

switch (dayNumber) {
  case 1:
    return "Monday";
  case 2:
    return "Tuesday";
  case 3:
    return "Wednesday";
  case 4:
    return "Thursday";
  case 5:
    return "Friday";
  case 6:
    return "Saturday";
  case 7:
    return "Sunday";
  default:
    return "Invalid number. Please enter a number between 1 and 7.";
}
```

---

# Ternary (conditional) operator

```js
condition ? statement1 : statement2;

const isBirthday = true;
const greeting = isBirthday ? "Happy birthday!" : "Good day.";
```

---

# Workshop

- demo

---

# Happy coding!
