import React, { useContext, useState } from "react";

import { createPortal } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";

import logo from "../../Images/hero.png";
import TheameContex from "../Theame/Theame";
import ModalEx from "./ModalEx";
import { MdDarkMode, MdLightMode } from "react-icons/md";
export default function PotalExample() {
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
    <>
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
        createPortal(<ModalEx message={modalContent} />, document.body)}
    </>
  );
}
