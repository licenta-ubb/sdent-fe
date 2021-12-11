import React from 'react';
import './Navigation.scss';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import BurgerMenu from './BurgerMenu';
const Navigation = () => {
  return (
    <div className="navigation-container">
      <Logo />
      <BurgerMenu />
      <NavigationLinks />
    </div>
  );
};

export default Navigation;
