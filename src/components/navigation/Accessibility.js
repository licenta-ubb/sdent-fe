import React from 'react';
import { NavLink } from 'react-router-dom';
import './Accessibility.scss';

const Accessibility = () => {
  return (
    <ul className="navbar-accessibility-container">
      <li className="navbar-accessibility-item">
        <NavLink to="/services" className="navbar-accessibility-link">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default Accessibility;
