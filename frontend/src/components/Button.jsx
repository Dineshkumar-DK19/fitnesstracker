// ./src/components/Button.jsx
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, className, variant = 'primary', ...props }) => {
  const baseStyles = "rounded-full transition-all duration-300 font-bold px-6 py-2 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]",
    secondary: "bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10",
    danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]",
    ghost: "bg-transparent text-gray-400 hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
