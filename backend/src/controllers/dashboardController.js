const Workout = require("../models/Workout");
const User = require("../models/User");


exports.getDashboard = async (req, res) => {
  try {
    const userId = req.user.userId;

    // get user
    const user = await User.findById(userId);

    // get workouts
    const workouts = await Workout.find({ userId });

    // total workouts
    const totalWorkouts = workouts.length;

    // total volume
    const totalVolume = workouts.reduce((acc, w) => {
      return acc + (w.sets * w.reps * w.weight);
    }, 0);

    // recent workouts (last 5)
    const recentWorkouts = await Workout.find({ userId })
      .sort({ date: -1 })
      .limit(5);

    // diet suggestion
    let diet = "";
    if (user.goal === "gain") {
      diet = "High calorie diet recommended";
    } else if (user.goal === "lose") {
      diet = "Low calorie diet recommended";
    } else {
      diet = "Balanced diet recommended";
    }

    res.json({
      totalWorkouts,
      totalVolume,
      currentWeight: user.weight,
      streak: user.streak,
      diet,
      recentWorkouts
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
