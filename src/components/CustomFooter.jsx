import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../src/components/css/CustomFooter.css";
const CustomFooter = () => {
  return (
    <footer className="custom-footer text-center py-4 mt-5">
      <Container>
        <Row className="custom-footer-row mb-4">
          <Col xs={12} sm={4}>
            <i className="bi bi-facebook me-3 custom-footer-icon"></i>
            <i className="bi bi-twitter me-3 custom-footer-icon"></i>
            <i className="bi bi-instagram me-3 custom-footer-icon"></i>
            <i className="bi bi-youtube custom-footer-icon"></i>
          </Col>
        </Row>
        <Row className="custom-footer-row">
          <Col xs={12} sm={4}>
            <ul className="custom-footer-list list-unstyled">
              <li>Home</li>
              <li>Chi siamo</li>
              <li>Dove siamo</li>
              <li>Formazione</li>
            </ul>
          </Col>
          <Col xs={12} sm={4}>
            <ul className="custom-footer-list list-unstyled">
              <li>Privacy</li>
              <li>Telefono: 123456789</li>
              <li>Email: gioelefriggia@hotmail.com</li>
            </ul>
          </Col>
          <Col xs={12} sm={4}>
            <ul className="custom-footer-list list-unstyled">
              <li>
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="custom-footer-social-icon me-3"
                  width="24"
                  height="24"
                />
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="custom-footer-social-icon me-3"
                  width="24"
                  height="24"
                />
                <img
                  src="/whatsapp.png"
                  alt="Whatsapp"
                  className="custom-footer-social-icon me-3"
                  width="24"
                  height="24"
                />
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="custom-footer-divider my-4" />
        <Row className="custom-footer-row">
          <Col xs={12}>
            <p className="custom-footer-text mb-2">Sassari Soccorso</p>
            <p className="custom-footer-text">&copy; Gioele Friggia</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;
