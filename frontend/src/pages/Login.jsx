// ./src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">

      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />

      <GlassCard className="w-full max-w-md relative z-10 p-6 sm:p-8">

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Login
          </h2>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-lg mb-6 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

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
              Login
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Don’t have an account?
            <Link to="/register" className="text-green-500 ml-2 font-medium">
              Sign up
            </Link>
          </div>

        </motion.div>
      </GlassCard>
    </div>
  );
};

export default Login;
