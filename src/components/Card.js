import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';
export default function Card() { 
    return ( 
        <div > 
            <div className="h-52 ml-40  
                            mt-15 w-96 flex-col float-left
                            rounded-xl bg-secondary bg-clip-border  
                            text-gray-700 shadow-2xl py-7"> 
                    <div className="p-6">
        <h5 className="text-center mr-4 mb-2 block font-sans text-xl font-semibold text-blue-gray-900 antialiased text-bold">
          Reach Us At
        </h5>
        <ul>
          <li className="mt-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +91-9998887776
          </li>
          <li className="mt-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            feedback@goglobetravels.org
          </li>
          <li className="mt-2">
            <FontAwesomeIcon icon={faMapPin} className="mr-2" />
            1234 Elm Street, Suite 567, Willow Creek Plaza,
          </li>
        </ul>
                </div>
            </div>
      </div>
    );
}