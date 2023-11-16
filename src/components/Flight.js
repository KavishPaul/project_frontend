import Navbar from "./flight_nav";
import FlightBooking from "./FlightBooking";
import plane from '../images/plane.jpg';
export default function Flights() {
 
  return (
    <div>
      <div className="">
        {/* <h1 className="text-6xl py-20 font-bold text-white text-center absolute w-full z-30" style={{ marginTop: '0' }}>Flights</h1> */}
        <div className="" style={{ paddingBottom: '1px' }}>
          <Navbar />
        </div>
        <div>
          <img src={plane} alt="Airplane" style={{ marginTop: '0', width: '100%', height: '80vh' }} className="mr-2" />
        </div>
        <div className="mt-4 z-30">
          <FlightBooking />
        </div>
      </div>
    </div>
  );
}