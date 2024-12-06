import React from 'react';
import Bannerimg from '../assets/Banner.jpg'
import Bannerimg2 from '../assets/bn-2.avif'
import Bannerimg3 from '../assets/bn-3.avif'
import Bannerimg4 from '../assets/bn-4.png'

const Banner = () => {
    return (
        <div className=''>
            <div className="w-full carousel max-h-96">
                <div id="item1" className="w-full carousel-item">
                    <img
                        src={Bannerimg2}
                        className="w-full " />
                </div>
                <div id="item2" className="w-full carousel-item">
                    <img
                        src={Bannerimg}
                        className="w-full" />
                </div>
                <div id="item3" className="w-full carousel-item">
                    <img
                        src={Bannerimg3}
                        className="w-full" />
                </div>
                <div id="item4" className="w-full carousel-item">
                    <img
                        src={Bannerimg4}
                        className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;