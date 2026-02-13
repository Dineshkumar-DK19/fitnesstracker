// ./src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  if (isAuthPage) return null;

  return (
    <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600"
      >
        FITNESS TRACKER
      </motion.div>
      <div className="flex gap-4">
        <Link to="/login">
          <Button variant="secondary" className="px-6">Login</Button>
        </Link>
        <Link to="/register">
          <Button variant="primary" className="px-6">Get Started</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
