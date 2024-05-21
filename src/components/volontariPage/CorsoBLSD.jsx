import React, { useState, useEffect } from "react";
import "../../App.css";
import Confetti from "react-confetti";

const CorsoPBLSD = () => {
  const googleSlidesUrl =
    "https://docs.google.com/presentation/d/e/2PACX-1vRfgL16o_mHs3KXI_CJEJhXdOoVaZkUM33W0SS-38umOcmLcwTXRf79kcWf9h5pDw/embed?start=false&loop=false&delayms=60000";
  const [showQuiz, setShowQuiz] = useState(false);
  const [questionTimer, setQuestionTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [title, setTitle] = useState(
    "Manuale Basic Life Support and Defibrillation (BLSD)"
  );
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      question:
        "Le tecniche disponibili per ottenere la disostruzione delle vie aeree nel BLS pediatrico hanno il seguente obiettivo:",
      options: [
        "provocare una tosse artificiale",
        "aumentare la pressione intratoracica",
        "rimuovere il corpo estraneo dalle vie aeree",
        "tutte le precedenti",
        "nessuna delle precedenti",
      ],
      answer: "tutte le precedenti",
    },
    {
      question:
        "Qual è la sequenza corretta della catena di sopravvivenza per il BLS?",
      options: [
        "Riconoscimento precoce, Chiamata ai soccorsi, RCP precoce, Defibrillazione precoce",
        "RCP precoce, Chiamata ai soccorsi, Riconoscimento precoce, Defibrillazione precoce",
        "Defibrillazione precoce, RCP precoce, Chiamata ai soccorsi, Riconoscimento precoce",
        "Chiamata ai soccorsi, RCP precoce, Defibrillazione precoce, Riconoscimento precoce",
        "Nessuna delle precedenti",
      ],
      answer:
        "Riconoscimento precoce, Chiamata ai soccorsi, RCP precoce, Defibrillazione precoce",
    },
    {
      question:
        "Qual è il rapporto corretto tra compressioni e ventilazioni in un adulto durante il BLS?",
      options: ["15:1", "15:2", "30:1", "30:2", "Nessuna delle precedenti"],
      answer: "30:2",
    },
    {
      question:
        "Qual è la profondità corretta delle compressioni toraciche durante il BLS su un adulto?",
      options: [
        "Almeno 2 cm",
        "Circa 3 cm",
        "Almeno 5 cm",
        "Circa 6 cm",
        "Nessuna delle precedenti",
      ],
      answer: "Almeno 5 cm",
    },
    {
      question:
        "Qual è la frequenza corretta delle compressioni toraciche durante il BLS su un adulto?",
      options: [
        "60-80 compressioni per minuto",
        "80-100 compressioni per minuto",
        "100-120 compressioni per minuto",
        "120-140 compressioni per minuto",
        "Nessuna delle precedenti",
      ],
      answer: "100-120 compressioni per minuto",
    },
    {
      question:
        "Qual è la tecnica corretta per aprire le vie aeree di un paziente incosciente?",
      options: [
        "Iperestensione del collo",
        "Sollevamento del mento e inclinazione della testa",
        "Spinta della mandibola in avanti",
        "Sollevamento delle spalle",
        "Nessuna delle precedenti",
      ],
      answer: "Sollevamento del mento e inclinazione della testa",
    },
    {
      question:
        "In quale situazione è necessario iniziare immediatamente la RCP?",
      options: [
        "Paziente cosciente con dolore toracico",
        "Paziente incosciente che respira normalmente",
        "Paziente incosciente che non respira o respira male",
        "Paziente con trauma cranico",
        "Nessuna delle precedenti",
      ],
      answer: "Paziente incosciente che non respira o respira male",
    },
    {
      question:
        "Qual è il primo passo da compiere quando si trova un paziente incosciente?",
      options: [
        "Iniziare la RCP",
        "Chiamare i soccorsi",
        "Verificare la sicurezza della scena",
        "Controllare il polso",
        "Nessuna delle precedenti",
      ],
      answer: "Verificare la sicurezza della scena",
    },
    // {
    //   question:
    //     "Quando si deve usare il defibrillatore automatico esterno (DAE)?",
    //   options: [
    //     "Subito dopo il riconoscimento dell'arresto cardiaco",
    //     "Dopo 1 minuto di RCP",
    //     "Dopo aver chiamato i soccorsi",
    //     "Solo se il paziente è incosciente ma respira",
    //     "Nessuna delle precedenti",
    //   ],
    //   answer: "Subito dopo il riconoscimento dell'arresto cardiaco",
    // },
    // {
    //   question:
    //     "Qual è la posizione corretta per le mani durante le compressioni toraciche su un adulto?",
    //   options: [
    //     "Sulla parte superiore dello sterno",
    //     "Sulla parte inferiore dello sterno",
    //     "Al centro del torace, tra i capezzoli",
    //     "Su un lato del torace",
    //     "Nessuna delle precedenti",
    //   ],
    //   answer: "Al centro del torace, tra i capezzoli",
    // },
    // {
    //   question:
    //     "Qual è il rapporto corretto tra compressioni e ventilazioni durante la RCP a due soccorritori su un bambino?",
    //   options: ["15:1", "15:2", "30:1", "30:2", "Nessuna delle precedenti"],
    //   answer: "15:2",
    // },
    // {
    //   question:
    //     "Quale dispositivo è utilizzato per somministrare ventilazioni durante la RCP?",
    //   options: [
    //     "Maschera con pallone autoespandibile (AMBU)",
    //     "Tubo endotracheale",
    //     "Cannula nasale",
    //     "Ventilatore meccanico",
    //     "Nessuna delle precedenti",
    //   ],
    //   answer: "Maschera con pallone autoespandibile (AMBU)",
    // },
    //   {
    //     question: "Qual è la durata ideale di una ventilazione durante la RCP?",
    //     options: [
    //       "1 secondo",
    //       "2 secondi",
    //       "3 secondi",
    //       "4 secondi",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "1 secondo",
    //   },
    //   {
    //     question:
    //       "Quale dei seguenti è un segno di una ventilazione efficace durante la RCP?",
    //     options: [
    //       "Gonfiore dello stomaco",
    //       "Movimento del torace",
    //       "Respiro affannoso",
    //       "Sudorazione",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Movimento del torace",
    //   },
    //   {
    //     question:
    //       "Qual è il tasso di sopravvivenza se la RCP viene iniziata immediatamente dopo l'arresto cardiaco?",
    //     options: [
    //       "2-5%",
    //       "6-10%",
    //       "11-15%",
    //       "16-20%",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "6-10%",
    //   },
    //   {
    //     question:
    //       "Qual è la posizione corretta per un paziente incosciente che respira normalmente?",
    //     options: [
    //       "Posizione prona",
    //       "Posizione supina",
    //       "Posizione laterale di sicurezza",
    //       "Posizione seduta",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Posizione laterale di sicurezza",
    //   },
    //   {
    //     question: "Quando si dovrebbe interrompere la RCP?",
    //     options: [
    //       "Quando arriva il DAE",
    //       "Quando il paziente inizia a respirare normalmente",
    //       "Quando arrivano i soccorsi avanzati",
    //       "Quando il soccorritore è esausto",
    //       "Tutte le precedenti",
    //     ],
    //     answer: "Tutte le precedenti",
    //   },
    //   {
    //     question: "Qual è la prima cosa da fare quando si utilizza un DAE?",
    //     options: [
    //       "Applicare le placche",
    //       "Accendere il dispositivo",
    //       "Analizzare il ritmo",
    //       "Iniziare la RCP",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Accendere il dispositivo",
    //   },
    //   {
    //     question: "Qual è la funzione principale del DAE?",
    //     options: [
    //       "Stimolare il cuore",
    //       "Defibrillare il cuore",
    //       "Monitorare il cuore",
    //       "Registrare l'ECG",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Defibrillare il cuore",
    //   },
    //   {
    //     question:
    //       "Qual è la posizione corretta delle placche del DAE su un adulto?",
    //     options: [
    //       "Una sul torace destro e una sul torace sinistro",
    //       "Una sotto la clavicola destra e una sotto l'ascella sinistra",
    //       "Una sotto la clavicola sinistra e una sotto l'ascella destra",
    //       "Una sullo sterno e una sulla schiena",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Una sotto la clavicola destra e una sotto l'ascella sinistra",
    //   },
    //   {
    //     question: "Quando si deve verificare il polso durante la RCP?",
    //     options: [
    //       "Ogni 30 secondi",
    //       "Ogni 1 minuto",
    //       "Ogni 2 minuti",
    //       "Ogni 5 minuti",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Ogni 2 minuti",
    //   },
    //   {
    //     question:
    //       "Quale delle seguenti affermazioni è vera riguardo alla ventilazione durante la RCP?",
    //     options: [
    //       "È più importante delle compressioni toraciche",
    //       "Deve essere somministrata solo da soccorritori addestrati",
    //       "Non è necessaria se non si dispone di una barriera di protezione",
    //       "Deve essere somministrata dopo ogni 30 compressioni",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Deve essere somministrata solo da soccorritori addestrati",
    //   },
    //   {
    //     question: "Qual è il segno principale di un'arresto cardiaco improvviso?",
    //     options: [
    //       "Dolore toracico",
    //       "Mancanza di respiro",
    //       "Incoscienza e assenza di respiro",
    //       "Sudorazione",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Incoscienza e assenza di respiro",
    //   },
    //   {
    //     question: "Qual è l'obiettivo principale della RCP?",
    //     options: [
    //       "Ripristinare la respirazione normale",
    //       "Mantenere la circolazione del sangue e l'ossigenazione degli organi vitali",
    //       "Ridurre il dolore del paziente",
    //       "Curare la causa sottostante dell'arresto cardiaco",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer:
    //       "Mantenere la circolazione del sangue e l'ossigenazione degli organi vitali",
    //   },
    //   {
    //     question:
    //       "Qual è la corretta sequenza di azioni durante un arresto cardiaco secondo l'algoritmo CAB?",
    //     options: [
    //       "Circulation, Airway, Breathing",
    //       "Airway, Circulation, Breathing",
    //       "Breathing, Airway, Circulation",
    //       "Airway, Breathing, Circulation",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Circulation, Airway, Breathing",
    //   },
    //   {
    //     question:
    //       "Qual è il tempo massimo consigliato per l'interruzione delle compressioni toraciche per effettuare le ventilazioni?",
    //     options: [
    //       "5 secondi",
    //       "10 secondi",
    //       "15 secondi",
    //       "20 secondi",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "10 secondi",
    //   },
    //   {
    //     question:
    //       "Qual è il primo passo da compiere se si sospetta un'ostruzione delle vie aeree in un adulto cosciente?",
    //     options: [
    //       "Iniziare la RCP",
    //       "Chiamare i soccorsi",
    //       "Dare cinque colpi dorsali",
    //       "Eseguire la manovra di Heimlich",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Dare cinque colpi dorsali",
    //   },
    //   {
    //     question: "Quando si deve usare la manovra di Heimlich?",
    //     options: [
    //       "Quando il paziente è incosciente",
    //       "Quando il paziente è cosciente e non può parlare o respirare",
    //       "Quando il paziente ha dolore toracico",
    //       "Quando il paziente è in arresto cardiaco",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Quando il paziente è cosciente e non può parlare o respirare",
    //   },
    //   {
    //     question:
    //       "Quale delle seguenti è una controindicazione per l'uso della manovra di Heimlich?",
    //     options: [
    //       "Paziente in gravidanza",
    //       "Paziente obeso",
    //       "Paziente anziano",
    //       "Paziente con lesioni toraciche",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Paziente in gravidanza",
    //   },
    //   {
    //     question:
    //       "Qual è il segno principale di un'ostruzione completa delle vie aeree?",
    //     options: [
    //       "Tosse rumorosa",
    //       "Difficoltà a parlare",
    //       "Respiro affannoso",
    //       "Assenza di suono e incapacità di respirare",
    //       "Nessuna delle precedenti",
    //     ],
    //     answer: "Assenza di suono e incapacità di respirare",
    //   },
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

export default CorsoPBLSD;
