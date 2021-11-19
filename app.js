const express = require("express");
const tasks = require("./routes/tasks");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const port = 5500;
app.listen(port, console.log(`server is listening on port ${port}... `));
