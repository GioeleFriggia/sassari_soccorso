import React from "react";
import { Container } from "react-bootstrap";

const ServizioCivile = () => {
  return (
    <Container style={{ marginTop: "5rem" }}>
      <h1>Servizio Civile Nazionale</h1>
      <div className="about-content">
        <img
          className="about-img mb-3"
          src="/serviziocivile.png"
          alt="Immagine Servizio Civile"
        />

        <div>
          <p>
            <strong className="text-primary">
              Servizio civile universale Sassari Soccorso si colloca tra le
              associazioni ANPAS che offrono l’opportunità ai giovani di
              svolgere, presso la propria sede, il servizio civile.
            </strong>{" "}
            Il servizio civile è rivolto a tutti i giovani, di nazionalità
            italiana e non, che siano nella fascia d’età che va dai 18 ai 28
            anni. È un'opportunità di dedicarsi come volontari di leva ad un
            progetto sviluppato dalla rete ANPAS e finanziato dalla presidenza
            del Consiglio dei Ministri – Dipartimento delle politiche giovanili
            e del Servizio Civile Universale. Rappresenta un’importante
            occasione di formazione e di crescita sia personale che
            professionale. L’impegno richiesto sarà di n. 25 ore settimanali
            (circa) per un totale di 1145 ore, per 12 mesi, per cui verrà
            riconosciuta una gratifica di € 444,00/mese.
          </p>
          <ul className="text-primary">
            <li>Soccorso sanitario</li>
            <li>Trasporto sanitario</li>
          </ul>
          <p>
            Il volontario verrà in una prima fase affiancato da dei
            professionisti del settore che provvederanno alla sua formazione e
            crescita professionale. Lo stesso seguirà dei corsi
            professionalizzanti quali:
          </p>
          <ul className="text-warning">
            <li>BLSD</li>
            <li>PBLSD</li>
            <li>PTC</li>
          </ul>
          <p>
            Uno degli obiettivi che si prefigge Sassari Soccorso è quello di
            inserire i giovani all’interno della grande famiglia del
            volontariato. La speranza è che gli stessi, una volta finito il
            servizio civile, proseguano in questo bellissimo ambito di
            solidarietà e vita comune.
          </p>
          <h5 className="mt-3">Informazioni progetti 2024/2025</h5>
          <ul className="text-danger">
            <li>4 Posti disponibili per il Progetto Sardegna Centro</li>
            <li>Per visionare il progetto "Visualizza il pdf"</li>
            <li>Per compilare la domanda "Compila"</li>
          </ul>
          <h5>Si ricorda che:</h5>
          <ul className="text-danger">
            <li>
              l’accesso sulla piattaforma può essere effettuato solo con SPID
            </li>
            <li>la domanda può essere effettuata solo per una sede</li>
            <li>scadenza della presentazione della domanda 15/02/2024</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default ServizioCivile;
