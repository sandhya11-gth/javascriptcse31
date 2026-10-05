const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Listener for greet event
myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

// Listener for exit event
myEmitter.on("exit", () => {
    console.log("Exit event triggered.");
});

// Trigger events
myEmitter.emit("greet", "Student");
myEmitter.emit("exit");
