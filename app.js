
const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/task");

const app = express();

// Middleware
app.use(bodyParser.json());

// Rotas
app.use("/tasks", taskRoutes);

// Exportar app
module.exports = app;
