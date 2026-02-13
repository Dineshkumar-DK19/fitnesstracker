// ./src/components/WorkoutCard.jsx
import GlassCard from './GlassCard';
import { Calendar, Trash2, Dumbbell } from 'lucide-react';
import Button from './Button';

const WorkoutCard = ({ workout, onDelete }) => {
  return (
    <GlassCard className="group hover:border-green-500/30 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="p-3 bg-green-500/10 rounded-xl h-fit">
            <Dumbbell className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{workout.exercise}</h3>
            <div className="flex gap-4 mt-2 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {workout.date}
              </span>
              <span>•</span>
              <span>{workout.sets} sets x {workout.reps} reps</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-emerald-400">
              Volume: {workout.volume}
            </p>
          </div>
        </div>
        
        <button 
          onClick={() => onDelete(workout.id)}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </GlassCard>
  );
};

export default WorkoutCard;
