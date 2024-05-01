import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header>
              <h2 className="text-center">Il tuo profilo</h2>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h4>Informazioni personali</h4>
                  <p>
                    Nome: <strong>John Doe</strong>
                  </p>
                  <p>
                    Email: <strong>john@example.com</strong>
                  </p>
                </Col>
                <Col md={6}>
                  <h4>Modifica profilo</h4>
                  <Form>
                    <Form.Group controlId="formName">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Inserisci il tuo nome"
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Inserisci la tua email"
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Inserisci la tua password"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" block>
                      Salva modifiche
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
