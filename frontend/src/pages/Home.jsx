// ./src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { mockStats } from "../services/api";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      
      {/* Navbar */}
      <Navbar />

      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Fitness Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center text-center px-6 sm:px-8 max-w-6xl mx-auto pt-28 pb-16">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6"
        >
          Track. Improve.{" "}
          <span className="text-green-500">Transform.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-xl sm:max-w-2xl"
        >
          Your complete fitness journey in one place. Analyze workouts,
          track progress, and reach your goals faster.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link to="/register" className="w-full sm:w-auto">
            <Button
              variant="primary"
              className="w-full sm:w-auto px-8 py-4 text-lg"
            >
              Get Started
            </Button>
          </Link>

          <Link to="/login" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              className="w-full sm:w-auto px-8 py-4 text-lg"
            >
              Login
            </Button>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16 w-full"
        >
          {[
            { label: "Workouts Logged", value: mockStats.workoutsLogged },
            { label: "Active Users", value: mockStats.activeUsers },
            { label: "Consistency Rate", value: mockStats.consistencyRate },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-green-500/40 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-green-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
