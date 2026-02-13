const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  exercise: String,
  sets: Number,
  reps: Number,
  weight: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Workout", workoutSchema);
