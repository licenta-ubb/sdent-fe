import React from 'react';
import './Logo.scss';
import fullsize_logo from '../../assets/hasd.png';
import { NavLink } from 'react-router-dom';
const Logo = () => {
  return (
    <div className="navigation-logo-container">
      <NavLink to="/">
        <img src={fullsize_logo} alt="logo" className="navigation-logo" />
      </NavLink>
    </div>
  );
};

export default Logo;
