// ./src/components/StatCard.jsx
import GlassCard from './GlassCard';

const StatCard = ({ title, value, icon: Icon, subtext }) => {
  return (
    <GlassCard className="flex flex-col gap-2 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all" />
      
      <div className="flex justify-between items-start z-10">
        <div>
          <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
          <p className="text-3xl font-bold mt-2 text-white">{value}</p>
        </div>
        <div className="p-3 bg-white/5 rounded-xl text-green-500">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      {subtext && <p className="text-xs text-gray-500 mt-2">{subtext}</p>}
    </GlassCard>
  );
};

export default StatCard;
