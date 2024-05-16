import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <footer className="text-center py-4 mt-5 foot">
      <Container>
        <Row className="mb-4">
          <Col xs={12} sm={4}>
            <i className="bi bi-facebook me-3 icon"></i>
            <i className="bi bi-twitter me-3 icon"></i>
            <i className="bi bi-instagram me-3 icon"></i>
            <i className="bi bi-youtube icon"></i>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Chi siamo</li>
              <li>Dove siamo</li>
              <li>Formazione</li>
            </ul>
          </Col>
          <Col xs={12} sm={4}>
            <ul className="list-unstyled">
              <li>Privacy</li>
              <li>Telefono: 123456789</li>
              <li>Email: gioelefriggia@hotmail.com</li>
            </ul>
          </Col>
          <Col xs={12} sm={4}>
            <ul className="list-unstyled">
              <li>
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="social-icon me-3"
                  width="24"
                  height="24"
                />
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="social-icon me-3"
                  width="24"
                  height="24"
                />
                <img
                  src="/whatsapp.png"
                  alt="Whatsapp"
                  className="social-icon me-3"
                  width="24"
                  height="24"
                />
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col xs={12}>
            <p className="mb-2">Sassari Soccorso</p>
            <p>&copy; Gioele Friggia</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;
