import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content back" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>x</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
