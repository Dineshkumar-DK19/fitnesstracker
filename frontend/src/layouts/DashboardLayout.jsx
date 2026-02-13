// ./src/layouts/DashboardLayout.jsx
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <Sidebar />
      <MobileNav />
      <main className="md:ml-64 min-h-screen p-4 pb-20 md:p-10 transition-all duration-300 pt-20 md:pt-10">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
