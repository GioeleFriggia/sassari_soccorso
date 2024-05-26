import React, { useState } from "react";
import "../css/ChecklistMezzo.css"; // Import the CSS file for styling

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
    frontLights: false,
    rearLights: false,
    rightSideLights: false,
    leftSideLights: false,
    cabinFeatures: "",
    notes: "", // New field for notes
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const allFieldsFilled = Object.values(formData).every(
      (value) => value !== "" && value !== false
    );

    if (!allFieldsFilled) {
      alert("Per favore, compila tutti i campi.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const payload = {
        ...formData,
        initialKm: parseInt(formData.initialKm, 10),
        fuelLevel: parseFloat(formData.fuelLevel),
        motorOilLevel: parseFloat(formData.motorOilLevel),
        coolantLevel: parseFloat(formData.coolantLevel),
        brakeFluidLevel: parseFloat(formData.brakeFluidLevel),
        steeringFluidLevel: parseFloat(formData.steeringFluidLevel),
      };

      const response = await fetch("http://localhost:8080/api/checklistMezzo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setShowModal(true);

      setFormData({
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
        frontLights: false,
        rearLights: false,
        rightSideLights: false,
        leftSideLights: false,
        cabinFeatures: "",
        notes: "", // Reset notes field
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="wrapper">
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
        <label className="range-label">
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
          <span className="percentage">{formData.fuelLevel}%</span>
        </label>
        <label className="range-label">
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
          <span className="percentage">{formData.motorOilLevel}%</span>
        </label>
        <label className="range-label">
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
          <span className="percentage">{formData.coolantLevel}%</span>
        </label>
        <label className="range-label">
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
          <span className="percentage">{formData.brakeFluidLevel}%</span>
        </label>
        <label className="range-label">
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
          <span className="percentage">{formData.steeringFluidLevel}%</span>
        </label>
        <div className="checkbox-group">
          <div className="checkbox-column">
            <input
              type="checkbox"
              id="electricalSystem"
              name="electricalSystem"
              checked={formData.electricalSystem}
              onChange={handleChange}
            />
            <label htmlFor="electricalSystem" className="checkbox-item">
              Quadro Elettrico
            </label>
            <input
              type="checkbox"
              id="warningLights"
              name="warningLights"
              checked={formData.warningLights}
              onChange={handleChange}
            />
            <label htmlFor="warningLights" className="checkbox-item">
              Accensione Lampeggianti
            </label>
            <input
              type="checkbox"
              id="frontLights"
              name="frontLights"
              checked={formData.frontLights}
              onChange={handleChange}
            />
            <label htmlFor="frontLights" className="checkbox-item">
              Luci anteriori
            </label>
          </div>
          <div className="checkbox-column">
            <input
              type="checkbox"
              id="rearLights"
              name="rearLights"
              checked={formData.rearLights}
              onChange={handleChange}
            />
            <label htmlFor="rearLights" className="checkbox-item">
              Luci posteriori
            </label>
            <input
              type="checkbox"
              id="rightSideLights"
              name="rightSideLights"
              checked={formData.rightSideLights}
              onChange={handleChange}
            />
            <label htmlFor="rightSideLights" className="checkbox-item">
              Luci laterali destre
            </label>
            <input
              type="checkbox"
              id="leftSideLights"
              name="leftSideLights"
              checked={formData.leftSideLights}
              onChange={handleChange}
            />
            <label htmlFor="leftSideLights" className="checkbox-item">
              Luci laterali sinistre
            </label>
          </div>
        </div>
        <label>
          Componenti equipaggio:
          <input
            type="text"
            name="cabinFeatures"
            value={formData.cabinFeatures}
            onChange={handleChange}
          />
        </label>
        <label>
          Note:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Invia</button>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Checklist inviata con successo!</p>
            <button onClick={() => setShowModal(false)}>Chiudi</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChecklistMezzo;
