const Workout = require("../models/Workout");
const User = require("../models/User");

exports.addWorkout = async (req, res) => {
  try {
    const { exercise, sets, reps, weight } = req.body;

    const userId = req.user.userId;

    // create workout
    const workout = await Workout.create({
      userId,
      exercise,
      sets,
      reps,
      weight
    });

    // STREAK LOGIC
    const user = await User.findById(userId);

    const today = new Date();
    const lastDate = user.lastWorkoutDate;

    if (lastDate) {
      const diff = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));

      if (diff === 1) {
        user.streak += 1;
      } else if (diff > 1) {
        user.streak = 1;
      }
    } else {
      user.streak = 1;
    }

    user.lastWorkoutDate = today;
    await user.save();

    res.json({
      message: "Workout added",
      workout,
      streak: user.streak
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({
      userId: req.user.userId
    }).sort({ date: -1 });

    res.json(workouts);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deleteWorkout = async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);

    res.json({ message: "Workout deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
