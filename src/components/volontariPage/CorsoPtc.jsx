import React, { useState, useEffect } from "react";
import "../../App.css";
import Confetti from "react-confetti";

const CorsoPtc = () => {
  const googleSlidesUrl =
    "https://docs.google.com/presentation/d/e/2PACX-1vTBO5K1tw8KOFjSTCCOtbIrLKQmreVUXtGSIWjYzLEIhv31c2ohp7e44Y0ECn-wIeLinCUzRcR2eoIl/embed?start=false&loop=false&delayms=60000";
  const [showQuiz, setShowQuiz] = useState(false);
  const [questionTimer, setQuestionTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [title, setTitle] = useState("Manuale Prehospital Trauma Care (PTC)");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      question:
        "Qual è la prima cosa da fare appena giunti sul luogo di un incidente?",
      options: [
        "Fermare le emorragie importanti",
        "Valutare la scena e fare auto protezione",
        "Mettere l'ossigeno",
        "Immobilizzare il rachide cervicale e fare l'ABCDE primario",
        "Nessuna delle precedenti",
      ],
      answer: "Valutare la scena e fare auto protezione",
    },
    {
      question: "Nel soccorso ad un paziente colpito da una scarica elettrica:",
      options: [
        "Si deve verificare che la scena sia sicura",
        "Si può valutare immediatamente il paziente perché i guanti servono da isolante",
        "Si rianima il paziente con materiali che non conducono elettricità, cannule, pallone auto espansibile",
        "Non si somministra O2 per motivi di sicurezza",
        "Nessuna delle precedenti",
      ],
      answer: "Si deve verificare che la scena sia sicura",
    },
    {
      question: "Per politrauma si intende:",
      options: [
        "Trauma di più distretti corporei con moltiplicazione degli effetti negativi concomitanti",
        "Trauma cranico più la frattura di un arto",
        "Trauma toracico",
        "Frattura di entrambe le caviglie",
        "Nessuna delle precedenti",
      ],
      answer:
        "Trauma di più distretti corporei con moltiplicazione degli effetti negativi concomitanti",
    },
    {
      question:
        "In base al meccanismo di lesione, indicate quali pazienti si presume abbiano subito una lesione della colonna:",
      options: [
        "Un muratore caduto da un'impalcatura due piani sopra il terreno",
        "Una persona trovata a galleggiare a faccia in giù in una piscina",
        "Il passeggero sveglio di un'auto che ha urtato un albero e che presenta solo numerosi tagli ed ecchimosi sul volto prodotti dal parabrezza",
        "Tutte le precedenti risposte sono corrette",
        "Nessuna delle precedenti",
      ],
      answer: "Tutte le precedenti risposte sono corrette",
    },
    {
      question: "Lo scopo della valutazione primaria nel trauma:",
      options: [
        "Aprire le vie aeree e proteggere il rachide cervicale",
        "Identificare e trattare rapidamente le situazioni immediatamente pericolose per la sopravvivenza",
        "Rilevare i parametri relativi a coscienza respiro e circolo",
        "Immobilizzare correttamente la vittima",
        "Nessuna delle precedenti",
      ],
      answer:
        "Identificare e trattare rapidamente le situazioni immediatamente pericolose per la sopravvivenza",
    },
    {
      question:
        "Il punto “A” dell'ABCD primario nel paziente traumatizzato comprende:",
      options: [
        "Valutare attentamente l’ambiente",
        "Valutare la pervietà delle vie aeree mentre si mantiene immobilizzato il rachide cervicale",
        "Valutare solo se il paziente è agitato",
        "Rendere solo pervie le vie aeree, il rachide cervicale si tratta nel punto C",
        "Nessuna delle precedenti",
      ],
      answer:
        "Valutare la pervietà delle vie aeree mentre si mantiene immobilizzato il rachide cervicale",
    },
    {
      question:
        "Qual è lo scopo della valutazione secondaria nel paziente traumatizzato?",
      options: [
        "L'identificazione di problemi secondari per quanto riguarda la sopravvivenza del paziente.",
        "L'identificazione di segni e sintomi che possono contribuire alla scelta dell’ospedale adeguato da parte della COEU/SOREU",
        "La prevenzione del danno secondario",
        "La correzione delle complicanze del danno primario",
        "Nessuna delle precedenti",
      ],
      answer:
        "L'identificazione di segni e sintomi che possono contribuire alla scelta dell’ospedale adeguato da parte della COEU/SOREU",
    },
    {
      question: "Fare l'AVPU vuol dire valutare:",
      options: [
        "A= vie Aeree, V= Ventilazione, P= risposta al dolore (Pain), U= non risponde(Unresponsive)",
        "A= vie Aeree, V= Valutarela coscienza, P= Parlare al paziente, U= dare Uno stimolo",
        "A= cosciente, V= reagisce allo stimolo Verbale, P= reagisce al dolore, U= non reagisce",
        "A= Attento, V= Vocalizza, P= Parla, U= non risponde",
        "Nessuna delle precedenti",
      ],
      answer:
        "A= cosciente, V= reagisce allo stimolo Verbale, P= reagisce al dolore, U= non reagisce",
    },
    {
      question:
        "In caso di paziente incosciente con trauma cranico nella valutazione primaria è prioritario:",
      options: [
        "Garantire la pervietà delle vie aeree, mettere l'ossigeno",
        "Valutare il diametro delle pupille",
        "Mettere in posizione laterale di sicurezza (PLS)",
        "Tutte le precedenti",
        "Nessuna delle precedenti",
      ],
      answer: "Garantire la pervietà delle vie aeree, mettere l'ossigeno",
    },
    {
      question:
        "La valutazione neurologica primaria nel paziente traumatizzato si esegue:",
      options: [
        "Facendo alzare il paziente e vedendo come si muove",
        "Facendo camminare il paziente per valutarne l'equilibrio",
        "Facendo toccare il naso con la punta delle dita (indice-naso)",
        "Nessuna delle precedenti risposte è corretta",
        "Nessuna delle precedenti",
      ],
      answer: "Nessuna delle precedenti risposte è corretta",
    },
    {
      question:
        "Nel caso di persona vittima di evento traumatico con trauma cranico ed otorragia sinistra il comportamento più idoneo tra quelli elencato è:",
      options: [
        "Posizionarla supina con gli arti inferiori rialzati di 30 gradi per contrastare un eventuale ipotensione derivante dall’importante otorragia",
        "Posizionarla supina e ruotare il capo sul lato sinistro per facilitare la fuoriuscita di sangue dall’orecchio",
        "Posizionarla supina e immobilizzare il capo con un collare cervicale senza tentare di arrestare la fuoriuscita di sangue dal canale uditivo",
        "Posizionarla supina, immobilizzare il capo con un collare cervicale e inserire un tampone all’interno del canale uditivo per il controllo dell’emorragia",
        "Nessuna delle precedenti",
      ],
      answer:
        "Posizionarla supina e immobilizzare il capo con un collare cervicale senza tentare di arrestare la fuoriuscita di sangue dal canale uditivo",
    },
    {
      question:
        "In quale caso in un paziente che ha riportato un trauma cranico in seguito ad incidente d’auto non è indicata l’applicazione di collare cervicale?",
      options: [
        "Quando è cosciente e risponde perfettamente a tutte le domande",
        "Quando non lamenta dolore al collo",
        "Quando è cosciente, cammina e riferisce di star bene",
        "Nessuno dei precedenti",
        "Nessuna delle precedenti",
      ],
      answer: "Nessuno dei precedenti",
    },
    {
      question:
        "Quale delle seguenti affermazioni è vera circa la stabilizzazione manuale del rachide cervicale:",
      options: [
        "Non è necessaria se è stato messo un collare cervicale",
        "Può essere rimossa dopo che è stato messo un collare cervicale",
        "Può essere rimossa quando l’infortunato è supino sulla barella",
        "Deve essere mantenuta sino a quando il capo non è stato fissato a una tavola spinale o ad altro presidio d’immobilizzazione definitiva",
        "Nessuna delle precedenti",
      ],
      answer:
        "Deve essere mantenuta sino a quando il capo non è stato fissato a una tavola spinale o ad altro presidio d’immobilizzazione definitiva",
    },
    {
      question:
        "Nel caso di lesione alla colonna vertebrale in persona cosciente:",
      options: [
        "La valutazione evidenzia sempre un deficit neurologico di moto e/o di sensibilità agli arti",
        "La valutazione può non evidenziare alcun sintomo o segno a carico della colonna vertebrale",
        "In tutti i casi, l’infortunato riferisce almeno dolore alla schiena",
        "Se è cosciente non può avere una lesione della colonna",
        "Nessuna delle precedenti",
      ],
      answer:
        "La valutazione può non evidenziare alcun sintomo o segno a carico della colonna vertebrale",
    },
    {
      question:
        "Il modo migliore per ridurre i rischi di lesioni al rachide cervicale è:",
      options: [
        "Posizionare un collare rigido e mantenere manualmente il capo in posizione neutra",
        "Posizionare un collare morbido",
        "Iperestendere la testa per rendere pervie le vie aeree",
        "Lasciare il paziente come si trova",
        "Nessuna delle precedenti",
      ],
      answer:
        "Posizionare un collare rigido e mantenere manualmente il capo in posizione neutra",
    },
    {
      question: "Il collare cervicale può essere controindicato in caso di:",
      options: [
        "Paziente cosciente, senza deficit neurologici agli arti",
        "Difficoltà a ottenere la posizione neutra per dolore o contrattura muscolare",
        "Non ci sono controindicazioni",
        "Difficoltà respiratoria",
        "Nessuna delle precedenti",
      ],
      answer:
        "Difficoltà a ottenere la posizione neutra per dolore o contrattura muscolare",
    },
    {
      question:
        "È consigliato l’utilizzo del collare nel bambino di 10 anni traumatizzato?",
      options: [
        "No se muove correttamente i 4 arti e non lamenta dolori al collo",
        "Sì sempre",
        "Solo se incosciente e in caso di grave sospetto di lesione midollare",
        "No se si oppone piangendo",
        "Nessuna delle precedenti",
      ],
      answer: "Sì sempre",
    },
    {
      question: "Il casco integrale si toglie:",
      options: [
        "Solo se c'è un medico",
        "Solo se si ha in dotazione il collare cervicale",
        "Solo se si è già messo il collare cervicale",
        "Sempre, se è possibile",
        "Nessuna delle precedenti",
      ],
      answer: "Sempre, se è possibile",
    },
    {
      question:
        "In caso di paziente traumatizzato che indossa un casco di tipo integrale, il collare cervicale va posto:",
      options: [
        "Prima di togliere il casco",
        "Durante l’estrazione del casco",
        "Dopo l’estrazione del casco",
        "Dopo aver posizionato il paziente sulla tavola spinale",
        "Nessuna delle precedenti",
      ],
      answer: "Dopo l’estrazione del casco",
    },
    {
      question:
        "Nel caso di corpo estraneo (lama di coltello) conficcato nel torace il comportamento da tenere è:",
      options: [
        "Rimuoverlo rapidamente per evitare l’insufficienza respiratoria",
        "Rimuoverlo con le dovute precauzioni se il paziente lamenta dolore",
        "Non rimuoverlo e fissarlo adeguatamente",
        "Rimuoverlo rapidamente per facilitare l’espansione del parenchima polmonare e, quindi, l’ossigenazione",
        "Nessuna delle precedenti",
      ],
      answer: "Non rimuoverlo e fissarlo adeguatamente",
    },
    {
      question: "In una ferita soffi ante aperta del torace, si deve:",
      options: [
        "Fare una medicazione occlusiva",
        "Lasciare la ferita aperta",
        "Aspirare con aspiratore collegato a un sondino sterile",
        "Fare medicazione chiusa su tre lati",
        "Nessuna delle precedenti",
      ],
      answer: "Fare medicazione chiusa su tre lati",
    },
    {
      question: "Nel trauma toracico la valutazione del punto B comprende:",
      options: [
        "O.P.A.C.S",
        "Frequenza respiratoria ed eventuali rumori",
        "Rilevazione della saturazione",
        "Osservazione e rilevazione del respiro",
        "Nessuna delle precedenti",
      ],
      answer: "O.P.A.C.S",
    },
    {
      question:
        "Qual è la posizione più idonea da far assumere ad un infortunato non cosciente con sospetto trauma addominale durante il trasporto in ospedale con ambulanza?",
      options: [
        "Laterale di sicurezza",
        "Semiseduta",
        "Supina",
        "Posizione antalgica",
        "Nessuna delle precedenti",
      ],
      answer: "Supina",
    },
    {
      question:
        "Quali sono i segni e sintomi che possono essere presenti nel paziente con trauma addominale:",
      options: [
        "Presenza di ematomi, ferite, contusioni, abrasioni e dolore",
        "Dolore alla palpazione, contrattura, aumento del volume addominale",
        "Segni di shock",
        "Tutti i segni e sintomi descritti sopra possono essere presenti",
        "Nessuna delle precedenti",
      ],
      answer: "Tutti i segni e sintomi descritti sopra possono essere presenti",
    },
    {
      question:
        "Nel caso di ferita aperta all’addome con eviscerazione, il comportamento più opportuno è:",
      options: [
        "Non tentare di riposizionare i visceri e coprire con un telo sterile",
        "Tentare di riposizionare i visceri all’interno della cavità addominale e coprire con una medicazione sterile",
        "Comprimere l’addome in corrispondenza dei visceri per ridurre il sanguinamento",
        "Non far tossire il paziente",
        "Nessuna delle precedenti",
      ],
      answer:
        "Non tentare di riposizionare i visceri e coprire con un telo sterile",
    },
    {
      question:
        "Nel caso in cui non fosse apprezzabile il polso arterioso radiale in un soggetto pallido e agitato, vittima di trauma, si può pensare che:",
      options: [
        "La sua pressione arteriosa sistolica sia inferiore a 80mmHg",
        "Sia estremamente spaventato",
        "Sia da rianimare per evitare un completo arresto cardiaco",
        "Sia necessario eseguire la valutazione senza guanti",
        "Nessuna delle precedenti",
      ],
      answer: "La sua pressione arteriosa sistolica sia inferiore a 80mmHg",
    },
    {
      question:
        "Qual è la causa più frequente di shock in una persona vittima di trauma?",
      options: [
        "Un grande spavento",
        "Un trauma cranico",
        "Un’emorragia",
        "Una lesione al midollo spinale",
        "Nessuna delle precedenti",
      ],
      answer: "Un’emorragia",
    },
    {
      question:
        "In un paziente in stato di shock possono verificarsi i seguenti segni e sintomi:",
      options: [
        "Alterazione della coscienza",
        "Alterazione del respiro",
        "Alterazione dei segni di circolo",
        "Tutti i sintomi presenti nelle precedenti risposte",
        "Nessuna delle precedenti",
      ],
      answer: "Tutti i sintomi presenti nelle precedenti risposte",
    },
    {
      question:
        "Quale tra i segni elencati si manifesta più precocemente in caso di shock emorragico:",
      options: [
        "Tachicardia",
        "Ipotensione",
        "Tachipnea",
        "Nessuno dei precedenti",
        "Nessuna delle precedenti",
      ],
      answer: "Tachicardia",
    },
    {
      question:
        "In un paziente traumatizzato cosciente senza polso periferico si deve:",
      options: [
        "Effettuare subito un massaggio cardiaco",
        "Sospettare uno stato di shock e controllare il polso carotideo",
        "Mettere ossigeno a 2 lt/min",
        "Metterlo semiseduto e tranquillizzarlo",
        "Nessuna delle precedenti",
      ],
      answer: "Sospettare uno stato di shock e controllare il polso carotideo",
    },
  ];

  useEffect(() => {
    let interval = null;
    if (showQuiz && questionTimer > 0) {
      interval = setInterval(() => {
        setQuestionTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (questionTimer === 0) {
      handleNextQuestion();
    }
    return () => clearInterval(interval);
  }, [showQuiz, questionTimer]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers((prev) => [...prev, questions[currentQuestionIndex]]);
    }
    setTimeout(() => {
      setShowFeedback(false);
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setQuestionTimer(60);
      setSelectedOption("");
    } else {
      setShowQuiz(false);
      setShowResults(true);
    }
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setTitle("Test Apprendimento BLSD");
    setQuestionTimer(60);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setShowFeedback(false);
    setIncorrectAnswers([]);
    setShowResults(false);
    setSelectedAnswers({});
  };

  const getProgressColor = () => {
    if (questionTimer > 35) return "green";
    else if (questionTimer > 25) return "orange";
    else return "red";
  };

  const calculatePercentage = (score, total) => (score / total) * 100;

  const isPassed = calculatePercentage(score, questions.length) >= 55;

  return (
    <div className="pblsd-container">
      <h1>{title}</h1>
      {!showQuiz && !showResults && (
        <>
          <div className="pblsd-responsive-iframe-container">
            <iframe
              src={googleSlidesUrl}
              frameBorder="0"
              allowFullScreen
              mozAllowFullScreen
              webkitAllowFullScreen
              title="Manuale BLSD"
              className="pblsd-responsive-iframe"
            ></iframe>
          </div>
          <button className="pblsd-start-btn" onClick={startQuiz}>
            Inizia Quiz
          </button>
        </>
      )}
      {showQuiz && (
        <div className="pblsd-quiz-container">
          <div className="pblsd-progress-bar">
            <div
              className="pblsd-progress"
              style={{
                width: `${((60 - questionTimer) / 60) * 100}%`,
                backgroundColor: getProgressColor(),
              }}
            ></div>
          </div>
          <div className="pblsd-question">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <div className="pblsd-options">
              {questions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  className={`pblsd-option-btn ${
                    showFeedback
                      ? option === questions[currentQuestionIndex].answer
                        ? "pblsd-option-correct"
                        : option === selectedOption
                        ? "pblsd-option-incorrect"
                        : ""
                      : ""
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {showResults && (
        <div className="pblsd-results-container">
          <div className="pblsd-results">
            <h2>Risultati Finali</h2>
            <p>
              Il tuo punteggio è {score} su {questions.length}
            </p>
            <p>
              Percentuale:{" "}
              {calculatePercentage(score, questions.length).toFixed(2)}%
            </p>
            {isPassed ? (
              <>
                <p className="pblsd-pass-message">Hai superato il test!</p>
                <Confetti />
              </>
            ) : (
              <>
                <p className="pblsd-fail-message">Non hai superato il test.</p>
                <div className="sad-face">😢</div>
              </>
            )}
            {incorrectAnswers.length > 0 && (
              <>
                <h3 className="pblsd-incorrect-questions-title">
                  Domande sbagliate:
                </h3>
                <ul className="pblsd-incorrect-questions-list">
                  {incorrectAnswers.map((question, qIndex) => (
                    <li key={qIndex} className="pblsd-question-container">
                      <p className="pblsd-question-text">{question.question}</p>
                      <p className="pblsd-incorrect-answer">
                        {selectedAnswers[questions.indexOf(question)]}
                      </p>
                      <p className="pblsd-correct-answer">{question.answer}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <button className="pblsd-retry-btn" onClick={startQuiz}>
              Riprova Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CorsoPtc;
