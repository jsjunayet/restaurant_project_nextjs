// components/Navbar.js
"use client"
import { useState } from 'react';
import { FaSearch, FaTimes, FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <button className="text-2xl">
        <FaSearch />
      </button>
      <a href="#" className="text-lg">
        Categories
      </a>
      <form className={`flex items-center ${searchOpen ? 'w-full' : 'max-w-xs'} transition-all`}>
        <input
          type="search"
          placeholder="Search..."
          className={`border-none rounded-l-full py-2 px-4 bg-gray-700 text-white ${searchOpen ? 'block' : 'hidden'}`}
        />
        <button
          type="button"
          onClick={() => setSearchOpen(!searchOpen)}
          className="bg-blue-600 text-white p-2 rounded-r-full"
        >
          {searchOpen ? <FaTimes /> : <FaSearch />}
        </button>
      </form>
      <a href="#" className="relative">
        <FaBell className="text-xl" />
        <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-600 rounded-full flex items-center justify-center">8</span>
      </a>
      <a href="#">
        <FaUser className="w-9 h-9 rounded-full" />
      </a>
      <input
        type="checkbox"
        id="switch-mode"
        className="hidden"
        onChange={() => document.body.classList.toggle('dark')}
      />
      <label htmlFor="switch-mode" className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
        <span className="absolute top-1 left-1 w-4 h-4 bg-blue-600 rounded-full transition-transform"></span>
      </label>
    </nav>
  );
}

export default Navbar;
