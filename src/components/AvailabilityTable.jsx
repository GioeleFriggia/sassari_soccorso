import React from "react";

const AvailabilityTable = ({ availabilities }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Shift</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {availabilities.map((availability, index) => (
          <tr key={index}>
            <td>{new Date(availability.date).toLocaleDateString()}</td>
            <td>{availability.shift}</td>
            <td>{availability.user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AvailabilityTable;
