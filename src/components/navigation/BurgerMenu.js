import React, { useState } from 'react';
import './BurgerMenu.scss';
import Hamburger from 'hamburger-react';
import Dropdown from './Dropdown';
const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="burger-menu">
      <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
      {isOpen && <Dropdown isOpen={isOpen} setOpen={setOpen} />}
    </div>
  );
};

export default BurgerMenu;
