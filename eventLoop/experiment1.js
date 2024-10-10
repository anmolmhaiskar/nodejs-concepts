/** Experiment 1 - all user written JavaScript code takes priority over async code that the runtime would like to execute */

console.log("console.log 1");
process.nextTick(() => console.log("this is process.nextTick 1"));
console.log("console.log 2");
