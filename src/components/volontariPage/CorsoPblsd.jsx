import React, { useState, useEffect } from "react";
import "../css/Pblsd.css";
import Confetti from "react-confetti";

const CorsoPBLSD = () => {
  const googleSlidesUrl =
    "https://docs.google.com/presentation/d/e/2PACX-1vQK_O6ED8IYjpMYboIcihrHnbVQq-TpTg2sXWtMbl7MvKnCefL4drD1biEZUIU6OA/embed?start=true&loop=false&delayms=60000";
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
  const [feedbackOption, setFeedbackOption] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
              title="Manuale BLSD"
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
                        Tua risposta: {question.selectedAnswer}
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

export default CorsoPBLSD;
