import React, { useState } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Aggiunto per controllare l'espansione della navbar

  // Aggiornata per gestire anche la chiusura della navbar
  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsExpanded(false); // Chiude la navbar quando un elemento viene cliccato
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm fixed-top"
      expanded={isExpanded} // Controllato dallo stato
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleDropdownItemClick}>
          <img src="/public/logo.jpeg" width="120" height="50" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="my-1">
              <Link
                to="/"
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="my-1">
              <Link
                to="/chi-siamo"
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                Chi siamo
              </Link>
            </Nav.Item>
            <Nav.Item className="my-1">
              <Link
                to="/dove-siamo"
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                Dove siamo
              </Link>
            </Nav.Item>
            <Nav.Item className="my-1">
              <Link
                to="/formazione"
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                Formazione
              </Link>
            </Nav.Item>
            <Dropdown
              show={isServicesDropdownOpen}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
              align="end"
            >
              <Dropdown.Toggle variant="transparent" className="nav-link my-1">
                Servizi
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="/servizi/soccorso"
                  onClick={handleDropdownItemClick}
                >
                  Soccorso
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/servizi/protezione-civile"
                  onClick={handleDropdownItemClick}
                >
                  Protezione Civile
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/servizi/servizio-civile"
                  onClick={handleDropdownItemClick}
                >
                  Servizio Civile
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/servizi/solidarietà"
                  onClick={handleDropdownItemClick}
                >
                  Solidarietà
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="justify-content-end">
            <Dropdown
              show={isDropdownOpen}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              align="end"
            >
              <Dropdown.Toggle
                variant="transparent"
                className="profile-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "orange",
                    width: "35px",
                    height: "35px",
                  }}
                >
                  <PersonCircle size={30} style={{ color: "blue" }} />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="/login"
                  onClick={handleDropdownItemClick}
                >
                  Login
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/sign-in"
                  onClick={handleDropdownItemClick}
                >
                  Sign In
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/profile"
                  onClick={handleDropdownItemClick}
                >
                  Profilo
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="privacy-policy"
                  onClick={handleDropdownItemClick}
                >
                  Privacy Policy
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
