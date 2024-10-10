/** Experiment 13 - Timer anamoly. Order of execution can never be guaranteed */

setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));
// Uncomment below to guarantee order
// for (let i = 0; i < 1000000000; i++) {}
