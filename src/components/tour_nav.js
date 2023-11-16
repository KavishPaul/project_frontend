import React from 'react';
import logo from './logo.png';

const Navbar = () => {
  return (
    <nav className="" style={{ backgroundColor: '#003B95', height: '20vh',marginBottom:'1px' }}>
      <div className="flex items-center justify-between mr-6">
        <a href="/" className="flex items-center">
          <img src={logo} style={{ width: '15vw', height: '20vh' }} className="mr-2" alt="GoGlobe Logo" />
        </a>

        <h1 className=" text-6xl pb-3 pl-9 ml-9 text-white flex justify-center" style={{ marginTop: '10px' }}>Tours</h1>

        <div className="hidden md:flex md:items-center md:w-auto" id="navbar-sticky">
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <a href="/" className="text-white text-xl ">HOME</a>
            </li>
            <li>
              <a href="/Hotels" className="text-white text-xl">HOTELS</a>
            </li>
            <li>
              <a href="/Flights" className="text-white text-xl">FLIGHTS</a>
            </li>
            <li>
              <a href="/AboutUs" className="text-white text-xl">ABOUT US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;