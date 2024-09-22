const person = {
  firstName: "Dennis",
  lastName: "Ritchie",
  age: 70,
  email: "dennis@bell.com",
  technologies: ["C", "Unix"],
  address: {
    city: "New York",
    state: "NY",
  },
  sayHi: function () {
    return `Hi, I'm ${this.firstName} ${this.lastName}!`;
  },
};

let objVal;

// Get object values
objVal = person.firstName;
objVal = person["lastName"];
objVal = person.age;
objVal = person.technologies[1];
objVal = person.address.city;
objVal = person.address["state"];
objVal = person.sayHi();

// console.log(objVal);

// Set object values
person.firstName = "John";
person["lastName"] = "Doe";
person.technologies = ["JavaScript"];
person.address = {
  city: "Athens",
};
person.sayHi = function () {
  return "Testing....";
};

console.log(person.sayHi());
