import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBirthdayCake,
  faHome,
  faCity,
  faIdCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function ProfilePage() {
  return (
    <Container className="profile-page-container" style={{ marginTop: "5rem" }}>
      <Row>
        <Col xs={12} className="mx-auto">
          <Card className="shadow p-3">
            <Card.Body>
              <div className="text-center mb-3">
                <Image
                  src="/public/logo2.jpg"
                  className="img-fluid"
                  alt="logo"
                  style={{
                    maxWidth: "20%",
                    height: "auto",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <Card.Title
                className="text-center"
                style={{ fontSize: "1.5rem", marginBottom: "20px" }}
              >
                Informazioni Profilo
              </Card.Title>
              <Card.Text as="div">
                {[
                  { icon: faUser, label: "Nome", value: "John" },
                  { icon: faUser, label: "Cognome", value: "Doe" },
                  {
                    icon: faBirthdayCake,
                    label: "Data di Nascita",
                    value: "01/01/1990",
                  },
                  { icon: faHome, label: "Residenza", value: "New York" },
                  {
                    icon: faCity,
                    label: "Città di Residenza",
                    value: "New York City",
                  },
                  {
                    icon: faEnvelope,
                    label: "Email",
                    value: "john.doe@example.com",
                  },
                  {
                    icon: faIdCard,
                    label: "Numero di Tessera",
                    value: "123456789",
                  },
                ].map((item, index) => (
                  <div key={index} className="mb-3 d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      style={{ fontSize: "1rem", marginRight: "10px" }}
                    />
                    <span>
                      <strong>{item.label}:</strong> {item.value}
                    </span>
                  </div>
                ))}
              </Card.Text>
              <div className="text-center mt-3">
                <Button variant="primary" href="/volunteers">
                  Vai alla Pagina dei Volontari
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
