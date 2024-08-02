---
marp: true
theme: default
style: |
  section {
    font-size: 220%;
  }
---

# Variables, scope and hoisting

[tsevdos.me](https://tsevdos.me) / [@tsevdos](https://twitter.com/tsevdos)

---

# Rules

Feel free to interrupt me for:

- questions
- relevant comments

---

# Agenda

- variable declaration and naming
- var, let, and const
- variable scope
- hoisting

---

# Variable declaration

- var
- let
- const

---

# Variable names

- names can contain **letters**, **digits**, **underscores (\_)**, and **dollar signs ($)**
- names must **begin with a letter**
- names can also **begin with \_ and $**
- names are **case-sensitive** (**"x"** and **"X"** are different variables)
- [**reserved words**](https://www.w3schools.com/js/js_reserved.asp) (JavaScript keywords) cannot be used as names

---

# Variable scope

- **global scope**: the default scope for all code running in script mode
- **module scope**: the scope for code running in module mode
- **function scope**: the scope created with a function
- **block scope**: the scope created with openining and closing curly braces ({})

---

# Variables

- **var**: function scope
- **let** or **const**: block scope
- **const**: cannot be updated or re-declared

---

# Hoisting

**Hoisting** refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

---

# Happy coding!
