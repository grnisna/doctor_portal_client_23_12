import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatement, date, setTreatement }) => {
  const { name, slots } = treatement;
  
  const handleBooking = event =>{
    event.preventDefault();
    const slot = event.target.slot.value;
    setTreatement(null)
    console.log(name,slot,date)
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-center my-3">
            Booking for: <span className="text-primary"> {name} </span>{" "}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 justify-items-center">
            <input
              type="text"
              Value={format(date, "PP")}
              disabled
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select  w-full max-w-xs">
              {
                slots.map(slot =><option>{slot}</option> )
              }
            </select>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Your Phone No"
              name="phone"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              Value="submit"
              class="input input-bordered w-full max-w-xs btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
