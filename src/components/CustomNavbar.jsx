import React, { useState } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const CustomNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEmergenzaDropdownOpen, setIsEmergenzaDropdownOpen] = useState(false);
  const [isProtezioneCivileDropdownOpen, setIsProtezioneCivileDropdownOpen] =
    useState(false);
  const [isChecklistDropdownOpen, setIsChecklistDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { user } = useSelector((state) => state.auth || { user: null });

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
    setIsEmergenzaDropdownOpen(false);
    setIsProtezioneCivileDropdownOpen(false);
    setIsChecklistDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsExpanded(false);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm fixed-top"
      expanded={isExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleDropdownItemClick}>
          <img src="/logo2.jpg" width="90" height="90" alt="Logo" />
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
            {user ? (
              <>
                <Dropdown
                  show={isEmergenzaDropdownOpen}
                  onMouseEnter={() => setIsEmergenzaDropdownOpen(true)}
                  onMouseLeave={() => setIsEmergenzaDropdownOpen(false)}
                  align="end"
                >
                  <Dropdown.Toggle
                    variant="transparent"
                    className="nav-link my-1"
                  >
                    Area Emergenza
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/emergenza/blsd"
                      onClick={handleDropdownItemClick}
                    >
                      BLSD
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/emergenza/pblsd"
                      onClick={handleDropdownItemClick}
                    >
                      PBLSD
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/emergenza/ptc"
                      onClick={handleDropdownItemClick}
                    >
                      PTC
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                  show={isProtezioneCivileDropdownOpen}
                  onMouseEnter={() => setIsProtezioneCivileDropdownOpen(true)}
                  onMouseLeave={() => setIsProtezioneCivileDropdownOpen(false)}
                  align="end"
                >
                  <Dropdown.Toggle
                    variant="transparent"
                    className="nav-link my-1"
                  >
                    Area Protezione Civile
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/protezione-civile/piano-di-emergenza"
                      onClick={handleDropdownItemClick}
                    >
                      Piano di Emergenza Comunale
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/protezione-civile/formazione"
                      onClick={handleDropdownItemClick}
                    >
                      Formazione
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/protezione-civile/attrezzature"
                      onClick={handleDropdownItemClick}
                    >
                      Attrezzature
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                  show={isChecklistDropdownOpen}
                  onMouseEnter={() => setIsChecklistDropdownOpen(true)}
                  onMouseLeave={() => setIsChecklistDropdownOpen(false)}
                  align="end"
                >
                  <Dropdown.Toggle
                    variant="transparent"
                    className="nav-link my-1"
                  >
                    Checklist
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/checklist/controllo"
                      onClick={handleDropdownItemClick}
                    >
                      Controllo
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/checklist/manutenzione"
                      onClick={handleDropdownItemClick}
                    >
                      Manutenzione
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
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
                  <Dropdown.Toggle
                    variant="transparent"
                    className="nav-link my-1"
                  >
                    Servizi
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/servizi/protezione-civile"
                      onClick={handleDropdownItemClick}
                    >
                      Protezione Civile
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/servizi/soccorso"
                      onClick={handleDropdownItemClick}
                    >
                      Soccorso
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
                      to="/servizi/solidarieta"
                      onClick={handleDropdownItemClick}
                    >
                      Solidarietà
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
          </Nav>
          <Nav className="justify-content-end">
            {!user ? (
              <>
                <Nav.Item className="my-1">
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={handleDropdownItemClick}
                  >
                    Accedi
                  </Link>
                </Nav.Item>
                <Nav.Item className="my-1">
                  <Link
                    to="/sign-in"
                    className="nav-link"
                    onClick={handleDropdownItemClick}
                  >
                    Registrati
                  </Link>
                </Nav.Item>
              </>
            ) : (
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
                    to="/profile"
                    onClick={handleDropdownItemClick}
                  >
                    Profilo
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="/privacy-policy"
                    onClick={handleDropdownItemClick}
                  >
                    Privacy Policy
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
