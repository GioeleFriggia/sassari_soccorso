import React from "react";
import { Container } from "react-bootstrap";
// import '../App.css'; // Importa il file CSS per le personalizzazioni

const ServizioCivile = () => {
  return (
    <Container>
      <h1 className="h1-margin-top">Solidarietà</h1>
      <div className="about-content">
        <img
          className="about-img mb-3"
          src="/solidarietapng.png"
          alt="Immagine Solidarietà"
        />

        <p>
          Il nostro regalo di inizio anno per la Popolazione. La Solidarietà di
          Sassari Soccorso, non si ferma al continuo contributo che ogni giorno
          ci vede impegnati nel l’assistenza Sanitaria alla cittadinanza. Questa
          volta, in collaborazione con l'associazione Dome.Iga, vogliamo entrare
          nelle case dei più bisognosi, mettendo a disposizione dei letti
          altamente performanti per le persone allettate che hanno bisogno di un
          posto comodo su dove riposare e nel contempo impedire situazione
          spiacevoli dovute alla lunga degenza.
        </p>
      </div>
    </Container>
  );
};

export default ServizioCivile;
