import React, { useState } from "react";
import "../css/RadioCommunication .css";

const RadioCommunication = () => {
  const [name, setName] = useState("");
  const [icaoName, setIcaoName] = useState("");

  const convertToICAO = (inputName) => {
    const icaoLetters = {
      A: "Alfa",
      B: "Bravo",
      C: "Charlie",
      D: "Delta",
      E: "Echo",
      F: "Foxtrot",
      G: "Golf",
      H: "Hotel",
      I: "India",
      J: "Juliett",
      K: "Kilo",
      L: "Lima",
      M: "Mike",
      N: "November",
      O: "Oscar",
      P: "Papa",
      Q: "Quebec",
      R: "Romeo",
      S: "Sierra",
      T: "Tango",
      U: "Uniform",
      V: "Victor",
      W: "Whiskey",
      X: "X-ray",
      Y: "Yankee",
      Z: "Zulu",
    };

    const upperCaseName = inputName.toUpperCase();
    let icaoName = "";
    for (let i = 0; i < upperCaseName.length; i++) {
      const letter = upperCaseName[i];
      if (icaoLetters.hasOwnProperty(letter)) {
        icaoName += icaoLetters[letter] + " ";
      }
    }
    setIcaoName(icaoName.trim());
  };

  return (
    <div className="radio-wrapper">
      <h1>Utilizzo degli Apparati Radio nei Contesti di Protezione Civile</h1>

      <h2>Tipi di Apparati Radio</h2>
      <p>
        <b>Radio portatili (walkie-talkie)</b>: Questi sono dispositivi a corto
        raggio, ideali per comunicazioni tra membri del team su brevi distanze.
      </p>
      <p>
        <b>Radio mobili</b>: Installate su veicoli, queste radio hanno una
        portata maggiore rispetto ai portatili e sono utilizzate per coordinare
        le operazioni sul campo.
      </p>
      <p>
        <b>Stazioni base</b>: Queste sono installate in centri di comando e
        controllo e servono come punto centrale di comunicazione per l'intera
        operazione.
      </p>

      <h2>Frequenze e Canali</h2>
      <p>
        <b>Frequenze VHF (Very High Frequency)</b>: Usate per comunicazioni a
        media distanza, ideali per aree rurali e spazi aperti.
      </p>
      <p>
        <b>Frequenze UHF (Ultra High Frequency)</b>: Usate per comunicazioni a
        corto raggio, ottimali per aree urbane e ambienti con ostacoli.
      </p>
      <p>
        <b>Canali dedicati</b>: Nella protezione civile, sono spesso assegnati
        canali specifici per evitare interferenze con altre comunicazioni.
      </p>

      <h2>Procedura Operativa</h2>
      <div>
        <b>Pianificazione delle comunicazioni</b>: Prima di ogni operazione, è
        essenziale pianificare come verranno gestite le comunicazioni, inclusa
        l'assegnazione dei canali e la distribuzione degli apparati radio.
      </div>
      <div>
        <b>Utilizzo corretto dei dispositivi</b>:
        <ul>
          <li>
            <b>Accensione e controllo</b>: Verificare che le radio siano cariche
            e funzionanti. Controllare la corretta impostazione del canale.
          </li>
          <li>
            <b>Identificazione</b>: Ogni comunicazione dovrebbe iniziare con
            l'identificazione del chiamante e del destinatario. Ad esempio:
            "Unità 1 a Unità 2, rispondete".
          </li>
          <li>
            <b>Messaggi chiari e concisi</b>: Utilizzare un linguaggio chiaro e
            breve per evitare fraintendimenti.
          </li>
          <li>
            <b>Rispetto delle pause</b>: Lasciare una breve pausa tra la
            trasmissione e la ricezione per evitare sovrapposizioni.
          </li>
        </ul>
      </div>
      <div>
        <b>Gestione delle emergenze</b>: In caso di emergenza, utilizzare frasi
        standard come "EMERGENZA" per indicare una situazione critica e
        richiedere attenzione immediata. Prioritizzare le comunicazioni urgenti
        rispetto a quelle di routine.
      </div>

      <h2>Addestramento e Manutenzione</h2>
      <p>
        <b>Addestramento regolare</b>: I volontari devono essere addestrati
        regolarmente sull'uso delle radio, incluse le procedure di emergenza e
        la manutenzione dei dispositivi.
      </p>
      <p>
        <b>Manutenzione delle apparecchiature</b>: Le radio devono essere
        controllate e mantenute regolarmente per garantire il loro corretto
        funzionamento durante le operazioni.
      </p>

      <h2>Importanza della Comunicazione Radio</h2>
      <p>Le comunicazioni radio sono essenziali per:</p>
      <ul>
        <li>
          <b>Coordinazione delle attività</b>: Permettono ai vari team di
          coordinarsi efficacemente durante le operazioni di soccorso.
        </li>
        <li>
          <b>Sicurezza</b>: Assicurano che tutte le unità siano aggiornate sulle
          condizioni e sui movimenti degli altri team, riducendo il rischio di
          incidenti.
        </li>
        <li>
          <b>Reattività</b>: Consentono una risposta rapida e coordinata in caso
          di emergenze o cambiamenti improvvisi nella situazione operativa.
        </li>
      </ul>

      <h2>Utilizzo Pratico dell'Alfabeto ICAO</h2>
      <p>L'alfabeto ICAO è utilizzato per:</p>
      <ul>
        <li>
          <b>Comunicare nomi</b>: Per evitare confusioni, ad esempio, "Marco"
          sarebbe "Mike Alfa Romeo Charlie Oscar".
        </li>
        <li>
          <b>Codici e coordinate</b>: Per confermare codici o coordinate
          precise, ad esempio, una frequenza radio potrebbe essere comunicata
          come "One Two Three Point Four Five" per "123.45".
        </li>
        <li>
          <b>Chiamate di emergenza</b>: Per rendere chiara una situazione
          critica senza possibilità di errore.
        </li>
      </ul>

      <h2>Esempio di Comunicazione con l'Alfabeto ICAO</h2>
      <p>
        <b>Chiamata</b>: "Unità 1 a Unità 2, rispondete, cambio."
      </p>
      <p>
        <b>Risposta</b>: "Unità 2 a Unità 1, ricevo, cambio."
      </p>
      <p>
        <b>Comunicazione di un codice</b>: "Il codice è Alpha Bravo Charlie,
        ripeto, Alpha Bravo Charlie."
      </p>

      <h2>Vantaggi dell'Alfabeto ICAO</h2>
      <p>
        <b>Chiarezza</b>: Evita malintesi causati da interferenze o accenti
        diversi.
      </p>
      <p>
        <b>Uniformità</b>: Standardizza le comunicazioni tra operatori di
        diverse nazionalità.
      </p>
      <p>
        <b>Efficienza</b>: Riduce il tempo necessario per chiarire messaggi,
        aumentando l'efficienza operativa.
      </p>

      <h2>Integrazione nell'Addestramento</h2>
      <p>Durante l'addestramento dei volontari, è importante includere:</p>
      <ul>
        <li>
          <b>Esercizi pratici</b>: Simulazioni di comunicazioni radio
          utilizzando l'alfabeto ICAO.
        </li>
        <li>
          <b>Test di competenza</b>: Verifiche per assicurarsi che tutti i
          membri del team siano in grado di utilizzare correttamente l'alfabeto
          ICAO.
        </li>
      </ul>

      <p>
        L'adozione dell'alfabeto ICAO nelle comunicazioni radio della protezione
        civile contribuisce significativamente a migliorare la precisione e
        l'efficacia delle operazioni di soccorso, garantendo che ogni messaggio
        sia compreso correttamente e senza ambiguità.
      </p>

      <h2>Esercizio Pratico con l'Alfabeto ICAO</h2>
      <div className="radio-input-container">
        <p>Inserisci un nome e convertilo in Alfabeto ICAO:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            convertToICAO(e.target.value);
          }}
          placeholder="Inserisci un nome"
          className="radio-input-field"
        />
      </div>
      {icaoName && (
        <div className="radio-result-container">
          <p className="radio-result-text">
            Il nome in Alfabeto ICAO è: <strong>{icaoName}</strong>
          </p>
        </div>
      )}

      <h2>Alfabeto ICAO</h2>
      <table className="radio-icao-table">
        <thead>
          <tr>
            <th>Lettera</th>
            <th>Codice ICAO</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["A", "Alfa"],
            ["B", "Bravo"],
            ["C", "Charlie"],
            ["D", "Delta"],
            ["E", "Echo"],
            ["F", "Foxtrot"],
            ["G", "Golf"],
            ["H", "Hotel"],
            ["I", "India"],
            ["J", "Juliett"],
            ["K", "Kilo"],
            ["L", "Lima"],
            ["M", "Mike"],
            ["N", "November"],
            ["O", "Oscar"],
            ["P", "Papa"],
            ["Q", "Quebec"],
            ["R", "Romeo"],
            ["S", "Sierra"],
            ["T", "Tango"],
            ["U", "Uniform"],
            ["V", "Victor"],
            ["W", "Whiskey"],
            ["X", "X-ray"],
            ["Y", "Yankee"],
            ["Z", "Zulu"],
          ].map(([letter, code]) => (
            <tr key={letter}>
              <td>{letter}</td>
              <td>{code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RadioCommunication;
