import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  InputGroup,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HouseDoorFill,
  PeopleFill,
  SuitcaseFill,
  BellFill,
  Search,
  Grid3x3GapFill,
  PersonCircle,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  const [mostraDropdown, setMostraDropdown] = useState(false);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img src="/logo.png" width="34" height="34" alt="Agri App" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/" className="nav-link">
                <HouseDoorFill size={20} />
                <div>Home</div>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#rete">
                <PeopleFill size={20} />
                <div>Rete</div>
              </Nav.Link>
            </Nav.Item>
            <Link to="/Lavoro" className="text-decoration-none">
              <Nav.Item>
                <Nav.Link href="#lavoro">
                  <SuitcaseFill size={20} />
                  <div>Lavoro</div>
                </Nav.Link>
              </Nav.Item>
            </Link>
            <Nav.Item>
              <Nav.Link href="#notifiche">
                <BellFill size={20} />
                <div>Notifiche</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#aziende">
                <Grid3x3GapFill size={20} />
                <div>Per le aziende</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            {/* <Form>
              <InputGroup>
                <input
                  type="search"
                  placeholder="Cerca"
                  aria-label="Cerca"
                  className="form-control border-0 bg-light"
                />
                <InputGroup.Text>
                  <Search size={20} />
                </InputGroup.Text>
              </InputGroup>
            </Form> */}
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="transparent"
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => setMostraDropdown(!mostraDropdown)}
              >
                <PersonCircle size={24} />
              </Dropdown.Toggle>
              <Dropdown.Menu show={mostraDropdown}>
                <Dropdown.Item href="/profile">Profilo</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#settings">
                  Impostazioni e privacy
                </Dropdown.Item>
                <Dropdown.Item href="#help">Guida</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
