import logo from './logo.png'
import custSup from '../images/customer_support.png';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div className='Header'>
            <img src={logo} alt="logo"></img>
            <div className='buttons mr-6 mb-6'>
                <Link to='/CustomerSupport' className='cust-button'>
                    <img className='' src={custSup} alt='Customer Support'></img>                
                </Link>
                <Link to='/Login' className="link-button mt-11" >
                    <button className='head-button'>Login</button>
                </Link>
                <Link to='/SignUp' className="link-button mt-11">
                    <button className='head-button'>Signup</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;