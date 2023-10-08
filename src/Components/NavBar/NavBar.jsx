import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { AuthContext } from "../Hook/AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then();
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-600 text-2xl"
              : "text-xl"
          }
        >
          <FaHome></FaHome>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/booking"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 underline font-extrabold"
              : ""
          }
        >
          Booked
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 underline font-extrabold"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 text-2xl"
              : "text-xl"
          }
        >
          <FaPhone></FaPhone>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar pt-5">
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="navbar-start"
      >
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-bold shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="normal-case">
          <img
            className="h-16"
            src="https://i.ibb.co/rp2Jymq/logo-8.png"
            alt=""
          />
        </a>
        <p className="text-xl font-extrabold font-serif bg-gradient-to-r from-green-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 inline-block text-transparent bg-clip-text">
          ST<span className="text-red-500">@</span>R EVENT
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold px-1">{navLink}</ul>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="navbar-end gap-3"
      >
        <p className="mt-2 font-serif hidden lg:contents text-black">{user?.displayName}</p>
        <div className="text-3xl">
          {user?.photoURL ? (
            <div className="avatar">
              <div className="w-12 mt-2 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          ) : (
            <FaUserCircle></FaUserCircle>
          )}
        </div>
        {user ? (
          <Link
            onClick={handleLogOut}
            className="btn bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white"
            to="/"
          >
            LogOut
          </Link>
        ) : (
          <Link
            className="btn bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white"
            to="/login"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
