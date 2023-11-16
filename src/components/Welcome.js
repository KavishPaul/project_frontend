import Navbar from "./cs_navbar";
import Map from '../images/map.png';

import Card from './Card'; 
import Feedback from './Feedback'; 
export default function Welcome() {
  return (
    <div className="">
      <div className="" style={{ paddingTop: '0px' }}>
        <Navbar />
      </div>
      <div className="mt-7 mb-2">
           <Card/>
      </div>
      <div className="">
           <Feedback/>
      </div>
      <img src= {Map} alt='map'
        style={{ width: '57vw', height: '67vh', marginTop: '7vh',marginLeft: '40vw' }}
      /> 

    </div>
  );
}