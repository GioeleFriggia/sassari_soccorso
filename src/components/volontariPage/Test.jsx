import React, { useState, useEffect } from "react";
import "../css/Pblsd.css";
import Confetti from "react-confetti";

const Test = () => {
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
  const [feedbackOption, setFeedbackOption] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    setFeedbackOption(option);
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers((prev) => [
        ...prev,
        { ...questions[currentQuestionIndex], selectedAnswer: option },
      ]);
    }
    setTimeout(() => {
      setShowFeedback(false);
      setFeedbackOption(null);
      handleNextQuestion();
    }, 2000);
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
    setTitle("Test Apprendimento PTC");
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

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="pblsd-container">
      <h1>{title}</h1>
      {!showQuiz && !showResults && (
        <>
          <div className="pblsd-responsive-iframe-container">
            {isLoading && <div className="spinner"></div>}
            <iframe
              src={googleSlidesUrl}
              frameBorder="0"
              allowFullScreen
              mozAllowFullScreen
              webkitAllowFullScreen
              title="Manuale PTC"
              className="pblsd-responsive-iframe"
              onLoad={handleIframeLoad}
              style={{ display: isLoading ? "none" : "block" }}
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
                    feedbackOption === option
                      ? option === questions[currentQuestionIndex].answer
                        ? "pblsd-option-correct"
                        : "pblsd-option-incorrect"
                      : option === questions[currentQuestionIndex].answer &&
                        showFeedback
                      ? "pblsd-option-correct"
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
                        La tua risposta: {question.selectedAnswer}
                      </p>
                      <p className="pblsd-correct-answer">
                        Risposta corretta: {question.answer}
                      </p>
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

export default Test;
