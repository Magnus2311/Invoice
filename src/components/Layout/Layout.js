import React, { useState, useContext } from "react";
import { useLocation } from "react-router";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserNavMenu from "../pages/auth/UserNavMenu";
import { Image } from "react-bootstrap";

const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    if (isExpanded) setIsExpanded(!isExpanded);
  };

  const handleOpenning = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        minWidth: "380px",
        position: "fixed",
        top: "0",
        width: "100%",
      }}
      expanded={isExpanded}
    >
      <Link className="navbar-brand" to="/" onClick={handleClick}>
        Invoice
      </Link>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ position: "fixed", left: "10rem", top: "0.5rem" }}
        onClick={handleOpenning}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/about" onClick={handleClick}>
            За нас
          </Link>
          <Link className="nav-link" to="/categories/all" onClick={handleClick}>
            Меню 1
          </Link>

          <NavDropdown title="Добавяне">
            <NavDropdown.Item className="nav-dropdown-item">
              <Link
                className="dropdown-item"
                to="/items/addItem"
                onClick={handleClick}
              >
                Стока
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-dropdown-item">
              <Link
                className="dropdown-item"
                to="/partners/addPartner"
                onClick={handleClick}
              >
                Партньор
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link className="nav-link" to="/items/all" onClick={handleClick}>
            Стоки
          </Link>
        </Nav>
      </Navbar.Collapse>
      <UserNavMenu />
    </Navbar>
  );
};

export default Layout;
