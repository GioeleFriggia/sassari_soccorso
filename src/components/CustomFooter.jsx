import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={4} className="column">
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/chi-siamo">Chi Siamo</Link>
              </li>
              <li>
                <Link to="/dove-siamo">Dove Siamo</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="column">
            <ul className="list-unstyled">
              <li>
                <Link to="/formazione">Formazione</Link>
              </li>
              <li>
                <Link to="/servizi/soccorso">Soccorso</Link>
              </li>
              <li>
                <Link to="/servizi/protezione-civile">Protezione Civile</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="column">
            <p>Telefono: (39)3453041629 </p>
            <p>Email: gioelefriggia@hotmail.com</p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/share/JTiJRuE6eZ8VHWVx/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/gioeless?igsh=cTl5NGg0cXFyMTk5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://wa.me/3453041629"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gioele-friggia-654b40248/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/GioeleFriggia"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>Sassari Soccorso</p>
            <p>&copy; {currentYear} Gioele Friggia</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;
