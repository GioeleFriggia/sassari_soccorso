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
          Il soccorso sanitario si occupa delle emergenze in ambito ospedaliero
          e non. In Sardegna è gestito da AREUS (Azienda Regionale Emergenza
          Urgenza Sardegna) che come mission ha quella di garantire, gestire e
          rendere omogeneo nel territorio della Sardegna il soccorso sanitario
          di emergenza-urgenza territoriale. Dovrà gestire, oltre al 118 con
          l'elisoccorso, anche il servizio di trasporto del sangue, i trasporti
          secondari tempo dipendenti e coadiuvare le attività connesse con i
          trapianti mettendo a disposizione la logistica. Sassari Soccorso ormai
          da più di 30 anni si è inserita in questo ambito come associazione di
          volontariato che tra i suoi servizi annota anche il soccorso
          sanitario. Per poter garantire il soccorso sanitario ha nel suo parco
          macchine diversi veicoli di base. Il servizio viene svolto da soci
          volontari in possesso delle certificazioni PBLSD, BLSD E PTC. Durante
          i servizi di soccorso, garantisce la presenza di un autista
          soccorritore e di due soccorritori qualificati che affiancano un
          quarto soccorritore, nuovo volontario, nell’apprendimento e nella
          crescita.
        </p>
      </div>
    </Container>
  );
};

export default ProtezioneCivile;
