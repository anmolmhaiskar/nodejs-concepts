const { Worker } = require("worker_threads");
const fs = require("fs");

// File to read
const filePath = "./largefile.txt";
const numberOfWorkers = 4; // Number of worker threads to spawn

// Split the file into chunks
const fileSize = fs.statSync(filePath).size;
const chunkSize = Math.ceil(fileSize / numberOfWorkers);

// Function to start workers
function startWorker(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData });

    worker.on("message", (message) => {
      resolve(message);
    });

    worker.on("error", reject);

    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

// Main function to read the file in chunks using workers
async function readFileWithWorkers() {
  const results = [];

  // Spawn workers for each chunk of the file
  for (let i = 0; i < numberOfWorkers; i++) {
    const start = i * chunkSize;
    const end = Math.min(start + chunkSize, fileSize);
    console.log(`Spawning worker to read from byte ${start} to ${end}`);

    // Start the worker with file chunk info
    const result = await startWorker({ filePath, start, end });
    results.push(result);
  }

  console.log("All workers have finished reading the file.");
  console.log("File Contents:", results.join("")); // Combine results from all workers
}

readFileWithWorkers().catch((err) => console.error(err));
