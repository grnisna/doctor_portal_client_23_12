import React from "react";

const Services = ({ service,setTreatement }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class=" text-primary text-xl text-center font-bold">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[1]}</span>
          ) : (
            <span className="text-red-500">No Space Available</span>
          )}
        </p>
        <p>
          {slots.length}{" "}
          {slots.length > 1 ? <span> spaces</span> : <span>space </span>}{" "}
          available
        </p>
        <div class="card-actions justify-center">
          <label onClick={()=>setTreatement(service)} for="my-modal-6" class="btn btn-primary">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Services;
