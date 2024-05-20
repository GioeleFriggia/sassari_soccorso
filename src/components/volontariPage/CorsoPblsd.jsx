import React, { useState, useEffect } from "react";
import "../../App.css";

const CorsoPBLSD = () => {
  const googleSlidesUrl =
    "https://docs.google.com/presentation/d/e/2PACX-1vQK_O6ED8IYjpMYboIcihrHnbVQq-TpTg2sXWtMbl7MvKnCefL4drD1biEZUIU6OA/embed?start=false&loop=false&delayms=60000";
  const [showQuiz, setShowQuiz] = useState(false);
  const [questionTimer, setQuestionTimer] = useState(59); // 59 seconds for each question
  const [score, setScore] = useState(0); // Track the score
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index

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
    // (altre domande qui)
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
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setQuestionTimer(59); // Reset timer for next question
    } else {
      setShowQuiz(false);
      alert(`Quiz completed! Final score: ${score}`);
    }
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setQuestionTimer(59); // Reset the timer
    setScore(0); // Reset the score
    setCurrentQuestionIndex(0); // Reset the question index
  };

  const getProgressColor = () => {
    if (questionTimer > 39) {
      return "green";
    } else if (questionTimer > 19) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="pblsd-container">
      <h1>Manuale Basic Life Support and Defibrillation (PBLSD)</h1>
      <div className="pblsd-responsive-iframe-container">
        <iframe
          src={googleSlidesUrl}
          frameBorder="0"
          allowFullScreen
          mozAllowFullScreen
          webkitAllowFullScreen
          width="960"
          height="569"
          title="Manuale BLSD"
          className="pblsd-responsive-iframe"
        ></iframe>
      </div>
      <button className="pblsd-start-btn" onClick={startQuiz}>
        Inizia Quiz
      </button>
      {showQuiz && (
        <div className="pblsd-quiz-container">
          <h2 style={{ color: getProgressColor() }}>
            Tempo rimasto: {questionTimer} secondi
          </h2>
          <div className="pblsd-progress-bar-container">
            <div
              className="pblsd-progress-bar"
              style={{
                width: `${(questionTimer / 59) * 100}%`,
                backgroundColor: getProgressColor(),
              }}
            >
              <img
                src="../../../public/ambulance.png" // Assicurati che il percorso sia corretto
                className="pblsd-ambulance"
                alt="Ambulance"
              />
            </div>
          </div>
          <div className="pblsd-question-container">
            <p className="pblsd-question">
              {questions[currentQuestionIndex].question}
            </p>
            {questions[currentQuestionIndex].options.map((option, i) => (
              <button
                key={i}
                className="pblsd-option-btn"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="pblsd-score">Punteggio attuale: {score}</p>
        </div>
      )}
    </div>
  );
};

export default CorsoPBLSD;
