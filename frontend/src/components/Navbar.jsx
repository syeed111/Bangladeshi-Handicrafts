/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

const Navbar = () => {
  const { logState, logout, setLoginStatus } = useContext(UserContext);

  useEffect(() => {
    const rawData = localStorage.getItem("userData");
    const userData = rawData ? JSON.parse(rawData) : {};
    setLoginStatus(true);
  }, [setLoginStatus]);

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/favourite">Favourites</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-bold">
          Bangladeshi Handicrafts
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-xl font-semibold">
              Home
            </Link>
          </li>

          <li>
            <Link to="/favourite" className="text-xl font-semibold">
              Favourites
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!logState ? (
          <Link to="/login" className="btn">
            Login
          </Link>
        ) : (
          <button className="btn" onClick={logout}>
            Logout
          </button>
        )}
        <label className="flex cursor-pointer ml-2 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="forest"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
