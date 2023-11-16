import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const about_nav = () => {
  return (
    <nav className="" style={{backgroundColor: '#003B95', height: '20vh' }}>
      <div className="flex items-center justify-between mr-6">
        <Link to="/">
          <img src={logo} style={{ width: '15vw', height: '20vh' }} className="mr-2" alt="GoGlobe Logo" />
        </Link>
        <h1 className=" text-6xl pb-3 pl-9 ml-9 text-white flex justify-center" style={{ marginTop: '2vh'}}>About Us</h1>

        <div className="md:flex md:w-auto" id="navbar-sticky">
          <ul className="flex md:flex-row md:space-x-8">
            <li>
              <Link to="/" className="text-white text-xl">HOME</Link>
            </li>
            <li>
              <Link to="/Hotels" className="text-white text-xl">HOTELS</Link>
            </li>
            <li>
              <Link to="/Flights" className="text-white text-xl">FLIGHTS</Link>
            </li>
            <li>
              <Link to="/Tours" className="text-white text-xl">TOURS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default about_nav;