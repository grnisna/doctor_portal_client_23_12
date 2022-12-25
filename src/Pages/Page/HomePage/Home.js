import React from 'react';
import BabyCare from './BabyCare';
import Banner from './Banner';
import Forms from './Forms';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <BabyCare/>
            <MakeAppointment/>
            <Testimonials/>
            <Forms/>
        </div>
    );
};

export default Home;