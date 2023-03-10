import React from "react";
import babyImage from '../../../assets/images/treatment.png';


const BabyCare = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={babyImage}
          class="lg:max-w-sm rounded-lg shadow-2xl"
          alt="babyImage"
        />
        <div className=" ml-10">
          <h1 class="lg:text-5xl text-xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p class="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BabyCare;
