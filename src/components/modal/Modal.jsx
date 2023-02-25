import React from 'react';
import { createPortal } from 'react-dom';

import './modal.css'; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    /* document.body.classList.remove('modal-open'); // Remueve la clase al cerrar */
    return null;
  }
  /* document.body.classList.add('modal-open'); // Agrega la clase al abrir */
  return createPortal(
    <div className="modal-background" onClick={onClose}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;