import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const AboutPage = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <Container
      className="about-page-container"
      style={{ paddingTop: `calc(${navbarHeight}px + 20px)` }}
    >
      <h1 className="h1-blue mt-auto">Chi Siamo</h1>
      <div className="about-content">
        <img
          className="about-img mb-3"
          src="./Chisiamo.jpeg"
          alt="Immagine Chi Siamo"
        />

        <p>
          Sassari Soccorso ha le sue radici nel lontano 16 Ottobre 1992, quando
          un gruppo di giovani condivise un'idea che unisse lo spirito
          umanitario e altruistico con la professionalità, l'esperienza e la
          competenza. Da allora, i volontari hanno dedicato il loro tempo e le
          loro energie gratuitamente e con grande sacrificio per soccorrere
          coloro che ne avevano bisogno, senza chiedere altro che un semplice
          ringraziamento. L'avventura dell'associazione ha avuto inizio in un
          piccolo locale in via Rosello, con risorse limitate ma una grande
          determinazione nell'aiutare gli altri. Questo spirito è rimasto
          immutato nel corso degli anni e ha guidato Sassari Soccorso attraverso
          i suoi compiti, superando gli ostacoli lungo il cammino con tenacia e
          abnegazione. Nel corso del tempo, l'associazione ha vissuto diverse
          fasi, ognuna caratterizzata dalle sedi che ha occupato. Dopo Via
          Rosello, abbiamo conosciuto periodi di splendore in Via Diaz e
          successivamente in Via Milano, quando abbiamo raggiunto il culmine con
          un organico di 150 unità e 5 mezzi operativi attivi 24 ore su 24.
          Questo periodo ha dimostrato che Sassari Soccorso è più di una
          semplice organizzazione di soccorso; è un punto di incontro per le
          persone, un luogo in cui nascono amicizie e momenti di aggregazione.
          Tuttavia, i periodi di prosperità sono stati intervallati da momenti
          difficili, come negli anni dal 2005 al 2006, quando il servizio veniva
          svolto principalmente per strada per la mancanza di una sede stabile.
          Ma la determinazione e la memoria della nostra storia ci hanno
          permesso di superare anche queste sfide, portandoci nel 2007 in via
          Bottego n. 37. È qui che, grazie all'impegno dei volontari, abbiamo
          radici solide che hanno dato nuova vita all'associazione. Nel 2018
          abbiamo deciso di aderire al movimento nazionale ANPAS, condividendo
          le sue politiche e i suoi principi. L'anno successivo, siamo tornati
          attivamente nella Protezione Civile Regionale, svolgendo attività sia
          nell'operatività speciale che nella prevenzione degli incendi. Le
          esperienze acquisite in questo periodo ci hanno permesso di mettere a
          disposizione del Comune di Sassari le nostre competenze nel campo
          della prevenzione idraulica e idrogeologica, attivando importanti
          convenzioni. Nel 2020 abbiamo avviato le pratiche di accreditamento
          per il Servizio Civile, che si sono concretizzate nel 2022. I giovani
          del Servizio Civile sono stati formati per essere impiegati nel
          soccorso sanitario, continuando così il nostro impegno a servizio
          della comunità.
        </p>
      </div>
    </Container>
  );
};

export default AboutPage;
