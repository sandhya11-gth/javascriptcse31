 //Visualize the Event Loop using setTimeout, setImmediate, and process.nextTick
console.log("1. Program started");

setTimeout(() => {
    console.log("4. setTimeout executed");
}, 0);

setImmediate(() => {
    console.log("5. setImmediate executed");
});

process.nextTick(() => {
    console.log("3. process.nextTick executed");
});

console.log("2. Program finished");
