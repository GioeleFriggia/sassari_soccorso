import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa"; // Assicurati di importare l'icona qui
import "../css/ChecklistVanoSani.css"; // Import the CSS file for styling

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

      const response = await axios.get(
        "http://localhost:8080/admin/checklistVanoSanitario",
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
        console.error("Response headers:", error.response.headers);
        setError(`Error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        console.error("Request data:", error.request);
        setError("No response received from the server");
      } else {
        console.error("Error message:", error.message);
        setError(`Error: ${error.message}`);
      }
      setChecklists([]);
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
      const logo = await loadLogo("/logopdf.jpg");

      doc.addImage(logo, "PNG", 10, 10, 30, 30); // Adjust the size and position as needed

      doc.setFontSize(20);
      doc.setTextColor(255, 165, 0); // Orange color
      const pageWidth = doc.internal.pageSize.getWidth();
      doc.text("Checklist Vano Sanitario", pageWidth / 2, 50, {
        align: "center",
      });

      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0); // Black color
      doc.text(`Data: ${checklist.date}`, 10, 70);
      doc.text(`Ora: ${checklist.time}`, 10, 80);
      doc.text(`Ambulanza: ${checklist.ambulance}`, 10, 90);
      doc.text(`Targa: ${checklist.plate}`, 10, 100);
      doc.text(`Equipe: ${checklist.team}`, 10, 110);
      doc.text(`Note: ${checklist.note}`, 10, 120);

      const items = [
        "Zaino Rosso",
        "Soluzione Fisiologica",
        "Zaino Pediatrico",
        "Sacca I",
        "Sacca IV",
        "Ambu Pediatrico",
        "Ambu Neonatale",
        "Sfigmomanometro",
        "Pulsiosimetro",
        "Termometro",
        "Sacca II",
        "Lenzuolino Isotermico",
        "Fogli Rifiuto",
        "Telini Sterili",
        "Forbici Robin",
        "Sacca III",
        "Forbice + Pinze",
        "Garze Sterili",
        "Laccio Emostatico",
        "Benda Orlata",
        "Cerotti",
        "Acqua Ossigenata",
        "Sacca Sportello DX",
        "Maschere FFP2",
        "DAE",
        "Piastre",
        "Lamette",
        "Tavola Spinale",
        "Cinghie Ragno",
        "Fermacapo",
        "KED",
        "Barella Traumatica",
        "Stecco Bende",
        "Collari Cervicali",
        "Umidificatore",
        "Maschera Reservoir",
        "Occhialini O2",
        "Livello Bombola 1",
        "Livello Bombola 2",
        "Aspiratore Portatile",
        "Guanti Lattice S",
        "Guanti Lattice M",
        "Guanti Lattice L",
        "Kit Recupero Arti",
        "Buste Mondezza",
        "Rotolo Carta",
        "Padella/Pappagallo",
        "Sacchetti Vomito",
      ];

      let y = 130;
      items.forEach((item, index) => {
        const value = checklist[item.toLowerCase().replace(/\s+/g, "")]
          ? "Sì"
          : "No";
        doc.text(`${item}: ${value}`, 10, y);
        y += 10;
        if (index % 20 === 19) {
          doc.addPage();
          y = 20;
        }
      });
    } catch (error) {
      console.error("Errore nel generare il PDF:", error);
    }
  };

  const downloadPDF = async (checklist) => {
    const doc = new jsPDF();
    await generatePDF(doc, checklist);
    doc.save(`checklist_vanosanitario_${checklist.id}.pdf`);
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

    doc.save("all_checklists_vanosanitario.pdf");
  };

  return (
    <div className="checklist-vanosanitario-container">
      <h1>Lista delle Checklist Vano Sanitario</h1>
      {error && <p className="error-message">{error}</p>}
      <button
        onClick={downloadAllPDFs}
        style={{ marginBottom: "20px", backgroundColor: "red" }}
      >
        Scarica tutte le Checklist
      </button>
      <table className="styled-table-vanosanitario">
        <thead>
          <tr>
            <th>Data</th>
            <th>Ora</th>
            <th>Ambulanza</th>
            <th>Targa</th>
            <th>Equipe</th>
            <th>Note</th>
            <th>Azioni</th>
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

export default ChecklistVanoSanitarioList;
