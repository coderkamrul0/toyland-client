import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navItems = (
    <>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/allToys"}>All Toys</Link></li>
      {
        user && <li><Link to={"/addaToy"}>Add A Toy</Link></li>
      }
      {
        user && <li><Link to={"/myToys"}>My Toys</Link></li>
      }
      <li><Link to={"/blogs"}>Blogs</Link></li>
      
    </>
  );

  return (
    <div className="navbar bg-[#E9F8FF]">
      <div className="navbar-start">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img
            className="w-[100px]"
            src={"https://i.ibb.co/b5x01DM/logo.png"}
            alt="ToyLand"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {
          user?. uid && (
            <img
                style={{ height: "40px", width: "40px", borderRadius: '50%' }}
                src={user.photoURL}
                alt="Profile Picture"
                data-toggle="tooltip"
                title={user.displayName}
              />
          )
        }
        {
          user? (
            <button onClick={handleLogOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign Out</button>
          ):
          <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Login</button>
        </Link>}
      </div>
    </div>
  );
};

export default NavBar;
