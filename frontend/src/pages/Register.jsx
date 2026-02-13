// ./src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register(name, username, email, password);
    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">

      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />

      <GlassCard className="w-full max-w-md relative z-10 p-6 sm:p-8">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Create Account
          </h2>

          <p className="text-gray-400 text-center mb-6">
            Start your transformation today
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-lg mb-6 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="john_07"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" variant="primary" className="w-full py-3">
              Sign Up
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?
            <Link to="/login" className="text-green-500 ml-2 font-medium">
              Login
            </Link>
          </div>

        </motion.div>
      </GlassCard>
    </div>
  );
};

export default Register;
