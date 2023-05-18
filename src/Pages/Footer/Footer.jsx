import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="md: flex justify-between ">
        <div className="logo">
          <h1>ToyLand</h1>
        </div>
        <div className="menu">
          <ul className="flex flex-col">
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/allToys">All Toys</Link>
          </ul>
        </div>
        <div className="address">
          <h1>Address</h1>
        </div>
        <div className="newsletter">
          <h1>Newsletter</h1>
        </div>
      </div>
      <p className="text-center"><small>Copyright all right reserved @ 2023</small></p>
    </div>
  );
};

export default Footer;
