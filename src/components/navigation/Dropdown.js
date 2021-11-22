import { NavLink } from 'react-router-dom';
import './Dropdown.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

function Dropdown({ isOpen, setOpen }) {
  const handleClick = (e) => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Modal className="modal-navigation" open={isOpen} onClose={handleClick}>
        <Box className="modal-box">
          <div className="modal-menu">
            <li onClick={handleClick} className="modal-item">
              <NavLink to="/services" className="modal-link">
                Services
              </NavLink>
            </li>
            <li onClick={handleClick} className="modal-item">
              <NavLink to="/gallery" className="modal-link">
                Gallery
              </NavLink>
            </li>
            <li onClick={handleClick} className="modal-item">
              <NavLink to="/about" className="modal-link">
                About
              </NavLink>
            </li>
            <li onClick={handleClick} className="modal-item">
              <NavLink to="/contact" className="modal-link">
                Contact
              </NavLink>
            </li>
            <li onClick={handleClick} className="modal-item">
              <NavLink to="/login" className="modal-link">
                Log In
              </NavLink>
            </li>
          </div>
        </Box>
      </Modal>
      {/* <ul className="dropdown-menu">
        <li onClick={handleClick} className="dropdown-item">
          <NavLink to="/services" className="dropdown-link">
            Services
          </NavLink>
        </li>
        <li onClick={handleClick} className="dropdown-item">
          <NavLink to="/gallery" className="dropdown-link">
            Gallery
          </NavLink>
        </li>
        <li onClick={handleClick} className="dropdown-item">
          <NavLink to="/about" className="dropdown-link">
            About
          </NavLink>
        </li>
        <li onClick={handleClick} className="dropdown-item">
          <NavLink to="/contact" className="dropdown-link">
            Contact
          </NavLink>
        </li>
        <li onClick={handleClick} className="dropdown-item">
          <NavLink to="/login" className="dropdown-link">
            Log In
          </NavLink>
        </li>
      </ul> */}
    </>
  );
}

export default Dropdown;
