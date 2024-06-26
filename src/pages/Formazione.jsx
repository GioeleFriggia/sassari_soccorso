import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../components/css/FormazionePage.css";

const Formazione = () => {
  const colors = [
    "#AEC6CF",
    "#FDBCB4",
    "#E3F6C3",
    "#E6E6FA",
    "#F5F5DC",
    "#FED8B1",
    "#E0B0FF",
    "#AFEEEE",
    "#FFFACD",
    "#FFD1DC",
  ];

  const courses = {
    "Corsi Ambito Sanitario": [
      {
        title: "Corso di Primo Soccorso",
        description: "Impara i principi generali del primo soccorso.",
      },
      {
        title: "Corso sui Dispositivi di Protezione Individuali (DPI)",
        description: "Conosci l'importanza e l'uso corretto dei DPI.",
      },
      {
        title: "Corso sui Presidi Sanitari",
        description: "Scopri come utilizzare i vari presidi sanitari.",
      },
      {
        title: "Corso sul Vano Sanitario",
        description: "Apprendi l'organizzazione e l'uso del vano sanitario.",
      },
      {
        title: "Corso di Affiancamento",
        description: "Un periodo di valutazione e integrazione di sei mesi.",
      },
      {
        title: "Corso di guida sicura",
        description:
          "Impara a migliorare la propria sicurezza e qualità di guida.",
      },
    ],
    "Corsi di Protezione Civile": [
      {
        title: "ANTICENDIO BOSCHIVO",
        description:
          "Corso A.I.B impara le tecniche e la sicurezza per il lavoro di anticendio boschivo.",
      },
      {
        title: "OPERATIVITÀ SPECIALE",
        description:
          "Addetto logistica campi tendati; operatore di motosega; operatore motopompe; movimentazione terra; movimentazione mezzi speciali;",
      },
      {
        title: "SOCIO SANITARIO E VETERINARIO",
        description: "Operatore da campo; assistenza veterinaria;",
      },
      {
        title: "RADIO AMATORIALE",
        description: "Operatore radio PC, Operatore Radio avanzato.",
      },
    ],
  };

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div
      className="formazione-container"
      style={{ paddingTop: `${navbarHeight}px` }}
    >
      <h1 className="formazione-title" style={{ marginTop: "1rem" }}>
        Formazione
      </h1>
      <img className="d-block w-100" src="/formazione.webp" alt="Formazione" />
      <p className="mt-4 text-justify">
        Sassari Soccorso da sempre ha riposto particolare attenzione alla
        formazione dei suoi volontari i quali prima dell’inserimento effettivo,
        partecipano ad un corso full immersion per l’acquisizione dei principi
        generali del primo soccorso e la conoscenza dei DPI, dei presidi e del
        vano sanitario. A questa prima formazione segue un periodo di
        affiancamento di sei mesi atti alla valutazione e all’integrazione del
        nuovo socio soccorritore.
      </p>
      <hr className="mt-5" />
      <div ref={ref}>
        <AnimatePresence>
          {inView && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Object.entries(courses).map(([category, cards], idx) => (
                <React.Fragment key={idx}>
                  <h3>{category}:</h3>
                  <div
                    className={`formazione-card-row ${
                      category === "Corsi Ambito Sanitario"
                        ? "formazione-corsi-ambito-sanitario"
                        : "formazione-corsi-protezione-civile"
                    }`}
                  >
                    {cards.map((course, index) => (
                      <div className="formazione-col" key={index}>
                        <CustomCard
                          style={{
                            backgroundColor: colors[index % colors.length],
                          }}
                          title={course.title}
                          description={course.description}
                        />
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

const CustomCard = ({ style, title, description }) => {
  return (
    <Card style={style} className="h-100 formazione-custom-card">
      <Card.Body className="formazione-card-body">
        <Card.Title className="formazione-card-title">{title}</Card.Title>
        <Card.Text className="formazione-card-text">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Formazione;
