// import React from 'react';
// import logo from './logo.png';
// // import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const HotelNav = () => {
//   return (
//     <nav className="top-0 left-0 w-full" style={{ backgroundColor: '#003B95', height: '20vh' }}>
//       <div className="flex items-center justify-between mr-6">
//         <a href="/" className="flex items-center">
//           <img src={logo} style={{ width: '250px', height: 'auto' }} className="mr-2 pt-3 cursor-pointer" alt="GoGlobe Logo" />
//         </a>

//         <div className="md:flex md:w-auto" id="navbar-sticky">
//           <ul className="flex md:flex-row md:space-x-8">
//             <li>
//               <a href="/" className="text-white text-xl cursor-pointer">HOME</a>
//             </li>
//             <li>
//               <a href="/Hotels" className="text-white text-xl">HOTELS</a>
//             </li>
//             <li>
//               <a href="/Flights" className="text-white text-xl">FLIGHTS</a>
//             </li>
//             <li>
//               <a href="/Tours" className="text-white text-xl">TOURS</a>
//             </li>
//             <li>
//               <a href="/AboutUs" className="text-white text-xl">ABOUT US</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default HotelNav;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const HotelNav = () => {
  return (
    <nav className="" style={{ backgroundColor: '#003B95', height: '20vh' }}>
      <div className="flex items-center justify-between mr-6">
        <Link to="/">
          <img src={logo} style={{ width: '15vw', height: '20vh' }} className="mr-2" alt="GoGlobe Logo" />
        </Link>
        <h1 className=" text-6xl pb-3 pl-9 ml-9 text-white flex justify-center" style={{ marginTop: '2vh',paddingTop:'0'}}>Hotels</h1>

        <div className="md:flex md:w-auto" id="navbar-sticky">
          <ul className="flex md:flex-row md:space-x-8">
            <li>
              <Link to="/" className="text-white text-xl" style={{cursor:'pointer'}}>HOME</Link>
            </li>
            <li>
              <Link to="/Flights" className="text-white text-xl">FLIGHTS</Link>
            </li>
            <li>
              <Link to="/Tours" className="text-white text-xl">TOURS</Link>
            </li>
            <li>
              <Link to="/AboutUs" className="text-white text-xl">ABOUT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HotelNav;