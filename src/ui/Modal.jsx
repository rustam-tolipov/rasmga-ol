import React, { useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(<Overlay>{children}</Overlay>, document.body);
};

export default Modal;

const Overlay = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">{children}</div>
  );
};
