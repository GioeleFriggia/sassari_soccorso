import React, { useEffect, useState } from "react";
import axios from "axios";
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
            <th>Zaino Rosso</th>
            <th>Soluzione Fisiologica</th>
            <th>Zaino Pediatrico</th>
            <th>Sacca I</th>
            <th>Sacca IV</th>
            <th>Ambu Pediatrico</th>
            <th>Ambu Neonatale</th>
            <th>Sfigmomanometro</th>
            <th>Pulsiosimetro</th>
            <th>Termometro</th>
            <th>Sacca II</th>
            <th>Lenzuolino Isotermico</th>
            <th>Fogli Rifiuto</th>
            <th>Telini Sterili</th>
            <th>Forbici Robin</th>
            <th>Sacca III</th>
            <th>Forbice + Pinze</th>
            <th>Garze Sterili</th>
            <th>Laccio Emostatico</th>
            <th>Benda Orlata</th>
            <th>Cerotti</th>
            <th>Acqua Ossigenata</th>
            <th>Sacca Sportello DX</th>
            <th>Maschere FFP2</th>
            <th>DAE</th>
            <th>Piastre</th>
            <th>Lamette</th>
            <th>Tavola Spinale</th>
            <th>Cinghie Ragno</th>
            <th>Fermacapo</th>
            <th>KED</th>
            <th>Barella Traumatica</th>
            <th>Stecco Bende</th>
            <th>Collari Cervicali</th>
            <th>Umidificatore</th>
            <th>Maschera Reservoir</th>
            <th>Occhialini O2</th>
            <th>Livello Bombola 1</th>
            <th>Livello Bombola 2</th>
            <th>Aspiratore Portatile</th>
            <th>Guanti Lattice S</th>
            <th>Guanti Lattice M</th>
            <th>Guanti Lattice L</th>
            <th>Kit Recupero Arti</th>
            <th>Buste Mondezza</th>
            <th>Rotolo Carta</th>
            <th>Padella/Pappagallo</th>
            <th>Sacchetti Vomito</th>
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
                <td data-label="Zaino Rosso">
                  {checklist.zainoRosso ? "Sì" : "No"}
                </td>
                <td data-label="Soluzione Fisiologica">
                  {checklist.soluzioneFisiologica ? "Sì" : "No"}
                </td>
                <td data-label="Zaino Pediatrico">
                  {checklist.zainoPediatrico ? "Sì" : "No"}
                </td>
                <td data-label="Sacca I">{checklist.saccaI ? "Sì" : "No"}</td>
                <td data-label="Sacca IV">{checklist.saccaIV ? "Sì" : "No"}</td>
                <td data-label="Ambu Pediatrico">
                  {checklist.ambuPediatrico ? "Sì" : "No"}
                </td>
                <td data-label="Ambu Neonatale">
                  {checklist.ambuNeonatale ? "Sì" : "No"}
                </td>
                <td data-label="Sfigmomanometro">
                  {checklist.sfigmomanometro ? "Sì" : "No"}
                </td>
                <td data-label="Pulsiosimetro">
                  {checklist.pulsiosimetro ? "Sì" : "No"}
                </td>
                <td data-label="Termometro">
                  {checklist.termometro ? "Sì" : "No"}
                </td>
                <td data-label="Sacca II">{checklist.saccaII ? "Sì" : "No"}</td>
                <td data-label="Lenzuolino Isotermico">
                  {checklist.lenzuolinoIsotermico ? "Sì" : "No"}
                </td>
                <td data-label="Fogli Rifiuto">
                  {checklist.fogliRifiuto ? "Sì" : "No"}
                </td>
                <td data-label="Telini Sterili">
                  {checklist.teliniSterili ? "Sì" : "No"}
                </td>
                <td data-label="Forbici Robin">
                  {checklist.forbiciRobin ? "Sì" : "No"}
                </td>
                <td data-label="Sacca III">
                  {checklist.saccaIII ? "Sì" : "No"}
                </td>
                <td data-label="Forbice + Pinze">
                  {checklist.forbicePinze ? "Sì" : "No"}
                </td>
                <td data-label="Garze Sterili">
                  {checklist.garzeSterili ? "Sì" : "No"}
                </td>
                <td data-label="Laccio Emostatico">
                  {checklist.laccioEmostatico ? "Sì" : "No"}
                </td>
                <td data-label="Benda Orlata">
                  {checklist.bendaOrlata ? "Sì" : "No"}
                </td>
                <td data-label="Cerotti">{checklist.cerotti ? "Sì" : "No"}</td>
                <td data-label="Acqua Ossigenata">
                  {checklist.acquaOssigenata ? "Sì" : "No"}
                </td>
                <td data-label="Sacca Sportello DX">
                  {checklist.saccaSportelloDX ? "Sì" : "No"}
                </td>
                <td data-label="Maschere FFP2">
                  {checklist.maschereFFP2 ? "Sì" : "No"}
                </td>
                <td data-label="DAE">{checklist.dae ? "Sì" : "No"}</td>
                <td data-label="Piastre">{checklist.piastre ? "Sì" : "No"}</td>
                <td data-label="Lamette">{checklist.lamette ? "Sì" : "No"}</td>
                <td data-label="Tavola Spinale">
                  {checklist.tavolaSpinale ? "Sì" : "No"}
                </td>
                <td data-label="Cinghie Ragno">
                  {checklist.cinghieRagno ? "Sì" : "No"}
                </td>
                <td data-label="Fermacapo">
                  {checklist.fermacapo ? "Sì" : "No"}
                </td>
                <td data-label="KED">{checklist.ked ? "Sì" : "No"}</td>
                <td data-label="Barella Traumatica">
                  {checklist.barellaTraumatica ? "Sì" : "No"}
                </td>
                <td data-label="Stecco Bende">
                  {checklist.steccoBende ? "Sì" : "No"}
                </td>
                <td data-label="Collari Cervicali">
                  {checklist.collariCervicali ? "Sì" : "No"}
                </td>
                <td data-label="Umidificatore">
                  {checklist.umidificatore ? "Sì" : "No"}
                </td>
                <td data-label="Maschera Reservoir">
                  {checklist.mascheraReservoir ? "Sì" : "No"}
                </td>
                <td data-label="Occhialini O2">
                  {checklist.occhialiniO2 ? "Sì" : "No"}
                </td>
                <td data-label="Livello Bombola 1">
                  {checklist.livelloBombola1}
                </td>
                <td data-label="Livello Bombola 2">
                  {checklist.livelloBombola2}
                </td>
                <td data-label="Aspiratore Portatile">
                  {checklist.aspiratorePortatile ? "Sì" : "No"}
                </td>
                <td data-label="Guanti Lattice S">
                  {checklist.guantiLatticeS ? "Sì" : "No"}
                </td>
                <td data-label="Guanti Lattice M">
                  {checklist.guantiLatticeM ? "Sì" : "No"}
                </td>
                <td data-label="Guanti Lattice L">
                  {checklist.guantiLatticeL ? "Sì" : "No"}
                </td>
                <td data-label="Kit Recupero Arti">
                  {checklist.kitRecuperoArti ? "Sì" : "No"}
                </td>
                <td data-label="Buste Mondezza">
                  {checklist.busteMondezza ? "Sì" : "No"}
                </td>
                <td data-label="Rotolo Carta">
                  {checklist.rotoloCarta ? "Sì" : "No"}
                </td>
                <td data-label="Padella/Pappagallo">
                  {checklist.padellaPappagallo ? "Sì" : "No"}
                </td>
                <td data-label="Sacchetti Vomito">
                  {checklist.sacchettiVomito ? "Sì" : "No"}
                </td>
                <td data-label="Note">{checklist.note}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="57">Nessuna checklist trovata</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ChecklistVanoSanitarioList;
