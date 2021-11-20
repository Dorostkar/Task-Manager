const connectDB = require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const start = async () => {
  const port = 5500;
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}... `));
  } catch (error) {
    console.error(error);
  }
};

start();
