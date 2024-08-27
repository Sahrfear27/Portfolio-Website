import { Navbar, Nav, Container } from "react-bootstrap";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext, useState } from "react";
import TheameContex from "../Theame/Theame";
import { createPortal } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// import logo from "../../Images/file.png";
import { Link } from "react-scroll";

import ModalWindow from "./Modal";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const { lightMode, setLightMode } = useContext(TheameContex);
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  const handleMouseEnter = (message: string) => {
    setModalContent(message);
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <Navbar
      expand="sm"
      className="page-container"
      fixed="top"
      data-lightmode={lightMode ? "true" : "false"}
    >
      <Container>
        <Navbar.Brand className="nav-brand"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Navigation links */}
            <div className="nav-link-wrapper">
              <Link to="hero" smooth={true} duration={500} style={linkStyle}>
                Home
              </Link>
            </div>
            <div className="nav-link-wrapper">
              <Link to="about" smooth={true} duration={500} style={linkStyle}>
                About
              </Link>
            </div>
            <div className="nav-link-wrapper">
              <Link to="service" smooth={true} duration={500} style={linkStyle}>
                Services
              </Link>
            </div>
            <div className="nav-link-wrapper">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                style={linkStyle}
              >
                Projects
              </Link>
            </div>
            <div className="nav-link-wrapper">
              <Link to="contact" smooth={true} duration={500} style={linkStyle}>
                Contact
              </Link>
            </div>
            <div
              className="nav-link-wrapper"
              onMouseEnter={() =>
                handleMouseEnter(lightMode ? "Turn Light off" : "Turn Light on")
              }
              onMouseLeave={handleMouseLeave}
              onClick={() => setLightMode(!lightMode)}
            >
              {lightMode ? <MdLightMode /> : <MdDarkMode />}
            </div>
            {showModal &&
              createPortal(
                <ModalWindow message={modalContent} />,
                document.body
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
