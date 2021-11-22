import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationLinks.scss';
const NavigationLinks = () => {
  return (
    <ul className="navbar-informations-container">
      <li className="navbar-informations-item">
        <NavLink to="/services" className="navbar-informations-link">
          Services
        </NavLink>
      </li>
      <li className="navbar-informations-item">
        <NavLink to="/gallery" className="navbar-informations-link">
          Gallery
        </NavLink>
      </li>
      <li className="navbar-informations-item">
        <NavLink to="/about" className="navbar-informations-link">
          About
        </NavLink>
      </li>
      <li className="navbar-informations-item">
        <NavLink to="/contact" className="navbar-informations-link">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;
