const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  // Body details
  age: Number,
  height: Number,
  weight: Number,
  goal: {
    type: String,
    enum: ["lose", "gain", "maintain"]
  },

  // Fitness tracking
  streak: {
    type: Number,
    default: 0
  },
  lastWorkoutDate: Date

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
