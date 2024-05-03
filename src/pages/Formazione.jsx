import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        description:
          "Operatore radio Protezione Civile, Operatore Radio avanzato.",
      },
    ],
  };

  const [ref, inView] = useInView({ threshold: 0.5 });
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (inView && !animationTriggered) {
        setAnimationTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView, animationTriggered]);

  return (
    <div className="mt-5">
      <h2 className="mt-4">FORMAZIONE</h2>
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
          {animationTriggered && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {Object.entries(courses).map(([category, cards], idx) => (
                <React.Fragment key={idx}>
                  <h3 className="mt-4">{category}:</h3>
                  <Row xs={1} md={2} lg={3} className="g-4">
                    {cards.map((course, index) => (
                      <Col key={index}>
                        <CustomCard
                          style={{
                            backgroundColor: colors[index % colors.length],
                          }}
                          title={course.title}
                          description={course.description}
                        />
                      </Col>
                    ))}
                  </Row>
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
    <Card style={style} className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Formazione;
