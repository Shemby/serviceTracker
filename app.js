const express = require("express");
const userRoutes = require("./routes/user");
const modelRoutes = require("./routes/models");

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(modelRoutes);

module.exports = app;
