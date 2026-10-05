// 2. Simulate DOM-like event handling in Node.js using events

// In a browser, we commonly use:
// button.addEventListener("click", function() {
//     console.log("Button clicked");
// });

// In Node.js, we can simulate similar behavior
// using the built-in EventEmitter module.

const EventEmitter = require("events");

// Create an EventEmitter object to act like a button
const button = new EventEmitter();

// Add a click event listener
button.on("click", () => {
    console.log("Button was clicked!");
});

// Add a mouseover event listener
button.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

// We can add multiple listeners for the same event
button.on("click", () => {
    console.log("Performing another click action...");
});

// Simulate the click event
console.log("Simulating click...");
button.emit("click");

// Simulate the mouseover event
console.log("Simulating mouseover...");
button.emit("mouseover");