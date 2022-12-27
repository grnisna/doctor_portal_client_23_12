import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Services from "./Services";

const AvailableAppointment = ({date}) => {
  const [services, setServices] = useState([]);
  const [treatement, setTreatement] = useState(null);

  useEffect( ()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  } ,[])

  return (
    <div>
      <p className="text-center text-xl text-gray-500 my-5">
        Selected Date:{" "}
        <span className="text-primary font-bold text-xl">
          {" "}
          {format(date, "PP")}{" "}
        </span>
      </p>

      <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 gap-3">
              {
                services.map(service => <Services
                  key={service._id}
                  service={service}
                  setTreatement={setTreatement}
                  >
                     </Services>)
              }
      </div>
      {treatement && <BookingModal treatement={treatement} setTreatement={setTreatement} date={date} ></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
