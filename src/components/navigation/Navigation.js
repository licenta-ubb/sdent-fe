import React from 'react';
import './Navigation.scss';
import Logo from './Logo';
import Accessibility from './Accessibility';
import NavigationLinks from './NavigationLinks';
import BurgerMenu from './BurgerMenu';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Logo />
      <BurgerMenu />
      <NavigationLinks />
      <Accessibility />
    </div>
  );
};

export default Navigation;
