// Change text in existing elemnt
document.querySelector("p").innerHTML = "Welcome to JS DOM Manipulation!";

// Add a new element
const container = document.querySelector(".container");
const newParagraph = document.createElement("p");

newParagraph.innerHTML = "This paragraph was added with JavaScript.";
container.appendChild(newParagraph);
