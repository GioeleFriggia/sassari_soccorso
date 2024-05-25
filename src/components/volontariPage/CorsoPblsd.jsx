import React, { useState, useEffect } from "react";
import "../css/Pblsd.css";
import Confetti from "react-confetti";

const CorsoPBLSD = () => {
  const googleSlidesUrl =
    "https://docs.google.com/presentation/d/e/2PACX-1vQK_O6ED8IYjpMYboIcihrHnbVQq-TpTg2sXWtMbl7MvKnCefL4drD1biEZUIU6OA/embed?start=false&loop=false&delayms=60000";
  const [showQuiz, setShowQuiz] = useState(false);
  const [questionTimer, setQuestionTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [title, setTitle] = useState(
    "Manuale Pediatric Basic Life Support and Defibrillation (PBLSD)"
  );
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      question: "Quale dei seguenti è obiettivo del BLS pediatrico?",
      options: [
        "Prevenire l’arresto cardiaco nel lattante e bambino",
        "Evitare l’ipossia cerebrale",
        "Effettuare una efficace rianimazione cardiopolmonare di base",
        "Chiamare correttamente il soccorso avanzato",
        "Tutte le precedenti",
      ],
      answer: "Tutte le precedenti",
    },
    {
      question: "L’arresto cardiaco in età pediatrica è:",
      options: [
        "Più frequentemente primitivo, conseguenza di un’aritmia o cardiopatia",
        "In genere secondario ad una patologia preesistente",
        "Improvviso, inaspettato",
        "Di solito conseguenza di un trauma",
        "Nessuna delle precedenti",
      ],
      answer: "In genere secondario ad una patologia preesistente",
    },
    {
      question:
        "Quali sono le azioni iniziali da compiere secondo la sequenza BLS pediatrica?",
      options: [
        "Verificare lo stato di coscienza, chiamare i soccorsi, aprire le vie aeree",
        "Verificare la Sicurezza, chiamare i soccorsi, posizionare il paziente",
        "Verificare la Sicurezza, Stimolare il bambino, gridare per chiedere Soccorso.",
        "Stimolare il bambino, aprire le vie Aeree, chiamare i Soccorsi",
        "Chiamare i Soccorsi, Stimolare il bambino, Aprire le vie aeree",
      ],
      answer:
        "Verificare la Sicurezza, Stimolare il bambino, gridare per chiedere Soccorso.",
    },
    {
      question:
        "Se un soccorritore è solo, dopo aver verificato lo stato di incoscienza di un lattante non cardiopatico ed aver gridato per chiamare soccorso senza successo, deve:",
      options: [
        "assistere il paziente per un minuto e poi attivare il soccorso avanzato",
        "allontanarsi per andare personalmente a chiamare aiuto",
        "non preoccuparsi più degli aiuti e continuare la sequenza BLS pediatrica",
        "eseguire cinque minuti di rianimazione e poi, se necessario, attivare il soccorso avanzato",
        "nessuna delle precedenti",
      ],
      answer:
        "assistere il paziente per un minuto e poi attivare il soccorso avanzato",
    },
    {
      question:
        "Come si mantiene la pervietà delle vie aeree in un lattante incosciente?",
      options: [
        "Iperestendendo il capo",
        "Mettendo un cuscino sotto le spalle",
        "Mantenendo il capo in posizione neutra",
        "Con una leggera iperestensione del capo",
        "Nessuna delle precedenti",
      ],
      answer: "Mantenendo il capo in posizione neutra",
    },
    // {
    //   question:
    //     "Qual è il punto di repere più indicato per valutare il polso centrale in un lattante di 2 mesi?",
    //   options: [
    //     "Arteria radiale",
    //     "Arteria brachiale",
    //     "Arteria pedidia",
    //     "Arteria carotide",
    //     "Arteria femorale",
    //   ],
    //   answer: "Arteria brachiale",
    // },
    // {
    //   question:
    //     "Il corretto rapporto tra compressioni toraciche e ventilazioni nella sequenza BLS pediatrica a 1 soccorritore è:",
    //   options: ["15:1", "10:2", "5:1", "30:2", "15:2"],
    //   answer: "15:2",
    // },
    // {
    //   question:
    //     "Qual è la modalità migliore di ventilazione di base senza presidi in un lattante di 2 mesi?",
    //   options: [
    //     "Bocca - bocca",
    //     "Bocca – naso/bocca",
    //     "Bocca -naso",
    //     "Bocca – bocca chiudendo il naso",
    //     "Nessuna delle precedenti",
    //   ],
    //   answer: "Bocca – naso/bocca",
    // },
    // {
    //   question:
    //     "Se durante le prime 2 insufflazioni di soccorso non si osserva l’espansione del torace occorre effettuare le seguenti azioni:",
    //   options: [
    //     "proseguire la sequenza e valutare la presenza di polso e segni di circolo",
    //     "iniziare le compressioni toraciche esterne",
    //     "riposizionare il capo prima delle successive ventilazioni",
    //     "iniziare le manovre di disostruzione delle vie aeree da corpo estraneo",
    //     "chiamare il soccorso avanzato",
    //   ],
    //   answer: "riposizionare il capo prima delle successive ventilazioni",
    // },
    // {
    //   question: "La posizione laterale di sicurezza deve essere utilizzata:",
    //   options: [
    //     "in un bambino incosciente che non respira, in assenza trauma",
    //     "in un bambino cosciente",
    //     "in un lattante incosciente che non respira",
    //     "in un lattante o bambino incosciente che respira, in assenza di trauma",
    //     "In un lattante o bambino incosciente",
    //   ],
    //   answer:
    //     "in un lattante o bambino incosciente che respira, in assenza di trauma",
    // },
    // {
    //   question:
    //     "Quali sono tra i seguenti i cosiddetti “segni vitali” da valutare nel lattante e bambino?",
    //   options: [
    //     "incoscienza, movimenti spontanei, respiro",
    //     "tosse, colorito, movimenti",
    //     "respiro, colorito, movimenti",
    //     "incoscienza, colorito, polso centrale",
    //     "movimenti, tosse, respiro",
    //   ],
    //   answer: "movimenti, tosse, respiro",
    // },
    // {
    //   question:
    //     "La frequenza delle compressioni toraciche nel lattante/bambino deve essere:",
    //   options: [
    //     "60 al minuto",
    //     "100 al minuto",
    //     "80 al minuto",
    //     "130 al minuto",
    //     "90 al minuto",
    //   ],
    //   answer: "100 al minuto",
    // },
    // {
    //   question:
    //     "La prima valutazione della presenza o assenza di circolazione nel bambino prevede che il soccorritore sanitario esegua:",
    //   options: [
    //     "controllo dei segni vitali e del polso brachiale",
    //     "analisi del ritmo con il defibrillatore semiautomatico",
    //     "esclusivo controllo del polso",
    //     "controllo dei segni vitali e del polso carotideo",
    //     "nessuna delle precedenti",
    //   ],
    //   answer: "controllo dei segni vitali e del polso carotideo",
    // },
    // {
    //   question:
    //     "Nel BLS pediatrico le compressioni toraciche esterne devono essere iniziate:",
    //   options: [
    //     "quando il paziente non presenta attività respiratoria",
    //     "quando il paziente non ha coscienza",
    //     "quando non sono presenti segni vitali e il polso centrale è dubbio o con FC < 60/min",
    //     "solo quando il polso centrale è assente",
    //     "nessuna delle precedenti",
    //   ],
    //   answer:
    //     "quando non sono presenti segni vitali e il polso centrale è dubbio o con FC < 60/min",
    // },
    // {
    //   question: "Il DAE deve essere utilizzato soprattutto:",
    //   options: [
    //     "quando il polso centrale è assente",
    //     "nel bambino con collasso improvviso",
    //     "nel lattante",
    //     "in ambiente ospedaliero",
    //     "prima delle manovre di RCP",
    //   ],
    //   answer: "nel bambino con collasso improvviso",
    // },
    // {
    //   question:
    //     "Quali tra le seguenti sono le manovre di disostruzione delle vie aeree indicate nel lattante cosciente?",
    //   options: [
    //     "Sollevare il lattante con i piedi in alto e dare colpi sulla schiena",
    //     "Colpi dorsali e compressioni addominali",
    //     "Manovra di Heimlich e colpi dorsali",
    //     "Compressioni toraciche e addominali",
    //     "Colpi dorsali e compressioni toraciche",
    //   ],
    //   answer: "Colpi dorsali e compressioni toraciche",
    // },
    // {
    //   question:
    //     "Quali sono le manovre da effettuare in sequenza in un bambino di 3 anni che ha inalato un corpo estraneo ed è diventato incosciente?",
    //   options: [
    //     "5 pacche dorsali, 5 compressioni toraciche, controllo in bocca, apertura vie aeree, ventilazione",
    //     "15 compressioni toraciche seguite da 2 ventilazioni",
    //     "apertura della vie aeree, 5 pacche dorsali, 5 compressioni toraciche, controllo in bocca, ventilazione",
    //     "apertura delle vie aeree, controllo in bocca, 5 ventilazioni, 15 compressioni toraciche alternate a 2 ventilazioni",
    //     "controllo del polso per 10 secondi, 15 compressioni toraciche seguite da 2 ventilazioni",
    //   ],
    //   answer:
    //     "apertura delle vie aeree, controllo in bocca, 5 ventilazioni, 15 compressioni toraciche alternate a 2 ventilazioni",
    // },
    // {
    //   question:
    //     "Dopo aver erogato una scarica su indicazione del DAE è necessario:",
    //   options: [
    //     "riavviare l’analisi del ritmo",
    //     "controllare la presenza di polso e segni di circolo",
    //     "erogare un'altra scarica",
    //     "riprendere immediatamente l’RCP",
    //     "attendere nuove indicazioni del DAE allontanando i presenti",
    //   ],
    //   answer: "riprendere immediatamente l’RCP",
    // },
    // {
    //   question:
    //     "Se un bambino inala un corpo estraneo ha rumore respiratorio e tossisce violentemente occorre:",
    //   options: [
    //     "eseguire la manovra di Heimlich",
    //     "cercare di rimuovere dalla bocca il corpo estraneo",
    //     "eseguire solo i colpi dorsali",
    //     "alternare pacche interscapolari e compressioni toraciche",
    //     "incoraggiare il bambino a tossire, sorvegliarlo e, se possibile, somministrare ossigeno",
    //   ],
    //   answer:
    //     "incoraggiare il bambino a tossire, sorvegliarlo e, se possibile, somministrare ossigeno",
    // },
    // {
    //   question:
    //     "Le tecniche disponibili per ottenere la disostruzione delle vie aeree nel BLS pediatrico hanno il seguente obiettivo:",
    //   options: [
    //     "provocare una tosse artificiale",
    //     "aumentare la pressione intratoracica",
    //     "rimuovere il corpo estraneo dalle vie aeree",
    //     "tutte le precedenti",
    //     "nessuna delle precedenti",
    //   ],
    //   answer: "tutte le precedenti",
    // },
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
          <div className="pblsd-results-2 ">
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
                <h3 className="pblsd-incorrect-questions-title ">
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
