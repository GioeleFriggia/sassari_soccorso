import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa";
import "../css/CheckListList.css";

const ChecklistList = () => {
  const [checklists, setChecklists] = useState([]);
  const [error, setError] = useState(null);

  const auth = useSelector((state) => state.auth);
  const { user } = auth || {};

  const fetchChecklists = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        setError("No token found. Please log in.");
        return;
      }

      const response = await axios.get(
        "http://localhost:8080/admin/checklists",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const checklists = response.data.content || [];
        setChecklists(checklists);
      } else {
        console.error("Errore nel recuperare la lista delle checklist");
        setError("Errore nel recuperare la lista delle checklist");
      }
    } catch (error) {
      console.error("Errore nel recuperare la lista delle checklist:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      setError("Errore nel recuperare la lista delle checklist");
    }
  };

  useEffect(() => {
    fetchChecklists();
  }, []);

  const loadLogo = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });
  };

  const generatePDF = async (doc, checklist) => {
    try {
      const logo = await loadLogo("logo2.png");

      doc.addImage(logo, "PNG", 10, 10, 30, 30); // Adjust the size and position as needed

      doc.setFontSize(20);
      doc.setTextColor(255, 165, 0); // Orange color
      const pageWidth = doc.internal.pageSize.getWidth();
      doc.text("Checklist Mezzo", pageWidth / 2, 50, { align: "center" });

      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0); // Black color
      doc.text(`Data: ${checklist.date}`, 10, 70);
      doc.text(`Ora: ${checklist.time}`, 10, 80);
      doc.text(`Ambulanza: ${checklist.ambulance}`, 10, 90);
      doc.text(`Targa: ${checklist.plate}`, 10, 100);
      doc.text(`Km iniziali: ${checklist.initialKm}`, 10, 110);
      doc.text(`Livello carburante: ${checklist.fuelLevel}%`, 10, 120);
      doc.text(`Livello olio motore: ${checklist.motorOilLevel}%`, 10, 130);
      doc.text(
        `Livello liquido raffreddamento: ${checklist.coolantLevel}%`,
        10,
        140
      );
      doc.text(`Livello liquido freni: ${checklist.brakeFluidLevel}%`, 10, 150);
      doc.text(
        `Livello servosterzo: ${checklist.steeringFluidLevel}%`,
        10,
        160
      );
      doc.text(
        `Quadro elettrico: ${checklist.electricalSystem ? "Sì" : "No"}`,
        10,
        170
      );
      doc.text(
        `Accensione lampeggianti: ${checklist.warningLights ? "Sì" : "No"}`,
        10,
        180
      );
      doc.text(
        `Luci anteriori: ${checklist.frontLights ? "Sì" : "No"}`,
        10,
        190
      );
      doc.text(
        `Luci posteriori: ${checklist.rearLights ? "Sì" : "No"}`,
        10,
        200
      );
      doc.text(
        `Luci laterali destre: ${checklist.rightSideLights ? "Sì" : "No"}`,
        10,
        210
      );
      doc.text(
        `Luci laterali sinistre: ${checklist.leftSideLights ? "Sì" : "No"}`,
        10,
        220
      );
      doc.text(`Componenti equipaggio: ${checklist.cabinFeatures}`, 10, 230);
      doc.text(`Note: ${checklist.notes}`, 10, 240);
      doc.text(`Compilato da: ${user.name} ${user.surname}`, 10, 250);
    } catch (error) {
      console.error("Errore nel generare il PDF:", error);
    }
  };

  const downloadPDF = async (checklist) => {
    const doc = new jsPDF();
    await generatePDF(doc, checklist);
    doc.save(`checklist_${checklist.id}.pdf`);
  };

  const downloadAllPDFs = async () => {
    const doc = new jsPDF();

    for (let i = 0; i < checklists.length; i++) {
      const checklist = checklists[i];
      if (i > 0) {
        doc.addPage();
      }
      await generatePDF(doc, checklist);
    }

    doc.save("all_checklists.pdf");
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
