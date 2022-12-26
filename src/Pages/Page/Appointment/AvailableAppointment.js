import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const AvailableAppointment = ({date}) => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect( ()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  } ,[])
  return (
    <div>
      <p>
        Selected Date:{" "}
        <span className="text-primary font-bold text-xl">
          {" "}
          {format(date, "PP")}{" "}
        </span>
      </p>

      <div>

      </div>
    </div>
  );
};

export default AvailableAppointment;
