import React, { useState } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar2 = ({ isLoggedIn }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAreaSanitariaDropdownOpen, setIsAreaSanitariaDropdownOpen] =
    useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
    setIsAreaSanitariaDropdownOpen(false);
    setIsExpanded(false);
  };

  const toggleAreaSanitariaDropdown = () => {
    setIsAreaSanitariaDropdownOpen(!isAreaSanitariaDropdownOpen);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm fixed-top"
      expanded={isExpanded}
      style={{ padding: "1px 20px" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleDropdownItemClick}>
          <img src="/public/logo2.jpg" width="90" height="90" alt="Logo" />
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
            <Dropdown
              show={isAreaSanitariaDropdownOpen}
              onClick={toggleAreaSanitariaDropdown}
            >
              <Dropdown.Toggle variant="transparent" className="nav-link my-1">
                Area Sanitaria
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="/area-sanitaria/informazioni"
                  onClick={handleDropdownItemClick}
                >
                  Corso BLSD
                </Dropdown.Item>

                <Dropdown.Item
                  as={Link}
                  to="/area-sanitaria/corso-blsd"
                  onClick={handleDropdownItemClick}
                >
                  Corso PBLSD
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/area-sanitaria/corsopblsd"
                  onClick={handleDropdownItemClick}
                >
                  Corso PTC
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item className="my-1">
              <Link
                to="/protezione-civile"
                className="nav-link"
                onClick={handleDropdownItemClick}
              >
                Protezione Civile
              </Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            {isLoggedIn ? (
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

export default CustomNavbar2;
