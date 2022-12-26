import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({date}) => {
  return (
    <div>
      <p>
        Selected Date:{" "}
        <span className="text-primary font-bold text-xl">
          {" "}
          {format(date, "PP")}{" "}
        </span>
      </p>
    </div>
  );
};

export default AvailableAppointment;
