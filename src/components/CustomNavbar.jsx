import React, { useState, useContext } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import { UserContext } from "../../src/context/userContext";
import { useSelector } from "react-redux";

const CustomNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { user } = useSelector((state) => state.auth || { user: null });

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
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
          </Nav>
          <Nav className="justify-content-end">
            {user ? (
              <>
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
              </>
            ) : (
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
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
