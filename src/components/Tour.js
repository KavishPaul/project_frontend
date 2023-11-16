import Navbar from "./tour_nav";
import Booking from "./TourBooking";
import wall from '../images/tourwall.png';
export default function Tours() {
 
  return (
    <div>
      <div className="relative">
        {/* <h1 className="text-6xl py-20 font-bold text-white text-center absolute w-full z-30" style={{ marginTop: '0' }}>Tour</h1> */}
        <div>
          <Navbar />
        </div>
        <div>
          <img src={wall}  style={{ marginTop: '0', width: '100%', height: '80vh' }} className="mr-2" />
        </div>
        <div className="mt-4 z-30">
          <Booking />
        </div>
      </div>
    </div>
  );
}