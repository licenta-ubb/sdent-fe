import { NavLink } from 'react-router-dom';
import './Dropdown.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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
              <NavLink to="/login" className="important">
                Log In
              </NavLink>
            </li>
            <li onClick={handleClick} className="modal-item">
              <NavLink to="/login" className="important">
                Book
              </NavLink>
            </li>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Dropdown;
