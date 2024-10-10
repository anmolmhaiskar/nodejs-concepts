const EventEmitter = require("./customEventEmitter");
class Emitter extends EventEmitter {}

const eventEmitter = new Emitter();

eventEmitter.on("test", () => {
  console.log("This is a test Emitter1");
});

eventEmitter.on("test", () => {
  console.log("This is a test Emitter2");
});

eventEmitter.on("test", () => {
  console.log("This is a test Emitter3");
});

eventEmitter.on("test", () => {
  console.log("This is a test Emitter4");
});

eventEmitter.on("test", () => {
  console.log("This is a test Emitter5");
});

//Output:
// This is a test Emitter1
// This is a test Emitter2
// This is a test Emitter3
// This is a test Emitter4
// This is a test Emitter5
eventEmitter.emit("test");

console.log(eventEmitter.listenerCount("test")); // 5

// Output->
// [
//     [Function (anonymous)],
//     [Function (anonymous)],
//     [Function (anonymous)],
//     [Function (anonymous)],
//     [Function (anonymous)]
//   ]
console.log(eventEmitter.rawListeners("test"));

eventEmitter.once("bar", () => {
  console.log("This is once called");
});

eventEmitter.emit("bar"); //This is once called
eventEmitter.emit("bar");
eventEmitter.emit("bar");
