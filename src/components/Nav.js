import { UilBed } from '@iconscout/react-unicons'
import { UilPlane } from '@iconscout/react-unicons'
import { UilGlobe } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'

function Nav(){
    return(
        <div className='Naavbarrr flex flex-row items-center align-center pb-2'>
                <a href='/Hotels' className='flex'><UilBed style={{color:'black',marginRight:'7px',marginTop:'4px'}}/> HOTELS</a>
                <a href='/Flights' className='flex'><UilPlane style={{color:'black',marginRight:'7px',marginTop:'4px'}}/> FLIGHTS</a>
                <a href='/Tours' className='flex'><UilGlobe style={{color:'black',marginRight:'7px',marginTop:'4px'}}/> TOURS</a>
                <a href='/AboutUs' className='flex'><UilUsersAlt style={{color:'black',marginRight:'7px',marginTop:'4px'}}/> ABOUT US</a>
        </div>
    );
}

export default Nav;

// import { UilBed } from '@iconscout/react-unicons';
// import { UilPlane } from '@iconscout/react-unicons';
// import { UilGlobe } from '@iconscout/react-unicons';
// import { UilUsersAlt } from '@iconscout/react-unicons';

// function Nav() {
//   return (
//     <div className="Naavbarrr bg-blue-900 h-16 flex justify-center items-center" style={{ backgroundColor: '#003B95' }}>
//       <ul className="flex text-white">
//         <li className="text-white flex items-center">
//           <a href="/Hotels" className="text-white flex items-center px-3">
//             <UilBed className="text-black" /> Hotel
//           </a>
//         </li>
//         <li className="text-white flex items-center">
//           <a href="#" className="text-white flex items-center px-3">
//             <UilPlane className="text-black" /> Flight
//           </a>
//         </li>
//         <li className="text-white flex items-center">
//           <a href="#" className="text-white flex items-center px-3">
//             <UilGlobe className="text-black" /> Tours
//           </a>
//         </li>
//         <li className="text-white flex items-center">
//           <a href="#" className="text-white flex items-center px-3">
//             <UilUsersAlt className="text-black" /> About us
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Nav;