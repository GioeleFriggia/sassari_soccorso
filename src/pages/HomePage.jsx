import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import "../App.css";

const HomePage = () => {
  const cardsData = [
    {
      title: "Family Friendly Fest",
      description:
        "Anche quest'anno Sassari Soccorso è presente al Family Fest. L'evento dedicato alle famiglie e al loro benessere.",
      image: "/card1homepage.webp",
    },
    {
      title: "ModEx 2023",
      description:
        "Esercitazione di protezione civile Europea. Simulazione di un area terremotata nelle Marche.",
      image: "/card2homepahe.webp",
    },
    {
      title: "Wrc Rally Italia Sardegna 2023",
      description:
        "I nostri volontari vanno in pista... In prima linea pronti a dare una mano.",
      image: "/car3homepage.webp",
    },
  ];

  return (
    <div className="home-page-container">
      <h3 className="text-center fade-in-up ">
        <span className="blue-text">
          Solidarietà in azione: volontari al tuo fianco
        </span>
        <span className="orange-text mx-2"> in ogni momento di bisogno.</span>
      </h3>
      <div className="carousel-container">
        <Carousel interval={3000} wrap={true} className="fade-in mt-2">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/foto1carosel.webp"
              alt="First slide"
              onError={(e) => {
                console.error("Errore nel caricamento dell'immagine 1", e);
              }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/foto2carousel.webp"
              alt="Second slide"
              onError={(e) => {
                console.error("Errore nel caricamento dell'immagine 2", e);
              }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/foto3carousel.webp"
              alt="Third slide"
              onError={(e) => {
                console.error("Errore nel caricamento dell'immagine 3", e);
              }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Row className="mt-4 card-row">
        {cardsData.map((card, idx) => (
          <Col md={4} key={idx}>
            <Card className="uniform-card fade-in-up">
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title as="h4">{card.title}</Card.Title>
                <Card.Text as="p">{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
