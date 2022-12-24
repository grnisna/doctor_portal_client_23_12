import React from 'react';
import BabyCare from './BabyCare';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <BabyCare/>
            <MakeAppointment/>
        </div>
    );
};

export default Home;