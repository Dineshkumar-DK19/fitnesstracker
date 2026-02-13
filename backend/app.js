// ./app.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/home", require("./src/routes/homeRoutes"));
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/user", require("./src/routes/userRoutes"));
app.use("/api/workouts", require("./src/routes/workoutRoutes"));
app.use("/api/dashboard", require("./src/routes/dashboardRoutes"));
module.exports = app;
