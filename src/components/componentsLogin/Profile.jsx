import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function ProfilePage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="offset-md-2">
          <Card>
            <Card.Body>
              <Card.Title>Informazioni Utente</Card.Title>
              <Card.Text>
                <strong>Nome:</strong> John Doe <br />
                <strong>Email:</strong> john.doe@example.com <br />
                <strong>Data di Nascita:</strong> 01/01/1990 <br />
                <strong>Residenza:</strong> New York <br />
                <strong>Città di Residenza:</strong> New York City <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
