import React from 'react';
import './ModalDropdown';
const ModalDropdown = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="modal-background">
          <div className="modal-wrapper">
            <div className="modal-content">asd asd asd</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalDropdown;
