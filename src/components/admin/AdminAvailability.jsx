import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminAvailability = () => {
  const [availabilities, setAvailabilities] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/availabilities")
      .then((response) => {
        setAvailabilities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching availabilities:", error);
      });
  }, []);

  const getAvailabilitiesByDayAndShift = (day, shift) => {
    if (!Array.isArray(availabilities)) {
      return [];
    }
    return availabilities.filter(
      (avail) => avail.day === day && avail.shift === shift
    );
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const shifts = ["MATTINO", "POMERIGGIO", "NOTTE"];

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Day/Shift</th>
            {shifts.map((shift) => (
              <th key={shift}>{shift}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {daysOfWeek.map((day) => (
            <tr key={day}>
              <td>{day}</td>
              {shifts.map((shift) => (
                <td key={shift}>
                  <ul>
                    {getAvailabilitiesByDayAndShift(day, shift).map(
                      (availability) => (
                        <li key={availability.id}>{availability.user.name}</li>
                      )
                    )}
                  </ul>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAvailability;
