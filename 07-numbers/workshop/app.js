const num1 = 100;
const num2 = 50;
const floatNum = 5.6789;
const largeNum = 1_000_000;
const num3 = Number(123); // Number constructor

let num;

// Operators
num = num1 + num2;
num = num1 * num2;
num = num1 - num2;
num = num1 / num2;
num = num1 % num2;
num = num1 ** num2;

// Operator precedence
num = 3 + 4 * 5;
num = (3 + 4) * 5;

// Convert string to intiger/float
num = parseInt("12"); // same as Number.parseInt("12");
num = parseFloat("12.3"); // same as Number.parseFloat("12.3");

// Number methods
num = floatNum.toFixed(2);

// Math Object
num = Math.PI;
num = Math.round(2.4);
num = Math.ceil(2.4);
num = Math.floor(2.4);
num = Math.sqrt(64);
num = Math.abs(-124);
num = Math.pow(8, 2);
num = Math.min(8, 2, 17, 40);
num = Math.max(8, 2, 17, 40);
num = Math.random();

console.log(num);
