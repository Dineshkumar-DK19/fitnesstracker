// ./app.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/home", require("./routes/homeRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/workouts", require("./routes/workoutRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

module.exports = app;
