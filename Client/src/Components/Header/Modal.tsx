import React from "react";
import "./Header.css";

interface ModalWindowProps {
  message: string;
}

export default function ModalWindow({ message }: ModalWindowProps) {
  return (
    <div className="modal-window">
      <p>{message}</p>
    </div>
  );
}
