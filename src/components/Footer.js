import { UilInstagramAlt } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'

function Footer(){
    return(
        <div className='Footer'>
            <div className=" flex justify-center text-white text-5xl">
                <UilInstagramAlt className='icon m-5 bg-white border-2 rounded-2xl h-8 w-8'/>
                <UilTwitter className='icon m-5 bg-white border-2 rounded-2xl h-8 w-8'/>
                <UilFacebookF className='icon m-5 bg-white border-2 rounded-2xl h-8 w-8'/>
            </div>
            <div className='flex justify-center text-white text-xl'>
                <h6 className='px-2'>Marketing</h6>
                <h6 className='px-2'>Info</h6>
                <h6 className='px-2'>Support</h6>
            </div>
            <div className='text-center text-white text-l pt-3'>
                &copy; Team 434
            </div>
        </div>
    );
}

export default Footer;