import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa";
import "../css/CheckListList.css"; // Import the CSS file for styling

const ChecklistList = () => {
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
        "http://localhost:8080/admin/checklists",
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
        console.log("Lista checklist:", checklists);
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

  const downloadPDF = async (checklist) => {
    const doc = new jsPDF();

    // Caricamento del logo
    const logoUrl = "/public/logo2.jpg";
    const logo = await loadImage(logoUrl);

    if (logo) {
      doc.addImage(logo, "PNG", 10, 10, 30, 30); // Aggiungi l'immagine del logo
    }

    doc.setFontSize(20);
    doc.setTextColor(255, 165, 0); // Imposta il colore del titolo in arancione
    doc.text("Checklist Mezzo", 50, 30); // Aggiungi il titolo

    // Aggiungi il resto del contenuto
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Imposta il colore del testo in nero
    doc.text(`Data: ${checklist.date}`, 10, 50);
    doc.text(`Ora: ${checklist.time}`, 10, 60);
    doc.text(`Ambulanza: ${checklist.ambulance}`, 10, 70);
    doc.text(`Targa: ${checklist.plate}`, 10, 80);
    doc.text(`Km iniziali: ${checklist.initialKm}`, 10, 90);
    doc.text(`Livello carburante: ${checklist.fuelLevel}%`, 10, 100);
    doc.text(`Livello olio motore: ${checklist.motorOilLevel}%`, 10, 110);
    doc.text(
      `Livello liquido raffreddamento: ${checklist.coolantLevel}%`,
      10,
      120
    );
    doc.text(`Livello liquido freni: ${checklist.brakeFluidLevel}%`, 10, 130);
    doc.text(`Livello servosterzo: ${checklist.steeringFluidLevel}%`, 10, 140);
    doc.text(
      `Quadro elettrico: ${checklist.electricalSystem ? "Sì" : "No"}`,
      10,
      150
    );
    doc.text(
      `Accensione lampeggianti: ${checklist.warningLights ? "Sì" : "No"}`,
      10,
      160
    );
    doc.text(`Luci anteriori: ${checklist.frontLights ? "Sì" : "No"}`, 10, 170);
    doc.text(`Luci posteriori: ${checklist.rearLights ? "Sì" : "No"}`, 10, 180);
    doc.text(
      `Luci laterali destre: ${checklist.rightSideLights ? "Sì" : "No"}`,
      10,
      190
    );
    doc.text(
      `Luci laterali sinistre: ${checklist.leftSideLights ? "Sì" : "No"}`,
      10,
      200
    );
    doc.text(`Componenti equipaggio: ${checklist.cabinFeatures}`, 10, 210);
    doc.setTextColor(255, 0, 0); // Imposta il colore del testo in rosso
    doc.text(
      `Compilato da: ${checklist.firstName} ${checklist.lastName}`,
      10,
      220
    );

    doc.save(`checklist_${checklist.id}.pdf`);
  };

  const downloadAllPDFs = async () => {
    const doc = new jsPDF();

    for (let i = 0; i < checklists.length; i++) {
      const checklist = checklists[i];

      if (i > 0) {
        doc.addPage();
      }

      // Caricamento del logo
      const logoUrl = "/public/logo2.jpg";
      const logo = await loadImage(logoUrl);

      if (logo) {
        doc.addImage(logo, "PNG", 10, 10, 30, 30); // Aggiungi l'immagine del logo
      }

      doc.setFontSize(20);
      doc.setTextColor(255, 165, 0); // Imposta il colore del titolo in arancione
      doc.text("Checklist Mezzo", 50, 30); // Aggiungi il titolo

      // Aggiungi il resto del contenuto
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0); // Imposta il colore del testo in nero
      doc.text(`Data: ${checklist.date}`, 10, 50);
      doc.text(`Ora: ${checklist.time}`, 10, 60);
      doc.text(`Ambulanza: ${checklist.ambulance}`, 10, 70);
      doc.text(`Targa: ${checklist.plate}`, 10, 80);
      doc.text(`Km iniziali: ${checklist.initialKm}`, 10, 90);
      doc.text(`Livello carburante: ${checklist.fuelLevel}%`, 10, 100);
      doc.text(`Livello olio motore: ${checklist.motorOilLevel}%`, 10, 110);
      doc.text(
        `Livello liquido raffreddamento: ${checklist.coolantLevel}%`,
        10,
        120
      );
      doc.text(`Livello liquido freni: ${checklist.brakeFluidLevel}%`, 10, 130);
      doc.text(
        `Livello servosterzo: ${checklist.steeringFluidLevel}%`,
        10,
        140
      );
      doc.text(
        `Quadro elettrico: ${checklist.electricalSystem ? "Sì" : "No"}`,
        10,
        150
      );
      doc.text(
        `Accensione lampeggianti: ${checklist.warningLights ? "Sì" : "No"}`,
        10,
        160
      );
      doc.text(
        `Luci anteriori: ${checklist.frontLights ? "Sì" : "No"}`,
        10,
        170
      );
      doc.text(
        `Luci posteriori: ${checklist.rearLights ? "Sì" : "No"}`,
        10,
        180
      );
      doc.text(
        `Luci laterali destre: ${checklist.rightSideLights ? "Sì" : "No"}`,
        10,
        190
      );
      doc.text(
        `Luci laterali sinistre: ${checklist.leftSideLights ? "Sì" : "No"}`,
        10,
        200
      );
      doc.text(`Componenti equipaggio: ${checklist.cabinFeatures}`, 10, 210);
      doc.setTextColor(255, 0, 0); // Imposta il colore del testo in rosso
      doc.text(
        `Compilato da: ${checklist.firstName} ${checklist.lastName}`,
        10,
        220
      );
    }

    doc.save("all_checklists.pdf");
  };

  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = (error) => {
        console.error("Errore nel caricamento dell'immagine", error);
        reject(error);
      };
    });
  };

  return (
    <div className="checklist-container">
      <h1>Lista delle Checklist</h1>
      {error && <p className="error">{error}</p>}
      <button
        onClick={downloadAllPDFs}
        style={{ marginBottom: "20px", backgroundColor: "red" }}
      >
        Scarica tutte le Checklist
      </button>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Ora</th>
            <th>Ambulanza</th>
            <th>Targa</th>
            <th>Km iniziali</th>
            <th>Livello carburante</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {checklists.length > 0 ? (
            checklists.map((checklist) => (
              <tr key={checklist.id} id={`checklist-${checklist.id}`}>
                <td data-label="Data">{checklist.date}</td>
                <td data-label="Ora">{checklist.time}</td>
                <td data-label="Ambulanza">{checklist.ambulance}</td>
                <td data-label="Targa">{checklist.plate}</td>
                <td data-label="Km iniziali">{checklist.initialKm}</td>
                <td data-label="Livello carburante">{checklist.fuelLevel}</td>
                <td>
                  <button
                    onClick={() => downloadPDF(checklist)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FaFilePdf size={24} color="red" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Nessuna checklist trovata</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ChecklistList;
