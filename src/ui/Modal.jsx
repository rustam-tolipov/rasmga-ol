import React, { useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ openModal, onClose, children }) => {
  if (!openModal) return null;

  return createPortal(
    <Overlay onClose={onClose}>{children}</Overlay>,
    document.body,
  );
};

export default Modal;

const Overlay = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div
        className="h-full w-full bg-black bg-opacity-50"
        onClick={() => onClose(false)}
      ></div>
      <div className="z-20">{children}</div>
    </div>
  );
};
