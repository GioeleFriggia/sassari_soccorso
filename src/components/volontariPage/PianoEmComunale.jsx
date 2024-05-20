import React from "react";

const PianoDiEmergenza = () => {
  return (
    <div>
      <header>
        <h1>Piano Comunale di Protezione Civile</h1>
        <p>
          Allegato alla Deliberazione della Giunta Municipale n. 350 del
          28/11/2023
        </p>
        <p>
          Questo piano di intervento comunale descrive le responsabilità, i
          compiti e le procedure per la gestione delle emergenze nel comune di
          Sassari. È un documento fondamentale per garantire una risposta
          efficace e coordinata a qualsiasi tipo di emergenza.
        </p>
        <a href="/path/to/document.pdf" download className="download-button">
          Scarica il Piano Completo
        </a>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#section-1">01. Modello di Intervento</a>
          </li>
          <li>
            <a href="#section-2">02. Le Fasi Operative</a>
          </li>
          {/* Add other sections here */}
        </ul>
      </nav>
      <main>
        <section id="section-1">
          <h2>01. Modello di Intervento</h2>
          <p>
            Il modello di intervento indica le responsabilità e i compiti
            assegnati dal Piano di Protezione Civile Comunale e le procedure per
            la gestione delle varie fasi dell’emergenza. Il suddetto modello è
            redatto in maniera schematica e separata dal resto del Piano, in
            modo da renderlo immediatamente consultabile in caso di necessità.
          </p>
          <p>
            Al Modello di intervento sono allegati, per ciascun rischio, le
            procedure operative per la realizzazione del costante scambio di
            informazioni tra il sistema centrale e periferico di Protezione
            Civile, in modo da consentire l’utilizzo razionale delle risorse con
            il coordinamento di tutti i centri operativi dislocati nel
            territorio e di tutti gli attori coinvolti nelle procedure
            emergenziali.
          </p>
          <p>
            Tale modello dovrà essere costantemente aggiornato al fine di
            garantirne la corretta funzionalità.
          </p>
        </section>
        <section id="section-2">
          <h2>02. Le Fasi Operative</h2>
          <p>
            L’emissione dei bollettini di Protezione Civile è garantita dal CFD
            della Sardegna che provvede a comunicarli e smistarli agli opportuni
            organi comunali nonché a pubblicarli nella sezione “Allerte di
            protezione civile” del sito istituzionale della Regione Sardegna,
            consultabile ordinariamente entro le ore 14:00 all’indirizzo{" "}
            <a
              href="http://www.sardegnaprotezionecivile.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.sardegnaprotezionecivile.it
            </a>
            .
          </p>
          <p>
            La ricezione dei bollettini emessi dal CFD determina l’attivazione
            delle rispettive fasi così come riportati nelle Tabelle seguenti.
            L’avvio e il mantenimento dei contatti con le strutture operative
            operanti sul territorio e gli enti territoriali e locali è garantita
            dal Sindaco.
          </p>
          <p>
            Il rientro da ciascuna fase operativa ovvero il passaggio alla fase
            successiva viene disposto dal Sindaco sulla base delle comunicazioni
            del Centro Funzionale Decentrato o Centrale trasmesse dalla
            Prefettura-UTG, e/o dalla valutazione del presidio territoriale. Nel
            caso in cui un fenomeno non previsto, connesso anche ad un’altra
            tipologia di rischio, si verifichi in maniera improvvisa con
            coinvolgimento della popolazione, si attiva direttamente la fase di
            allarme con l’esecuzione della procedura di soccorso ed evacuazione.
          </p>
        </section>
        {/* Add other sections similarly */}
      </main>
    </div>
  );
};

export default PianoDiEmergenza;
