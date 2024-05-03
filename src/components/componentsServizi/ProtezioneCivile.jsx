import React from "react";
import { Container } from "react-bootstrap";

const ProtezioneCivile = () => {
  return (
    <Container>
      <h1 className="h1-margin-top">Protezione Civile</h1>
      <div className="about-content">
        <img
          className="about-img mb-3"
          src="/protezionecivile.png"
          alt="Immagine Protezione Civile"
        />
        <p>
          La Protezione Civile racchiude in se tutte le attività di soccorso,
          fuori dal campo sanitario, devolute alla tutela della popolazione e
          del ripristino delle funzioni di base delle aree colpite da calamità
          di varia natura. Essa è articolata in ambito Comunale, Regionale e
          Nazionale. Sassari Soccorso, afferendo alla rete di coordinamento
          ANPAS, ed essendo iscritta negli elenchi regionali della Protezione
          Civile, concentra le proprie forze in tutti questi campi, lavorando
          sinergicamente con altre associazioni nel campo dell’operatività
          speciale e antincendio tutela l’integrità di tutti. Il volontario di
          Protezione Civile racchiude in se tutte quelle competenze proprie di
          un vero e proprio lavoro, mettendole a disposizione di tutti in caso
          di necessità.
        </p>
      </div>
    </Container>
  );
};

export default ProtezioneCivile;
