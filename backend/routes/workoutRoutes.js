const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addWorkout,
  getWorkouts,
  deleteWorkout
} = require("../controllers/workoutController");

// protected routes
router.post("/", authMiddleware, addWorkout);
router.get("/", authMiddleware, getWorkouts);
router.delete("/:id", authMiddleware, deleteWorkout);

module.exports = router;
