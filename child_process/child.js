process.on("message", (msg) => {
  console.log(`Message from parent: ${JSON.stringify(msg)}`);

  // Send a message back to the parent
  process.send({ reply: "Message received" });
});
