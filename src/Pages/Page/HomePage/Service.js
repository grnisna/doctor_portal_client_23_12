import React from "react";

const Service = ({service}) => {
  return (
    <div class="card lg:w-96 bg-base-100 shadow-xl m-5">
      <figure class="px-10 pt-10">
        <img
          src={service.img}
          alt="imag"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>{service.des}</p>
        <div class="card-actions">
        </div>
      </div>
    </div>
  );
};

export default Service;
