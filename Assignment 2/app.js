const express = require("express");
const app = express();

app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");

app.use(logger);

app.get("/", (req, res) => {
    res.send("Welcome to Student Management REST API!");
});

app.use("/students", studentRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});