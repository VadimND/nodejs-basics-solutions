import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const numCores = cpus().length;
  const results = [];
  const workers = [];

  for (let i = 0; i < numCores; i++) {
    const worker = new Worker("./src/wt/worker.js");
    workers.push(worker);

    const workerPromise = new Promise((resolve) => {
      worker.on("message", (data) => {
        resolve({ status: "resolved", data });
      });

      worker.on("error", (err) => {
        console.error("Error:", err.message);
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          resolve({ status: "error", data: null });
        }
      });

      worker.postMessage(10 + i);
    });

    results.push(workerPromise);
  }

  const finalResults = await Promise.all(results);
  console.log(finalResults);
};

await performCalculations();
