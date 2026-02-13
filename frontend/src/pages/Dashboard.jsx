// ./src/pages/Dashboard.jsx
import { motion } from "framer-motion";
import StatCard from "../components/StatCard";
import GlassCard from "../components/GlassCard";
import { dashboardStats, userProfile } from "../services/api";
import {
  Activity,
  Dumbbell,
  Scale,
  Flame,
  Apple,
  TrendingUp,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 pt-20 md:pt-0 px-4 md:px-0"
    >
      {/* Welcome Section */}
      <motion.div variants={item}>
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome back,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            {user?.name}
          </span>{" "}
          💪
        </h1>
        <p className="text-gray-400 mt-2">
          Here's your activity overview for today.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={item}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard
          title="Total Workouts"
          value={dashboardStats.totalWorkouts}
          icon={Dumbbell}
        />
        <StatCard
          title="Total Volume"
          value={dashboardStats.totalVolume}
          icon={Activity}
        />
        <StatCard
          title="Current Weight"
          value={dashboardStats.currentWeight}
          icon={Scale}
        />
        <StatCard
          title="Streak"
          value={dashboardStats.streak}
          icon={Flame}
          subtext="Days on fire! 🔥"
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Activity Chart */}
        <motion.div variants={item} className="lg:col-span-2">
          <GlassCard className="h-full min-h-[300px] flex flex-col">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              Weekly Activity
            </h3>

            <div className="flex-1 flex items-end justify-between gap-4 px-4 pb-4">
              {[40, 70, 45, 90, 60, 80, 50].map((height, i) => (
                <div
                  key={i}
                  className="w-full bg-gray-800 rounded-t-lg relative group h-full flex items-end"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-full bg-gradient-to-t from-green-900 to-green-500 rounded-t-lg opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between px-4 text-xs text-gray-500 mt-4">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Side Cards */}
        <div className="space-y-6">
          {/* Goal Progress */}
          <motion.div variants={item}>
            <GlassCard>
              <h3 className="text-lg font-bold mb-4">Goal Progress</h3>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    {userProfile.goal}
                  </span>

                  <span className="text-xs font-semibold inline-block text-green-600">
                    70%
                  </span>
                </div>

                <div className="overflow-hidden h-2 mb-4 flex rounded bg-gray-700">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-green-500"
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Diet Tip */}
          <motion.div variants={item}>
            <GlassCard className="bg-gradient-to-br from-gray-800/50 to-emerald-900/20 border-emerald-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                  <Apple className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-emerald-400">
                    Diet Tip
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Increase protein intake for better muscle recovery after
                    today's heavy session.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
