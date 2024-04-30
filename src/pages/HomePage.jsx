import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import "../App.css"; // Assicurati che il percorso del file CSS sia corretto

const HomePage = () => {
  return (
    <div>
      {/* Spazio vuoto sopra il carosello */}
      <div className="navbar-space"></div>
      <Carousel interval={3000} wrap={true}>
        <Carousel.Item className="mt-4 m-3">
          <img
            className="d-block w-100"
            src="/foto1carosel.webp"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/foto2carousel.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/foto3carousel.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <hr />
      <h3>
        <span class="blue-text">
          Solidarietà in azione: volontari al tuo fianco
        </span>
        <span class="orange-text"> in ogni momento di bisogno.</span>
      </h3>

      <Row className="mt-4 card-row">
        <Col md={4}>
          <Card className="uniform-card">
            <Card.Img variant="top" src="/card1homepage.webp" />
            <Card.Body>
              <Card.Title>Family Friendly Fest</Card.Title>
              <Card.Text>
                Anche quest'anno Sassari Soccorso è presente al Family Friendly
                Fest. L'evento dedicato alle famiglie e al loro benessere.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="uniform-card">
            <Card.Img variant="top" src="/card2homepahe.webp" />
            <Card.Body>
              <Card.Title>ModEx 2023</Card.Title>
              <Card.Text>
                Esercitazione di protezione civile Europea. Simulazione di
                un'area terremotata nelle Marche.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="uniform-card">
            <Card.Img variant="top" src="/car3homepage.webp" />
            <Card.Body>
              <Card.Title>Wrc Rally Italia Sardegna 2023</Card.Title>
              <Card.Text>
                I nostri volontari vanno in pista... In prima linea pronti a
                dare una mano.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
