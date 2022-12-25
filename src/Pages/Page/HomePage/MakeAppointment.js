import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import FocusButton from "../../Shared/FocusButton";

const MakeAppointment = () => {
  return (
    <div className="flex justify-center items-center px-28" style={{
        background:`url(${appointment})`
    }}>
      <div className="lg:mt-[-100px]">
        <img className="max-w-lg" src={doctor} alt="" />
      </div>
      <div>
        <h4 className="text-primary font-bold">Appointment</h4>
        <h2 className="text-white font-bold text-2xl">Make an appointment Today</h2>
        <p className="text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        
        <FocusButton>Let's Starts</FocusButton>
      </div>
    </div>
  );
};

export default MakeAppointment;
