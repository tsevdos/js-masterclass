const languages = ["JavaScript", "PHP", "Rust", "C#", "JavaScript"];
const numbers = [0, 1, 2, 3, 5, 8, 13, 21];

// 1. forEach()
let items = "";
languages.forEach((language, index, arr) => {
  items += `<li>${index + 1}. ${language}</li>`;
  //   console.log(arr);
});

console.log(`<ul>${items}</ul>`);

// 2. map()
const noOfLetters = languages.map((language, index, arr) => {
  return {
    [index]: language.length,
  };
});

console.log(noOfLetters);

// 3. filter()
const aboveFive = numbers.filter((num) => num > 5);
console.log(aboveFive);

// 4. find()
const selectedLang = languages.find((lang) => lang == "JavaScript");
console.log(selectedLang);

// 5. reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
