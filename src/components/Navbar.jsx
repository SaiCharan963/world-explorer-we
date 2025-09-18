import React from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import Loader from './Loader';

const Navbar = () => {
  return (
    <div className="p-5 bg-gray-700 w-full min-h-screen text-white">
      <div className="flex flex-col md:grid md:grid-cols-3 bg-gray-900 p-4 m-3 rounded-2xl items-center">
        {/* Logo */}
        <h1 className="font-bold mb-3 md:mb-0 md:col-span-2 pl-5 text-2xl">
          <Link to={"/"}>World Explorer</Link>
        </h1>

        {/* Links */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-around">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/country"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Country
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Contact
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};


export default Navbar