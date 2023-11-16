// import wallpaper from './wallpaper.jpg';
import flight from '../images/flights.jpg';
import taxi from '../images/taxi.jpg';
import food from '../images/food.jpg';
import trident from '../images/trident.jpg';
import paris from '../images/paris.jpg';
import melbourne from '../images/melbourne.jpg';
import seoul from '../images/seoul.jpg';
import london from '../images/london.jpg';
import amsterdam from '../images/amsterdam.jpg';
import india from '../images/india.jpg';
import madrid from '../images/madrid.jpg';
import waterfall from '../images/waterfall.jpg';
import christmas from '../images/christmas.jpg';
import europe from '../images/europe.jpg';
import bridge from '../images/bridge.jpg';

// import React from 'react';

import React from "react"
import {useLocation, useNavigate} from "react-router-dom"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home(){
    const location=useLocation()

    return (
        <div>
           <h1 className="bg-green-500 text-white p-4 mb-4 rounded"></h1>
          Hello{location.state.id} You have successfully logged in!
        </div>
        );
}

const Main = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const settings1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const settings2 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="Mainn">
            {/* Other content */}
            <div className="Main-1">
                {/* <img src={wallpaper} className='bg-img'></img> */}
                <h1>Exceptional Escapes Crafted Just for You</h1>
            </div>

            <div className="Main--2_custom">
                <h1 className='text-3xl font-bold py-5'>Offers</h1>
                <h3 className='text-xl font-bold pb-4'>Deals and special offers for you</h3>
            </div>
            <div className='Main-3'>
                <div className="slide-container">
                    <Slider {...settings}>
                        <div className="card">
                            <div className="card-image">
                                <img src={flight} alt="Flight" className="card-img" />
                                <h2 className="name text-xl mt-2">30% off on flights to special destinations!</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img src={taxi} alt="Taxi" className="card-img" />
                                <h2 className="name text-xl mt-2">Upto 15kms off on your first ride!</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img src={food} alt="Food" className="card-img" />
                                <h2 className="name text-xl mt-2">Free meals in hotels upto Rs 3000 !</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img src={trident} alt="Trident" className="card-img" />
                                <h2 className="name text-xl mt-2">Upto 30% savings on trident hotels!</h2>
                            </div>
                        </div>
                        {/* Add more slides here */}
                    </Slider>
                </div>
            </div>
            <div className='Main-4'>
                <h1 className='text-3xl font-bold py-5'>Explore the world</h1>
                <h3 className='text-xl font-bold pb-4 pt-1'>These popular destinations have a lot to offer</h3>
            </div>
            <div className='Main-5'>
                <div className="slide-container">
                        <Slider {...settings1}>
                            <div className="card-ex">
                                <div className="card-image-ex">
                                    <img src={paris} alt="Paris" className="card-img-ex" />
                                    <h2 className="name text-2xl m-2">Paris</h2>
                                </div>
                            </div>
                            <div className="card-ex">
                                <div className="card-image-ex">
                                    <img src={melbourne} alt="Melbourne" className="card-img-ex" />
                                    <h2 className="name text-2xl m-2">Melbourne</h2>
                                </div>
                            </div>
                            <div className="card-ex">
                                <div className="card-image-ex">
                                    <img src={seoul} alt="Seoul" className="card-img-ex" />
                                    <h2 className="name text-2xl m-2">Seoul</h2>
                                </div>
                            </div>
                            <div className="card-ex">
                                <div className="card-image-ex">
                                    <img src={london} alt="London" className="card-img-ex" />
                                    <h2 className="name text-2xl m-2">London</h2>
                                </div>
                            </div>
                            <div className="card-ex">
                                <div className="card-image-ex">
                                    <img src={amsterdam} alt="Amsterdam" className="card-img-ex" />
                                    <h2 className="name text-2xl m-2">Amsterdam</h2>
                                </div>
                            </div>
                            <div className="card-ex">
                                <div className="card-image-ex">
                                    <img src={india} alt="India" className="card-img-ex" />
                                    <h2 className="name text-2xl m-2">India</h2>
                                </div>
                            </div>
                            <div className="card-ex">
                                <div className="card-image-ex">
                                    <img src={madrid} alt="Madrid" className="card-img-ex" />
                                    <h2 className="name text-2xl m-2">Madrid</h2>
                                </div>
                            </div>
                            {/* Add more slides here */}
                        </Slider>
                </div>
            </div>
            <div className='Main-6'>
                <h1 className='text-3xl font-bold py-4'>Discover your travel story</h1>
                <h3 className='text-xl font-bold pb-6 pt-2'>Get inspiration for your next trip here</h3>
            </div>
            <div className='Main-7'>
                <div className="slide-container">
                            <Slider {...settings2}>
                                <div className="card-disc">
                                    <div className="card-image-disc">
                                        <img src={waterfall} alt="Waterfall" className="card-img-ex" />
                                        <a href='https://www.hindustantimes.com/photos/lifestyle/8-world-s-most-beautiful-waterfalls-you-must-see-at-least-once-101679659072349-3.html' target='_blank' className="name">10 waterfalls to see atleast once in your life !</a>
                                    </div>
                                </div>
                                <div className="card-disc">
                                    <div className="card-image-disc">
                                        <img src={christmas} alt="Christmas" className="card-img-ex" />
                                        <a href='https://www.readersdigest.ca/travel/world/10-most-festive-christmas-cities-0/' target='_blank' className="name">10 best cities for splendid Christmas !</a>
                                    </div>
                                </div>
                                <div className="card-disc">
                                    <div className="card-image-disc">
                                        <img src={europe} alt="Europe" className="card-img-ex" />
                                        <a href='https://www.en-vols.com/en/getaways/travel/european-cities-budget/' target='_blank' className="name">10 most affordable travel cities in Europe in 2023 !</a>
                                    </div>
                                </div>
                                <div className="card-disc">
                                    <div className="card-image-disc">
                                        <img src={bridge} alt="Bridge" className="card-img-ex" />
                                        <a href='https://www.cnbc.com/2018/07/26/earth-media-top-travel-destinations-for-young-people.html' target='_blank' className="name">Top 10 travel destinations for yound people in 2023 !</a>
                                    </div>
                                </div>
                                {/* Add more slides here */}
                            </Slider>
                </div>
            </div>
        </div>
    );
}

export default Main;
        // <div className="Main">
            // <div className="Main-1">
            //     {/* <img src={wallpaper} className='bg-img'></img> */}
            //     <h1>Exceptional Escapes Crafted Just for You</h1>
            // </div>

            // <div className="Main-2">
            //     <h1>Offers</h1>
            //     <h3>Deals and special offers for you</h3>
            // </div>

        //     <div className='Main-3'>
        //         <div class="slide-container">
        //             <div class="slide-content">
        //                 <div class="card-wrapper">
        //                     <div class="card">
        //                         <div class="image-content">
        //                             <span class="overlay"></span>

        //                             <div class="card-image">
        //                                 <img src={flight} alt="Flight" className="card-img"></img>
        //                                 <h2 class="name">30% off on flights to special destinations</h2>
        //                             </div>
        //                         </div>

        //                         <div class="card-content">
        //                             {/* <h2 class="name">30% off on flights to special destinations</h2> */}
        //                         </div>
        //                     </div>
        //                     <div class="card">
        //                         <div class="image-content">
        //                             <span class="overlay"></span>

        //                             <div class="card-image">
        //                                 <img src={flight} alt="Flight" className="card-img"></img>
        //                                 <h2 class="name">30% off on flights to special destinations</h2>
        //                             </div>
        //                         </div>

        //                         <div class="card-content">
        //                             {/* <h2 class="name">30% off on flights to special destinations</h2> */}
        //                         </div>
        //                     </div>
        //                     <div class="card">
        //                         <div class="image-content">
        //                             <span class="overlay"></span>

        //                             <div class="card-image">
        //                                 <img src={flight} alt="Flight" className="card-img"></img>
        //                                 <h2 class="name">30% off on flights to special destinations</h2>
        //                             </div>
        //                         </div>

        //                         <div class="card-content">
        //                             {/* <h2 class="name">30% off on flights to special destinations</h2> */}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
