import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import peopleOne from "../../../assets/images/people1.png";
import peopleTwo from "../../../assets/images/people2.png";
import peopleThree from "../../../assets/images/people3.png";
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:"Williams sons",
            review:"something is better then  lazy dog lorem ipsum doller set lazy dog lorem ipsum doller set nothing a fox jump over the lazy dog",
            img: peopleOne,
            subtitle:"little start"
        },
        {
            _id:2,
            name:"Abrahmam linkon",
            review:"something is better then nothing a fox jump over the lazy dog lorem ipsum doller set  lazy dog lorem ipsum doller set lazy dog lorem ipsum doller set lazy dog lorem ipsum doller set",
            img: peopleTwo,
            subtitle:"little start"
        },
        {
            _id:3,
            name:"zondis akondhos",
            review:"something is better then nothing a fox jump over the lazy dog  lazy dog lorem ipsum doller set lazy dog lorem ipsum doller set",
            img: peopleThree,
            subtitle:"little start"
        },
    ]
    return (
        <div>
            <div className='flex justify-between px-10 my-5 '>
                <div>
                    <h4 className='text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl'>What Our Patient Say....</h2>
                </div>
                <div>
                    <img className='w-52' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;