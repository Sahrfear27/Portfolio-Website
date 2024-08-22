import "./Footer.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

import { FaSquareInstagram } from "react-icons/fa6";
import { useContext } from "react";
import TheameContex from "../Theame/Theame";

type Props = {
  id: string;
};

export default function Footer(props: Props) {
  const { lightMode } = useContext(TheameContex);
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  const { id } = props;

  return (
    <footer
      id={id}
      className="footer"
      data-lightmode={lightMode ? "true" : "false"}
    >
      <Container fluid className="text-center text-white p-3">
        <div className="social-links d-flex justify-content-center mb-3">
          <a href="#" className="social-icon mx-2 ">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon mx-2 ">
            <FaSquareInstagram />
          </a>
          <a
            href="https://github.com/Sahrfear27/My-Projects"
            className="social-icon mx-2"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sahrfear-macarthy-9530a720a/"
            className="social-icon mx-2"
          >
            <FaLinkedin />
          </a>
        </div>
        <div>
          <Link to="hero" smooth={true} duration={500} style={linkStyle}>
            <IoIosArrowUp className="scroll-to-top-icon" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
