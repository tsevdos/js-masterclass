# Reading / Resources

- [**Functions**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions) (MDN)
- [**Functions (reference)**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) (MDN)

# Homework

### 1. Write a function that accepts a string as a parameter and returns its letters in alphabetical order.

- input string: `webmaster`
- output string: `abeemrstw`

### 2. Write a function that accepts a string as a parameter and converts the first letter of each sentence into uppercase.

- input string: `the sun sets. she smiles. he runs. everybody is happy.`
- output string: `The sun sets. She smiles. He runs. Everybody is happy.`

### 3. Write a function that accepts 2 strings as parameters and returns the longest one.

- input string 1: `computer`
- input string 2: `JavaScript`
- output string: `JavaScript`

### 4. Write a function that accepts 2 numbers as parameters, the price and the discountPercentage, and return the final price.

- input number 1: `100`
- input number 2: `20`
- output number: `80`

### 5. Write a function that accepts a number (age) as parameter, and returns the string "Adult" or "Minor" if the age is above or equal to 18.

- input number: `25`
- output string: `Adult`

### 6. Write a function that accepts a number, degrees in fahrenheit, and returns a number, in celsius degrees.

- input number: `70`
- output string: `21.11 °C`

### 7. Write a function that accepts a string with the name of a month as a parameter, and returns the number of remaining months.

```js
const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
```

- input string: `March`
- output number: `9`

### 8. Write a function that accepts an object literal with the below properties as parameter, and returns a greeting text dependening the object properties.

```js
const user = {
  name: "Joe",
  age: 22,
  isAdmin: false,
};

const admin = {
  name: "John",
  age: 42,
  isAdmin: true,
};
```

- input object: `object (user | admin)`
- output string (user): `Hello John, looks like you are 22!`
- output string (admin): `Welcome administrator John!`
