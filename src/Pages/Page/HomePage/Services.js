import React from 'react';
import Service from './Service';
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";

const Services = () => {

    const services = [
        {
            _id:1,
            name:"Theeth Whitening",
            img: whitening,
            des:"amar soner bangla ami tomay valobasi chirodin tomar"
        },
        {
            _id:2,
            name:"Cavity Filling",
            img: cavity,
            des:"akash tomar batas amar pranee bazay basi soner bangla"
        },
        {
            _id:3,
            name:"Fluoride Treatement",
            img: fluoride,
            des:"omaa fagune tor amer boner granee pagol kroe"
        },
    ]


    return (
        <div>
            <div className='text-center my-12 '>
                <h3 className='text-primary uppercase font-bold text-xl'>Our services</h3>
                <h2 className='font-bold text-xl'>Services We provied</h2>
            </div>
            <div className='lg:flex justify-center items-center '>
                {
                    services.map(service => <Service 
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;