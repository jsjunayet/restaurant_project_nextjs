// components/Sidebar.js
"use client"
import { useState } from 'react';
import { FaHome, FaChartLine, FaEnvelope, FaUsers, FaCog, FaSignOutAlt, FaSmile } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <aside className={`fixed top-0 left-0 h-full transition-all ${isSidebarOpen ? 'w-72' : 'w-16'} bg-gray-800 text-white`}>
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <div className="flex items-center text-white">
            <FaSmile className='text-2xl' />
            {isSidebarOpen && <span className="ml-2 text-xl font-bold">AdminHub</span>}
          </div>
        </Link>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-2xl text-white">
          <FaHome />
        </button>
      </div>
      <ul className="mt-6">
        {[
          { name: 'Dashboard', icon: <FaHome /> },
          { name: 'Analytics', icon: <FaChartLine /> },
          { name: 'Message', icon: <FaEnvelope /> },
          { name: 'Team', icon: <FaUsers /> },
          { name: 'Settings', icon: <FaCog /> },
        ].map((item, index) => (
          <li key={index} className="hover:bg-gray-700">
            <Link href="#">
              <div className="flex items-center px-4 py-2 text-white">
                {item.icon}
                {isSidebarOpen && <span className="ml-4">{item.name}</span>}
              </div>
            </Link>
          </li>
        ))}
        <li className="hover:bg-red-600">
          <Link href="#">
            <div className="flex items-center px-4 py-2 text-red-400">
              <FaSignOutAlt />
              {isSidebarOpen && <span className="ml-4">Logout</span>}
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
