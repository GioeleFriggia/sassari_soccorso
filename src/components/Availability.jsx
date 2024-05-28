import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Availability = () => {
  const user = useSelector((state) => state.auth.user); // Accedi allo user dallo stato di Redux
  const token = useSelector((state) => state.auth.token); // Accedi al token dallo stato di Redux

  const [availabilities, setAvailabilities] = useState([]);
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");

  useEffect(() => {
    if (user && token) {
      axios
        .get(`http://localhost:8080/user/availability`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setAvailabilities(response.data))
        .catch((error) =>
          console.error("Error fetching availabilities:", error)
        );
    }
  }, [user, token]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user && token) {
      axios
        .post(
          "http://localhost:8080/user/availability",
          { date, shift },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          alert("Availability submitted successfully");
          setAvailabilities([
            ...availabilities,
            { date, shift, user: { name: user.name } },
          ]);
        })
        .catch((error) =>
          console.error("Error submitting availability:", error)
        );
    } else {
      alert("User is not authenticated.");
    }
  };

  return (
    <div>
      <h1>Your Availabilities</h1>
      {user && <p>Welcome, {user.name}</p>}{" "}
      {/* Mostra il nome dell'utente se disponibile */}
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Shift:
          <select value={shift} onChange={(e) => setShift(e.target.value)}>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="night">Night</option>
          </select>
        </label>
        <button type="submit">Submit Availability</button>
      </form>
    </div>
  );
};

export default Availability;
