import React from 'react';
import InfoCard from './InfoCard';
import phone from '../../../assets/icons/phone.svg';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 my-5'>
          <InfoCard imgOne={clock}></InfoCard>
          <InfoCard imgOne={phone}></InfoCard>
          <InfoCard imgOne={marker}></InfoCard>
        </div>
    );
};

export default Info;