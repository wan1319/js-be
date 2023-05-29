const express = require("express");

const app = express();

app.use(express.json());

app.use("/user", require("./controllers/ControllerUser"));

module.exports = app;