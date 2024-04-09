import React from "react";
import logo from "/logo.png";
import { MdOutlineWifiCalling3 } from "react-icons/md";


const Navbar = () => {

  const navItems = (
    <>
      <li>
        <a className="text-green">Home</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <a href="/menu">All</a>
            </li>
            <li>
              <a>Salad</a>
            </li>
            <li>
              <a>Pizza</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <a>Online Order</a>
            </li>
            <li>
              <a>Table Booking</a>
            </li>
            <li>
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  );
  return (
    <header className="max-w-screen-2x1 container mx-auto">
      <div className="navbar x1:px-24">
        <div className="navbar-start">
          <div className="dropdown">
         
          </div>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end ">
            <a className="btn"><MdOutlineWifiCalling3 />Contact</a>            

        </div>
      </div>
    </header>
  );
};

export default Navbar;