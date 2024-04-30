import React, { useState } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const handleNavbarToggle = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };

  const handleDropdownItemClick = (event) => {
    event.stopPropagation();
    setIsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/public/logo.jpeg" width="120" height="50" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" onToggle={handleNavbarToggle}>
          <Nav className="me-auto">
            <Nav.Item className="my-1">
              <Link
                to="/"
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                <div>Home</div>
              </Link>
            </Nav.Item>
            <Nav.Item className="my-1">
              <Link
                to="/chi-siamo"
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                <div>Chi siamo</div>
              </Link>
            </Nav.Item>
            <Nav.Item className="my-1">
              <Link
                to="/dove-siamo"
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                <div>Dove siamo</div>
              </Link>
            </Nav.Item>
            <Nav.Item className="my-1">
              <Link
                to="/formazione"
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                <div>Formazione</div>
              </Link>
            </Nav.Item>
            <Nav.Item className="my-2 ">
              <Dropdown
                align="end"
                show={isServicesDropdownOpen}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Dropdown.Toggle
                  variant="transparent"
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>Servizi</div>
                  <div style={{ marginLeft: "auto" }}>&nbsp;</div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    to="/soccorso"
                    onClick={handleDropdownItemClick}
                  >
                    Soccorso
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="/protezione-civile"
                    onClick={handleDropdownItemClick}
                  >
                    Protezione Civile
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="servizio-civile"
                    onClick={handleDropdownItemClick}
                  >
                    Servizio Civile
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="/solidarietà"
                    onClick={handleDropdownItemClick}
                  >
                    Solidarietà
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            <Dropdown
              align="end"
              show={isDropdownOpen}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Dropdown.Toggle
                variant="transparent"
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <PersonCircle size={24} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="/profile"
                  onClick={handleDropdownItemClick}
                >
                  Profilo
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="#settings"
                  onClick={handleDropdownItemClick}
                >
                  Impostazioni e privacy
                </Dropdown.Item>
                <Dropdown.Item href="#help" onClick={handleDropdownItemClick}>
                  Guida
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
