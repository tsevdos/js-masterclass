const firstName = "John"; // double quotes
const lastName = "Doe"; // single quotes
const age = 38;
const greeting = `Hello there I'm John.`; // backticks
// const greeting2 = new String("Hello there I'm John."); // String constructor
const languages = "javaScript, rust, php, C#, Java";
const withSpace = "   Hello World   ";

let str;

// Concatenation
str = firstName + lastName;
str = firstName + " " + lastName;
str = firstName.concat(" ", lastName);
str = "Hello, my name is " + firstName + " and I am " + age;
str = `Hello, my name is ${firstName} and I am ${age}!!!`;

// Escaping
str = "\"JavaScript\" is 'great'";

// Length
str = firstName.length;

// toUpperCase() / toLowerCase() // trim()
str = firstName.toUpperCase();
str = firstName.toLowerCase();
str = withSpace.trim();

// replace()
str = greeting.replace("Hello", "Yo");

// includes()
str = greeting.includes("Hello");
str = greeting.includes("Test");

// substring() / slice()
str = greeting.substring(0, 10);
str = greeting.slice(0, 10);
str = greeting.slice(-5);

// get a character / indexOf() / lastIndexOf() / charAt()
str = greeting[0];
str = firstName.indexOf("J");
str = firstName.lastIndexOf("n");
str = firstName.charAt(0);

// split()
str = languages.split(", ");
str = greeting.split(" ");

// console
console.log(str);
