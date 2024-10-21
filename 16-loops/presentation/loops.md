---
marp: true
theme: default
style: |
  section {
    font-size: 220%;
  }
---

# Loops and iteration

[tsevdos.me](https://tsevdos.me/) / [@tsevdos](https://twitter.com/tsevdos)

---

# Rules

Feel free to interrupt me for:

- questions
- relevant comments

---

# Agenda

- for loop
- while loop
- do...while loop
- for...in loop (objects)
- for...of loop (iterable objects such as Arrays, Maps, Sets, etc.)

---

# for loop

1. the `initialization` expression is executed
2. the `condition` expression is evaluated
3. the `statement` executes
4. if present, the update expression `afterthought` is executed
5. control returns to the `condition` expression

<br />

```js
for (initialization; condition; afterthought) {
  statement;
}
```

---

# while loop

1. the `condition` expression is evaluated
2. the `statement` executes

<br />

```js
while (condition) {
  statement;
}
```

- be careful of infinite loops
- always modify the loop variable inside the loop

---

# do...while loop

1. the `statement` executes at least once
1. the `condition` expression is evaluated

<br />

```js
do {
  statement;
} while (condition);
```

- be careful of infinite loops
- always modify the loop variable inside the loop

---

# for...in loop (objects)

1. iterates over all enumerable properties of an object
2. execute the `statement` for each property

<br />

```js
for (property in object) {
  statement;
}
```

---

# for...of loop (iterable objects)

1. iterates over all items of the iterable object
2. execute the `statement` for index

<br />

```js
for (item of iterableObject) {
  statement;
}
```

- output order is not guaranteed
- don't mutate the iterable object (in statement)
- prefer `forEach()` or `for loops` for array iteration

---

# Workshop

- demo

---

# Happy coding!
