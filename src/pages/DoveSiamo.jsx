import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css"; // Assicurati che il percorso sia corretto

function DoveSiamo() {
  const position = [40.74606, 8.55395]; // Coordinate di Bottego, Sassari

  // Funzione per gestire il clic sul bottone
  const handleButtonClick = () => {
    const url =
      "https://www.google.com/maps/dir//40.74587,8.55396/@40.7397241,8.5420768,15";
    window.open(url, "_blank"); // Apre l'URL in una nuova scheda
  };

  return (
    <div className="dove-siamo-container">
      <h1>Dove Siamo</h1>
      <p>
        Ci trovi a Sassari Via Bottego, 37 - 07100 Sassari (SS) Per trovarci
        clicca qui
        <button
          onClick={handleButtonClick}
          className="gradient-button"
          aria-label="Apri Google Maps per le direzioni a Via Bottego, Sassari"
        >
          Apri Mappa
        </button>
      </p>
      {/* Mappa */}
      <MapContainer center={position} zoom={15} className="dove-siamo-mappa">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Bottego, 37 - 07100 Sassari (SS)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default DoveSiamo;
