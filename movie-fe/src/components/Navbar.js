import { React, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.png";
import "../index.css";

let Navbar = () => {
  let activeClassName = "text-red-500";
  let inactiveClassname = "hover:text-red-500";
  return (
    <nav className="flex justify-between items-center h-16 bg-gray-900 px-6">
      <Link to="/" className="flex items-center text-white">
        <img src={logo} alt="Netflix" className="h-8" />
      </Link>
      <ul className="flex space-x-4 text-white">
        <li>
          <NavLink
            to="/popular"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassname
            }
          >
            Popular
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/nowplaying"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassname
            }
          >
            Now Playing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toprated"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassname
            }
          >
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/upcoming"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassname
            }
          >
            Up Coming
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
