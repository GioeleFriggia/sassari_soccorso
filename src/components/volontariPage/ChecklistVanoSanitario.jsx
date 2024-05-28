import React, { useState, useEffect } from "react";
import "../css/ChecklistVanoSani.css"; // Import the CSS file for styling

function ChecklistVanoSanitario() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    ambulance: "",
    plate: "",
    team: "",
    zainoRosso: false,
    soluzioneFisiologica: false,
    zainoPediatrico: false,
    saccaI: false,
    saccaIV: false,
    ambuPediatrico: false,
    ambuNeonatale: false,
    sfigmomanometro: false,
    pulsiosimetro: false,
    termometro: false,
    saccaII: false,
    lenzuolinoIsotermico: false,
    fogliRifiuto: false,
    teliniSterili: false,
    forbiciRobin: false,
    saccaIII: false,
    forbicePinze: false,
    garzeSterili: false,
    laccioEmostatico: false,
    bendaOrlata: false,
    cerotti: false,
    acquaOssigenata: false,
    saccaSportelloDX: false,
    maschereFFP2: false,
    dae: false,
    piastre: false,
    lamette: false,
    tavolaSpinale: false,
    cinghieRagno: false,
    fermacapo: false,
    ked: false,
    barellaTraumatica: false,
    steccoBende: false,
    collariCervicali: false,
    umidificatore: false,
    mascheraReservoir: false,
    occhialiniO2: false,
    livelloBombola1: "",
    livelloBombola2: "",
    aspiratorePortatile: false,
    guantiLatticeS: false,
    guantiLatticeM: false,
    guantiLatticeL: false,
    kitRecuperoArti: false,
    busteMondezza: false,
    rotoloCarta: false,
    padellaPappagallo: false,
    sacchettiVomito: false,
    note: "",
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

    const requiredFields = ["date", "time", "ambulance", "plate", "team"];
    const allRequiredFieldsFilled = requiredFields.every(
      (field) => formData[field] !== ""
    );

    if (!allRequiredFieldsFilled) {
      alert("Per favore, compila tutti i campi.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:8080/api/checklistVanoSanitario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

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
        team: "",
        zainoRosso: false,
        soluzioneFisiologica: false,
        zainoPediatrico: false,
        saccaI: false,
        saccaIV: false,
        ambuPediatrico: false,
        ambuNeonatale: false,
        sfigmomanometro: false,
        pulsiosimetro: false,
        termometro: false,
        saccaII: false,
        lenzuolinoIsotermico: false,
        fogliRifiuto: false,
        teliniSterili: false,
        forbiciRobin: false,
        saccaIII: false,
        forbicePinze: false,
        garzeSterili: false,
        laccioEmostatico: false,
        bendaOrlata: false,
        cerotti: false,
        acquaOssigenata: false,
        saccaSportelloDX: false,
        maschereFFP2: false,
        dae: false,
        piastre: false,
        lamette: false,
        tavolaSpinale: false,
        cinghieRagno: false,
        fermacapo: false,
        ked: false,
        barellaTraumatica: false,
        steccoBende: false,
        collariCervicali: false,
        umidificatore: false,
        mascheraReservoir: false,
        occhialiniO2: false,
        livelloBombola1: "",
        livelloBombola2: "",
        aspiratorePortatile: false,
        guantiLatticeS: false,
        guantiLatticeM: false,
        guantiLatticeL: false,
        kitRecuperoArti: false,
        busteMondezza: false,
        rotoloCarta: false,
        padellaPappagallo: false,
        sacchettiVomito: false,
        note: "",
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const updateThumbColor = (e) => {
    const value = e.target.value;
    let color;

    if (value < 50) {
      color = `rgb(${255}, ${Math.round(255 * (value / 50))}, 0)`;
    } else {
      color = `rgb(${255 - Math.round(255 * ((value - 50) / 50))}, 255, 0)`;
    }

    e.target.style.setProperty("--thumb-color", color);
  };

  useEffect(() => {
    const ranges = document.querySelectorAll('input[type="range"]');
    ranges.forEach((range) => {
      range.addEventListener("input", updateThumbColor);
      updateThumbColor({ target: range }); // Initial color update
    });

    return () => {
      ranges.forEach((range) => {
        range.removeEventListener("input", updateThumbColor);
      });
    };
  }, []);

  return (
    <div className="sanitary-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Checklist Vano Sanitario</h1>
        <h4>SCHEDA CONTROLLO VANO SANITARIO</h4>
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
          Equipe:
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
          />
        </label>
        <div className="checkbox-group">
          <div className="checkbox-column">
            <input
              type="checkbox"
              id="zainoRosso"
              name="zainoRosso"
              checked={formData.zainoRosso}
              onChange={handleChange}
            />
            <label htmlFor="zainoRosso" className="checkbox-item">
              Zaino Rosso
            </label>
            <input
              type="checkbox"
              id="soluzioneFisiologica"
              name="soluzioneFisiologica"
              checked={formData.soluzioneFisiologica}
              onChange={handleChange}
            />
            <label htmlFor="soluzioneFisiologica" className="checkbox-item">
              Soluzione Fisiologica
            </label>
            <input
              type="checkbox"
              id="zainoPediatrico"
              name="zainoPediatrico"
              checked={formData.zainoPediatrico}
              onChange={handleChange}
            />
            <label htmlFor="zainoPediatrico" className="checkbox-item">
              Zaino Pediatrico
            </label>
            <input
              type="checkbox"
              id="saccaI"
              name="saccaI"
              checked={formData.saccaI}
              onChange={handleChange}
            />
            <label htmlFor="saccaI" className="checkbox-item">
              Sacca I
            </label>
            <input
              type="checkbox"
              id="saccaIV"
              name="saccaIV"
              checked={formData.saccaIV}
              onChange={handleChange}
            />
            <label htmlFor="saccaIV" className="checkbox-item">
              Sacca IV
            </label>
            <input
              type="checkbox"
              id="ambuPediatrico"
              name="ambuPediatrico"
              checked={formData.ambuPediatrico}
              onChange={handleChange}
            />
            <label htmlFor="ambuPediatrico" className="checkbox-item">
              Ambu Pediatrico
            </label>
            <input
              type="checkbox"
              id="ambuNeonatale"
              name="ambuNeonatale"
              checked={formData.ambuNeonatale}
              onChange={handleChange}
            />
            <label htmlFor="ambuNeonatale" className="checkbox-item">
              Ambu Neonatale
            </label>
            <input
              type="checkbox"
              id="sfigmomanometro"
              name="sfigmomanometro"
              checked={formData.sfigmomanometro}
              onChange={handleChange}
            />
            <label htmlFor="sfigmomanometro" className="checkbox-item">
              Sfigmomanometro
            </label>
            <input
              type="checkbox"
              id="pulsiosimetro"
              name="pulsiosimetro"
              checked={formData.pulsiosimetro}
              onChange={handleChange}
            />
            <label htmlFor="pulsiosimetro" className="checkbox-item">
              Pulsiosimetro
            </label>
          </div>
          <div className="checkbox-column">
            <input
              type="checkbox"
              id="termometro"
              name="termometro"
              checked={formData.termometro}
              onChange={handleChange}
            />
            <label htmlFor="termometro" className="checkbox-item">
              Termometro
            </label>
            <input
              type="checkbox"
              id="saccaII"
              name="saccaII"
              checked={formData.saccaII}
              onChange={handleChange}
            />
            <label htmlFor="saccaII" className="checkbox-item">
              Sacca II
            </label>
            <input
              type="checkbox"
              id="lenzuolinoIsotermico"
              name="lenzuolinoIsotermico"
              checked={formData.lenzuolinoIsotermico}
              onChange={handleChange}
            />
            <label htmlFor="lenzuolinoIsotermico" className="checkbox-item">
              Lenzuolino Isotermico
            </label>
            <input
              type="checkbox"
              id="fogliRifiuto"
              name="fogliRifiuto"
              checked={formData.fogliRifiuto}
              onChange={handleChange}
            />
            <label htmlFor="fogliRifiuto" className="checkbox-item">
              Fogli Rifiuto
            </label>
            <input
              type="checkbox"
              id="teliniSterili"
              name="teliniSterili"
              checked={formData.teliniSterili}
              onChange={handleChange}
            />
            <label htmlFor="teliniSterili" className="checkbox-item">
              Telini Sterili
            </label>
            <input
              type="checkbox"
              id="forbiciRobin"
              name="forbiciRobin"
              checked={formData.forbiciRobin}
              onChange={handleChange}
            />
            <label htmlFor="forbiciRobin" className="checkbox-item">
              Forbici Robin
            </label>
            <input
              type="checkbox"
              id="saccaIII"
              name="saccaIII"
              checked={formData.saccaIII}
              onChange={handleChange}
            />
            <label htmlFor="saccaIII" className="checkbox-item">
              Sacca III
            </label>
            <input
              type="checkbox"
              id="forbicePinze"
              name="forbicePinze"
              checked={formData.forbicePinze}
              onChange={handleChange}
            />
            <label htmlFor="forbicePinze" className="checkbox-item">
              Forbice + Pinze
            </label>
            <input
              type="checkbox"
              id="garzeSterili"
              name="garzeSterili"
              checked={formData.garzeSterili}
              onChange={handleChange}
            />
            <label htmlFor="garzeSterili" className="checkbox-item">
              Garze Sterili
            </label>
          </div>
        </div>
        <label>
          Note:
          <textarea
            className="notes"
            name="note"
            value={formData.note}
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

export default ChecklistVanoSanitario;
