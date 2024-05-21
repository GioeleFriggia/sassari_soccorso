import React, { useState } from "react";

function ChecklistMezzo() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    ambulance: "",
    plate: "",
    initialKm: "",
    fuelLevel: 0,
    motorOilLevel: 0,
    coolantLevel: 0,
    brakeFluidLevel: 0,
    steeringFluidLevel: 0,
    electricalSystem: false,
    warningLights: false,
    frontLights: "",
    rearLights: "",
    rightSideLights: "",
    leftSideLights: "",
    cabinFeatures: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Controlla se il campo date è valido
    const dateValue = new Date(formData.date);
    if (isNaN(dateValue.getTime())) {
      console.error("Invalid date value");
      return;
    }

    try {
      const token = localStorage.getItem("token"); // Ottieni il token dal localStorage
      console.log("Token:", token);

      const payload = {
        ...formData,
        initialKm: parseInt(formData.initialKm, 10), // Assicurati che initialKm sia un intero
        fuelLevel: parseFloat(formData.fuelLevel),
        motorOilLevel: parseFloat(formData.motorOilLevel),
        coolantLevel: parseFloat(formData.coolantLevel),
        brakeFluidLevel: parseFloat(formData.brakeFluidLevel),
        steeringFluidLevel: parseFloat(formData.steeringFluidLevel),
        date: dateValue.toISOString(), // Trasforma la data in formato ISO
      };
      console.log("Payload:", payload);

      const response = await fetch("http://localhost:8080/api/checklistMezzo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Aggiungi il token di autenticazione
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("Submission Successful", result);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Checklist Ambulanza</h1>
      <label>
        Data:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <label>
        Ora:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </label>
      <label>
        Ambulanza:
        <input
          type="text"
          name="ambulance"
          value={formData.ambulance}
          onChange={handleChange}
        />
      </label>
      <label>
        Targa:
        <input
          type="text"
          name="plate"
          value={formData.plate}
          onChange={handleChange}
        />
      </label>
      <label>
        Km Iniziali:
        <input
          type="text"
          name="initialKm"
          value={formData.initialKm}
          onChange={handleChange}
        />
      </label>
      <label>
        Livello Carburante:
        <input
          type="range"
          name="fuelLevel"
          min="0"
          max="100"
          step="1"
          value={formData.fuelLevel}
          onChange={handleChange}
        />
      </label>
      <label>
        Livello Olio Motore:
        <input
          type="range"
          name="motorOilLevel"
          min="0"
          max="100"
          step="1"
          value={formData.motorOilLevel}
          onChange={handleChange}
        />
      </label>
      <label>
        Livello Liquido Raffreddamento:
        <input
          type="range"
          name="coolantLevel"
          min="0"
          max="100"
          step="1"
          value={formData.coolantLevel}
          onChange={handleChange}
        />
      </label>
      <label>
        Livello Liquido Freni:
        <input
          type="range"
          name="brakeFluidLevel"
          min="0"
          max="100"
          step="1"
          value={formData.brakeFluidLevel}
          onChange={handleChange}
        />
      </label>
      <label>
        Livello Servosterzo:
        <input
          type="range"
          name="steeringFluidLevel"
          min="0"
          max="100"
          step="1"
          value={formData.steeringFluidLevel}
          onChange={handleChange}
        />
      </label>
      <label>
        Quadro Elettrico:
        <input
          type="checkbox"
          name="electricalSystem"
          checked={formData.electricalSystem}
          onChange={handleChange}
        />
      </label>
      <label>
        Accensione Lampeggianti:
        <input
          type="checkbox"
          name="warningLights"
          checked={formData.warningLights}
          onChange={handleChange}
        />
      </label>
      <label>
        Luci anteriori:
        <input
          type="text"
          name="frontLights"
          value={formData.frontLights}
          onChange={handleChange}
        />
      </label>
      <label>
        Luci posteriori:
        <input
          type="text"
          name="rearLights"
          value={formData.rearLights}
          onChange={handleChange}
        />
      </label>
      <label>
        Luci laterali destre:
        <input
          type="text"
          name="rightSideLights"
          value={formData.rightSideLights}
          onChange={handleChange}
        />
      </label>
      <label>
        Luci laterali sinistre:
        <input
          type="text"
          name="leftSideLights"
          value={formData.leftSideLights}
          onChange={handleChange}
        />
      </label>
      <label>
        Componeti equipaggio:
        <input
          type="text"
          name="cabinFeatures"
          value={formData.componetequipe}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Invia</button>
    </form>
  );
}

export default ChecklistMezzo;
