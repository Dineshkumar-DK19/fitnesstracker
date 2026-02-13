// ./src/pages/Workouts.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import WorkoutCard from '../components/WorkoutCard';
import { workoutHistory as initialHistory } from '../services/api';
import { Plus } from 'lucide-react';

const Workouts = () => {
  const [history, setHistory] = useState(initialHistory);
  const [formData, setFormData] = useState({
    exercise: '',
    sets: '',
    reps: '',
    weight: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddWorkout = (e) => {
    e.preventDefault();
    const newWorkout = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0],
      volume: `${parseInt(formData.sets) * parseInt(formData.reps) * parseInt(formData.weight)} kg`
    };
    
    setHistory([newWorkout, ...history]);
    setFormData({ exercise: '', sets: '', reps: '', weight: '' });
  };

  const handleDelete = (id) => {
    setHistory(history.filter(w => w.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Workouts</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Workout Form */}
        <div className="lg:col-span-1">
          <GlassCard className="sticky top-24">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Plus className="w-5 h-5 text-green-500" />
              Log Workout
            </h2>
            <form onSubmit={handleAddWorkout} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Exercise</label>
                <input
                  type="text"
                  name="exercise"
                  value={formData.exercise}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="e.g. Bench Press"
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Sets</label>
                  <input
                    type="number"
                    name="sets"
                    value={formData.sets}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Reps</label>
                  <input
                    type="number"
                    name="reps"
                    value={formData.reps}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="80"
                    required
                  />
                </div>
              </div>
              <Button type="submit" variant="primary" className="w-full mt-4">
                Add Log
              </Button>
            </form>
          </GlassCard>
        </div>

        {/* Workout History */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <AnimatePresence>
            {history.map((workout) => (
              <motion.div
                key={workout.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                layout
              >
                <WorkoutCard workout={workout} onDelete={handleDelete} />
              </motion.div>
            ))}
          </AnimatePresence>
          {history.length === 0 && (
            <div className="text-center text-gray-500 py-10">
              No workouts logged yet. Start crushing your goals!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workouts;
