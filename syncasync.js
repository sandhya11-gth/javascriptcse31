//visualise Event Loop using setTimeout and setImmediate
console.log("zero");
console.log("1. Program Started");

setTimeout(() => { // asynchronus
    console.log("2. setTimeout Executed");
}, 5000);// prints after 5 secs

setImmediate(() => {
    console.log("3. setImmediate Executed");// asynchronus
});

process.nextTick(() => {
    console.log("4. process.nextTick Executed");
});

console.log("5. finished");