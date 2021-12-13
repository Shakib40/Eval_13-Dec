const express = require("express");

const userModel = require("./controllers/user.controller");

const app = express();
app.use(express.json());

app.use("/users" , userModel);

module.exports = app;

