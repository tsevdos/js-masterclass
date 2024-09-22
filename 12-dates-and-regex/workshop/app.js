// Dates
const today = new Date();
const birthday = new Date(1982, 1, 26);

let val;

val = birthday.getMonth();
val = birthday.getDate();
val = birthday.getDay();
val = birthday.getFullYear();

// console.log(val);

birthday.setDate(10);
birthday.setMonth(7);
birthday.setFullYear(2004);

// console.log(birthday);

// Regex
const str = "world";
const regex = /hello/;
const regexConstructor = new RegExp("hello");

// console.log(regex.test(str));
// console.log(regexConstructor.test(str));

// alphanumeric
// console.log(/^[a-zA-Z0-9]*$/.test("tsevdos"));
// email
// console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test("tsevdos@gmail.com"));
