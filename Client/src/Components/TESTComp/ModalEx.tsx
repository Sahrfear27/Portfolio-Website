import React from "react";

interface ModalWindowProps {
  message: string;
}

export default function ModalEx({ message }: ModalWindowProps) {
  return (
    <div className="modal-window">
      <p>{message}</p>
    </div>
  );
}
