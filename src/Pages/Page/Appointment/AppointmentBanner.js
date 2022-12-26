import React from "react";
import bgImage from "../../../assets/images/bg.png";
import chairForPatient from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({date, setDate}) => {
  
  return (
    <div
      className="hero py-10 bg-base-200"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundRepeat:"no-repeat"
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt=""
          src={chairForPatient}
          className="lg:max-w-lg  rounded-lg shadow-2xl"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
         
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
