import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css"; // Import the CSS file for styling

const ChecklistVanoSanitarioList = () => {
  const [checklists, setChecklists] = useState([]);
  const [error, setError] = useState(null);

  const fetchChecklists = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        setError("No token found. Please log in.");
        return;
      }

      console.log("Token:", token); // Debugging: Log the token

      const response = await axios.get(
        "http://localhost:8080/admin/checklistVanoSanitario",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response status:", response.status); // Log the response status
      console.log("Response data:", response.data); // Log the response data

      if (response.status === 200) {
        const checklists = response.data.content || [];
        console.log("Lista checklist vano sanitario:", checklists);
        setChecklists(checklists);
      } else {
        console.error("Errore nel recuperare la lista delle checklist");
        setError("Errore nel recuperare la lista delle checklist");
      }
    } catch (error) {
      console.error("Errore nel recuperare la lista delle checklist:", error);
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        setError(`Error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Request data:", error.request);
        setError("No response received from the server");
      } else {
        // Something else caused the error
        console.error("Error message:", error.message);
        setError(`Error: ${error.message}`);
      }
      setChecklists([]);
    }
  };

  useEffect(() => {
    fetchChecklists();
  }, []);

  return (
    <div className="checklist-vanosanitario-container">
      <h1>Lista delle Checklist Vano Sanitario</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="styled-table-vanosanitario">
        <thead>
          <tr>
            <th>Data</th>
            <th>Ora</th>
            <th>Ambulanza</th>
            <th>Targa</th>
            <th>Equipe</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {checklists.length > 0 ? (
            checklists.map((checklist) => (
              <tr key={checklist.id}>
                <td data-label="Data">{checklist.date}</td>
                <td data-label="Ora">{checklist.time}</td>
                <td data-label="Ambulanza">{checklist.ambulance}</td>
                <td data-label="Targa">{checklist.plate}</td>
                <td data-label="Equipe">{checklist.team}</td>
                <td data-label="Note">{checklist.note}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Nessuna checklist trovata</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ChecklistVanoSanitarioList;
