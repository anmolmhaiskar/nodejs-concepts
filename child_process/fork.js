const { fork } = require("child_process");

// Forking a child process running another Node.js script
const child = fork("child.js");

// Parent listens for messages from the child
child.on("message", (msg) => {
  console.log(`Message from child: ${JSON.stringify(msg)}`);
});

// Sending message to the child process
child.send({ hello: "world" });
