// ./src/components/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Dumbbell, User, LogOut, Flame } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { clsx } from 'clsx';

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const links = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/workouts', icon: Dumbbell, label: 'Workouts' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <motion.aside 
      initial={{ x: -20 }}
      animate={{ x: 0 }}
      className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-gray-900/50 backdrop-blur-xl border-r border-white/10 z-40 flex-col"
    >
      <div className="p-6 flex items-center gap-3">
        <Flame className="w-8 h-8 text-green-500 animate-pulse" />
        <span className="font-bold text-xl tracking-wider">FITTRACK</span>
      </div>

      <nav className="flex-1 mt-6 flex flex-col gap-2 px-4">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link 
              key={link.path} 
              to={link.path}
              className={clsx(
                "flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group font-medium",
                isActive ? "bg-green-500/10 text-green-500 border-l-4 border-green-500" : "text-gray-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <link.icon className={clsx("w-6 h-6", isActive && "text-green-500")} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5 mx-4 mb-4">
        <button 
          onClick={logout}
          className="flex items-center gap-4 p-3 w-full rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-all duration-300 font-medium"
        >
          <LogOut className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
