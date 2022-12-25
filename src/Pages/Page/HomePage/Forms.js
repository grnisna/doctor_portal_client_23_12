import React from "react";
import bgImage from "../../../assets/images/appointment.png";

const Forms = () => {
  return (
    <div
      style={{
        background: `url(${bgImage})`,
      }}
    >
        <h3 className="font-bold text-primary text-center pt-10" >Contacs us</h3>
        <h3 className="text-center text-2xl text-base-100" >Stay Connected With Us</h3>
      <form className="w-96 mx-auto pt-12">
        <input
          type="email"
          placeholder="Email Address"
          class="input input-bordered input-accent lg:w-full lg:m-2"
        />
        <input
          type="text"
          placeholder="Subjects"
          class="input input-bordered input-accent lg:w-full lg:m-2"
        />
        <textarea class="textarea textarea-accent lg:m-2 lg:w-full" placeholder="Type here..."></textarea><br />
        <input type="submit" className="btn btn-primary" />
      </form>
      <br />
    </div>
  );
};

export default Forms;
