import HotelNav from "./hotel_nav";
import Booking from "./Booking";
import wall from '../images/wall.jpg'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Hotels() {
  return (
    <div className="">
      
      <div className="" style={{ paddingBottom: '1px' }}>
        <HotelNav />
      </div>
      <div>
            <img src={wall} alt="Hotel" style={{ margin: '0',padding: '0',width: '98.9vw', height: '80vh' }} className="container"  />
      </div>
      <div className="mt-4 z-30">
        <Booking/>
      </div>
    </div>
  );
}