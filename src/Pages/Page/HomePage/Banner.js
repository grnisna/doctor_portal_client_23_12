import React from "react";
import chair from "../../../assets/images/chair.png"

const Banner = () => {
  return (
    <div className="hero min-h-screen lg:px-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            alt="chair"
            src={chair}
            className="lg:max-w-lg lg:rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            amar soner Bangla ami tomay valobasi chirodin tomar akash tomar
            batas amar pranee bazay basi soner bangla ami tomar valobasi
            chirodin tomar akash tomar batas.n tomar akash tomar
            batas amar pranee bazay basi soner bangla ami tomar valobasi
          </p>
          <button className="btn font-bold border-none text-base-100 bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
