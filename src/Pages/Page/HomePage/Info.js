import React from 'react';
import InfoCard from './InfoCard';
import phone from '../../../assets/icons/phone.svg';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-4 lg:mx-0  my-5'>
          <InfoCard bgClass="bg-gradient-to-r from-primary to-secondary" title={"Opening Hours"} imgOne={clock}></InfoCard>
          <InfoCard title={"Contacts Us"} bgClass="bg-accent" imgOne={phone}></InfoCard>
          <InfoCard title={"Visits Our Location"} bgClass="bg-gradient-to-r from-secondary to-primary" imgOne={marker}></InfoCard>
        </div>
    );
};

export default Info;