import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    // Background div
    <div
      data-aos="fade-down"
      className="fixed right-0 top-0 w-full bg-black/10 backdrop-blur-sm py-4 z-50"
    >
      {/* Container with padding: 2rem (extended in the config) */}
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={logo} alt="Company Logo" className="w-10" />
            <span>THE SPACE</span>
          </div>
          {/* Menu */}
          <div className="text-white">
            <ul className="flex items-center gap-6 text-lg py-4">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Galaxy</a>
              </li>
              <li>
                <a href="#">Satelite</a>
              </li>
            </ul>
          </div>
          {/* Login button */}
          <div>
            <button className="border-2 border-white text-white rounded-md px-3 py-1">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
