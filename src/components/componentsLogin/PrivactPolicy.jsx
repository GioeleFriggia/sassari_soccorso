import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PrivacyPolicyPage = () => {
  const navbarHeight = 60; // Altezza della navbar, sostituisci con il valore effettivo

  return (
    <Container style={{ paddingTop: `${navbarHeight + 35}px` }}>
      <h1 className="h1-blue mt-auto h2 h1-margin-top">Policy Privacy</h1>
      <Row>
        <Col>
          <h4>Gentile utente,</h4>
          <p>
            In questa sezione si descrivono le modalità di gestione del sito web
            www.sassarisoccorso.it (“Sito”), con riferimento al trattamento dei
            dati personali degli utenti (“Utente/Utenti”) che lo consultano.
          </p>
          <p>
            Come noto, l’attività della “Sassari Soccorso servizio di Assistenza
            Sanitaria e Antincendio" comporta un costante trattamento di dati
            personali “particolari” appartenenti a persone con patologie varie
            inquadrabili nella categoria prevista dall’art. 9 del GDPR.
          </p>
          <p>
            Tale trattamento deve sottostare alla normativa emanata in materia
            di Privacy, attualmente costituita da due testi normativi:
          </p>
          <ul>
            <li>
              La legge 101/2018 che ha modificato il D.Lgs. n. 196 del
              30/06/2003 (codice in materia di protezione dei dati personali).
            </li>
            <li>
              Il Regolamento UE 679/2016 (GDPR), emanato con lo scopo di
              definire un quadro comune in materia di tutela dei dati personali
              per tutti gli Stati Membri e si propone di uniformare ed
              armonizzare la disciplina nell’ambito dell’Unione Europea.
            </li>
          </ul>
          <p>
            Il regolamento, in vigore dal 25 maggio 2018, è obbligatorio e
            direttamente applicabile in tutti gli stati membri e, in assenza –
            allo stato – di una normativa nazionale dettata in sua attuazione,
            potrà essere integrato con le disposizioni contenute nel D.Lgs.
            196/2003, purché non confliggenti.
          </p>
          <p>
            Tanto premesso, ai sensi degli artt. 12, 13 e 14 del Regolamento UE
            679/2016, che l’Associazione “Sassari Soccorso servizio di
            Assistenza Sanitaria e Antincendio" -, in qualità di Titolare del
            Trattamento, ai sensi dell’art. 4 nr.7 art. 13 e 24 in persona del
            Consiglio Direttivo - Presidente e Consiglieri, desidera informarLa
            che la Sassari Soccorso detiene e tratta dati personali tutelati
            dalle predette normative e di seguito riporta le politiche attuate
            per il trattamento dei dati personali che vengono raccolti al fine
            di esercitare l’attività in questione.
          </p>
          <p>
            Il Titolare del trattamento dei dati è l'Associazione “Sassari
            Soccorso servizio di Assistenza Sanitaria e Antincendio” con sede in
            Sassari, via Cesare Battisti 11 - 07100 Sassari (SS).
          </p>
          <p>
            Il Responsabile per la protezione dei dati (RPD) è da individuarsi
            tra i membri del Consiglio Direttivo della Associazione.
          </p>
          <p>
            Per esercitare i suddetti diritti, gli Utenti possono inviare una
            comunicazione all’indirizzo di posta elettronica del Titolare,
            indicando in oggetto “Privacy – esercizio dei diritti ex art. 7 del
            D.lgs. 196/2003 ed ex artt. 15 e ss. del GDPR”.
          </p>
          <p>
            La informiamo, da ultimo, che qualora ritenga che i Suoi diritti
            siano stati violati dal Titolare e/o da un terzo, Lei ha il diritto
            di proporre reclamo al Garante per la Protezione dei Dati Personali
            e/o ad altra autorità di controllo competente in forza del GDPR.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicyPage;
