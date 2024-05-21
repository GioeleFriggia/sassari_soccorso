import React from "react";
import "../../App.css"; // Assicurati che il file CSS sia importato
import logo from "../../../public/logo-pt-comune.png"; // Importa il logo
import pianoPDF from "../../../public/Piano_comunale_PC_modello_intervento_28.05.2023.pdf"; // Importa il file PDF

const PianoEmComunale = () => {
  return (
    <div className="piano-di-emergenza">
      <header className="piano-header">
        <div className="header-content">
          <img src={logo} alt="Logo" className="logo-pt-comune" />
          <div className="download-button">
            <a href={pianoPDF} download="piano-protezione-civile.pdf">
              <button>Scarica il Piano</button>
            </a>
          </div>
          <h1>Piano di Protezione Civile Comunale</h1>
        </div>
        <p>
          Il piano di protezione civile comunale è un documento strategico
          fondamentale per la gestione delle emergenze a livello locale. Esso è
          redatto dalle autorità comunali con la collaborazione di enti e
          istituzioni preposti alla sicurezza e alla protezione civile, come i
          vigili del fuoco, le forze di polizia, le unità sanitarie locali e le
          associazioni di volontariato. Il piano si articola in diverse sezioni
          che, nel loro insieme, costituiscono una guida completa per la
          prevenzione, la preparazione, la risposta e il recupero in caso di
          eventi calamitosi. Vediamo in dettaglio le componenti principali:
        </p>
      </header>

      <div className="piano-content">
        <section>
          <h2>Analisi dei Rischi</h2>
          <p>
            L'analisi dei rischi è il punto di partenza per la redazione del
            piano. Consiste nell'identificazione e valutazione dei pericoli che
            possono minacciare il territorio comunale. Questi rischi possono
            essere naturali (terremoti, alluvioni, frane, incendi boschivi,
            ecc.) o antropici (incidenti industriali, inquinamenti, ecc.).
            L'analisi prevede la raccolta e l'elaborazione di dati storici,
            geologici, climatici e urbanistici per comprendere meglio la
            probabilità e l'impatto di tali eventi.
          </p>
        </section>

        <section>
          <h2>Mappatura delle Aree a Rischio</h2>
          <p>
            Una volta identificati i rischi, si procede alla mappatura delle
            aree a rischio. Questa fase consiste nel delineare le zone del
            territorio comunale maggiormente esposte a ciascun tipo di rischio.
            La mappatura è fondamentale per pianificare le azioni di prevenzione
            e per individuare le aree che potrebbero richiedere interventi di
            evacuazione o di particolare attenzione in caso di emergenza.
          </p>
        </section>

        <section>
          <h2>Risorse e Strutture</h2>
          <p>
            Il piano deve contenere un inventario dettagliato delle risorse e
            delle strutture disponibili per la gestione delle emergenze. Questo
            include mezzi di trasporto, attrezzature di soccorso, materiali di
            primo soccorso, personale addestrato, nonché strutture come centri
            di accoglienza, ospedali, scuole e altri edifici che possono essere
            utilizzati in caso di evacuazione. L'inventario deve essere
            aggiornato regolarmente per garantire che tutte le risorse siano
            pronte all'uso.
          </p>
        </section>

        <section>
          <h2>Piani di Emergenza</h2>
          <p>
            I piani di emergenza sono procedure operative specifiche per ciascun
            tipo di rischio identificato. Questi piani delineano le azioni da
            intraprendere prima, durante e dopo un evento calamitoso. Le
            procedure devono essere chiare e dettagliate, e devono includere le
            modalità di allerta della popolazione, i percorsi di evacuazione, i
            punti di raccolta, e le misure di soccorso e assistenza. Ogni piano
            di emergenza deve essere integrato con le risorse e le strutture
            mappate in precedenza.
          </p>
        </section>

        <section>
          <h2>Catena di Comando e Controllo</h2>
          <p>
            Una chiara definizione della catena di comando e controllo è
            essenziale per una gestione efficace delle emergenze. Il piano deve
            specificare i ruoli e le responsabilità delle diverse autorità e
            organizzazioni coinvolte. Questo include il sindaco, che è la
            massima autorità di protezione civile a livello comunale, i
            responsabili dei servizi tecnici, le forze dell'ordine, i vigili del
            fuoco, i servizi sanitari e le associazioni di volontariato. Una
            struttura di comando ben definita assicura che le operazioni siano
            coordinate e che le risorse siano utilizzate in modo efficiente.
          </p>
        </section>

        <section>
          <h2>Piani di Comunicazione</h2>
          <p>
            La comunicazione è un elemento cruciale in situazioni di emergenza.
            Il piano deve prevedere strategie e strumenti per informare
            tempestivamente la popolazione riguardo ai rischi, alle misure di
            prevenzione e alle azioni da intraprendere. Questo può includere
            l'uso di sirene, messaggi sui social media, app di allerta,
            comunicati stampa, volantini informativi e incontri pubblici. Una
            comunicazione efficace aiuta a ridurre il panico e a garantire una
            risposta ordinata della popolazione.
          </p>
        </section>

        <section>
          <h2>Formazione e Addestramento</h2>
          <p>
            La formazione e l'addestramento sono essenziali per garantire che il
            personale coinvolto nella protezione civile sia preparato ad
            affrontare le emergenze. Il piano deve prevedere programmi di
            formazione per i tecnici comunali, i volontari, le forze dell'ordine
            e tutti coloro che possono essere coinvolti nelle operazioni di
            soccorso. Inoltre, devono essere organizzate campagne di
            sensibilizzazione per la popolazione, per educarla sui rischi e
            sulle corrette procedure da seguire in caso di emergenza.
          </p>
        </section>

        <section>
          <h2>Esercitazioni</h2>
          <p>
            Le esercitazioni periodiche sono fondamentali per testare
            l'efficacia del piano e per migliorare la reattività delle strutture
            operative e della popolazione. Durante le esercitazioni si simulano
            scenari di emergenza reali per verificare la funzionalità delle
            procedure operative, la coordinazione tra le diverse autorità e la
            prontezza delle risorse. Le esercitazioni permettono di individuare
            eventuali criticità e di apportare le necessarie modifiche al piano.
          </p>
        </section>

        <section>
          <h2>Aggiornamenti e Revisioni</h2>
          <p>
            Il piano di protezione civile comunale non è un documento statico,
            ma deve essere costantemente aggiornato e rivisto per adeguarsi ai
            cambiamenti del territorio, alle nuove conoscenze sui rischi e alle
            esperienze acquisite durante le emergenze e le esercitazioni. Le
            revisioni periodiche assicurano che il piano rimanga efficace e che
            tutte le risorse e le procedure siano sempre pronte a entrare in
            azione.
          </p>
        </section>

        <p>
          In conclusione, il piano di protezione civile comunale è uno strumento
          indispensabile per la gestione delle emergenze a livello locale.
          Attraverso un'approfondita analisi dei rischi, una mappatura
          dettagliata delle aree a rischio, una pianificazione accurata delle
          risorse e delle procedure operative, una chiara definizione della
          catena di comando, una comunicazione efficace e una costante attività
          di formazione e addestramento, il piano mira a proteggere la vita e i
          beni della popolazione e a ridurre al minimo i danni in caso di eventi
          calamitosi.
        </p>
      </div>
    </div>
  );
};

export default PianoEmComunale;
