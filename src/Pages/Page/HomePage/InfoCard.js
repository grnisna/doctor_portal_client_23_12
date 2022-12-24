import React from "react";

const InfoCard = ({ imgOne,bgClass,title }) => {
  return (
      <div class={`card lg:card-side  shadow-xl ${bgClass}`}>
        <figure>
          <img className=" lg:p-5 p-2 " src={imgOne} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>Amamr soenr bangla ami tomay valobasi.</p>
        </div>
      </div>
  );
};

export default InfoCard;
