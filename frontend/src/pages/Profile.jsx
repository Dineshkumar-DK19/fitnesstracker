// ./src/pages/Profile.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import { userProfile } from "../services/api";
import { User, Activity } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  // Merge logged-in user name with mock profile
  const [profile, setProfile] = useState({
    ...userProfile,
    name: user?.name || "User",
  });

  useEffect(() => {
    if (user) {
      setProfile((prev) => ({
        ...prev,
        name: user.name,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const bmiColor =
    profile.bmi < 18.5
      ? "text-yellow-500"
      : profile.bmi < 25
      ? "text-green-500"
      : profile.bmi < 30
      ? "text-orange-500"
      : "text-red-500";

  return (
    <div className="max-w-4xl mx-auto space-y-8 pt-20 md:pt-0 px-4 md:px-0">
      <h1 className="text-3xl font-bold">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-2">
          <GlassCard>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-4xl font-bold text-black border-4 border-black shadow-lg shadow-green-500/20">
                {profile.name?.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm mt-2 border border-green-500/20">
                  Pro Member
                </div>
              </div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  name="height"
                  value={profile.height}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={profile.weight}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Goal
                </label>
                <select
                  name="goal"
                  value={profile.goal}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-white"
                >
                  <option value="Lose Weight">Lose Weight</option>
                  <option value="Build Muscle">Build Muscle</option>
                  <option value="Maintain">Maintain</option>
                </select>
              </div>

              <div className="md:col-span-2 pt-4">
                <Button variant="primary">Save Changes</Button>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* Right Side Stats */}
        <div className="space-y-6">
          <GlassCard className="flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-gray-400 font-medium mb-4">BMI Score</h3>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className={`text-3xl font-bold ${bmiColor}`}>
                {profile.bmi}
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-4 mb-4">
              <Activity className="text-green-500" />
              <h3 className="font-bold">Fitness Level</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Strength</span>
                  <span className="text-green-500">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-green-500 rounded-full" />
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
export default Profile;
