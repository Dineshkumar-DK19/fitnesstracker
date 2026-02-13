// ./src/components/MobileNav.jsx
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Dumbbell, User, LogOut, Flame } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

const MobileNav = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const links = [
    { path: '/dashboard', icon: LayoutDashboard },
    { path: '/workouts', icon: Dumbbell },
    { path: '/profile', icon: User },
  ];

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Flame className="w-6 h-6 text-green-500" />
        <span className="font-bold text-lg tracking-wider">FITTRACK</span>
      </div>

      <div className="flex items-center gap-1">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link 
              key={link.path} 
              to={link.path}
              className={clsx(
                "p-2 rounded-lg transition-all",
                isActive ? "bg-green-500/10 text-green-500" : "text-gray-400"
              )}
            >
              <link.icon className="w-5 h-5" />
            </Link>
          );
        })}
        <button 
          onClick={logout}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors ml-2"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
