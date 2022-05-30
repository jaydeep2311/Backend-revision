const express = require("express");
const cluster = require("cluster");
const os = require("os");
const rateLimit = require("express-rate-limit");
const app = express();
const limiter = rateLimit({
  windowMs: 60000, // 1 minute
  max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
});

app.get("/posts", limiter, (req, res) => {
  res.send({
    message: "request accepted",
  });
});
// const numCpu = os.cpus().length;
// app.get("/", (req, res) => {
//   for (let i = 0; i < 1e8; i++) {
//     //some long task
//   }
//   res.send(`ok....${process.pid}`);
// });
// if (cluster.isMaster) {
//   for (let i = 0; i < numCpu; i++) {
//     cluster.fork();
//   }
// } else {
//   app.listen(8000, () =>
//     console.log(`server ${process.pid} running on 8000 port`)
//   );
// }
app.listen(8000, (req, res) => {
  console.log("port 8000 running");
});
