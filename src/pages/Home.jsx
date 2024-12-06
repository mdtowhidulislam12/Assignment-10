import React from 'react';
import Banner from '../Components/Banner';
import LatestVisaSection from '../Components/LatestVisaSection';
import ServicesSection from '../Components/ServicesSection';
import AboutUs from '../Components/AboutUs';

const Home = () => {
    return (
        <div className=''>
            <div>
            <Banner></Banner>
            </div>
            <div>
                <LatestVisaSection></LatestVisaSection>
            </div>

            <div>
                <AboutUs></AboutUs>
            </div>

            <div>
                <ServicesSection></ServicesSection>
            </div>
        </div>
    );
};

export default Home;