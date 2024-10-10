const { workerData, parentPort } = require("worker_threads");
const fs = require("fs");

// Extract file details from workerData
const { filePath, start, end } = workerData;

// Create a read stream for the specific chunk of the file
const readStream = fs.createReadStream(filePath, {
  start,
  end: end - 1,
  encoding: "utf8",
});
let chunkData = "";

// Read the file chunk
readStream.on("data", (chunk) => {
  chunkData += chunk;
});

// When reading is finished, send the result back to the main thread
readStream.on("end", () => {
  parentPort.postMessage(chunkData);
});

// Handle any errors
readStream.on("error", (err) => {
  parentPort.postMessage({ error: err.message });
});
