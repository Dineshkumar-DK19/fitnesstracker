// ./src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import { mockStats } from '../services/api';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Fitness Background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-20 flex-1 flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6"
        >
          Track. Improve. <span className="text-green-500">Transform.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl"
        >
          Your complete fitness journey in one place. Analyze your workouts, track progress, and reach your goals faster.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex gap-4"
        >
          <Link to="/register">
            <Button variant="primary" className="px-8 py-4 text-lg">Get Started</Button>
          </Link>
          <Link to="/login">
            <Button variant="secondary" className="px-8 py-4 text-lg">Login</Button>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full"
        >
          {[
            { label: 'Workouts Logged', value: mockStats.workoutsLogged },
            { label: 'Active Users', value: mockStats.activeUsers },
            { label: 'Consistency Rate', value: mockStats.consistencyRate },
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-green-400 mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
