import React, { useState } from 'react';
import classNames from 'classnames';
import arrowPng from '../images/Line 1.png';
import userPng from '../images/user.png';
import cartPng from '../images/cart.png';
import menuPng from '../images/menu.png';
import closeMenuPng from '../images/close-memu.png';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // The isMenuOpen state is used to define a state of burger menu on Mobile Mobile Devices.
  // It could be closed (just logo and toggle) or open with page navigation
  // The state changes with a function handleMenuToggle onClick to menu toggle button (visible only on mobile)
  // ClassNames library with property IsMenuOpen is used to create additional class header-open. 
  // With a help of it with combination of other classes, the open mobile header was styled. 

  return (
    <header className={classNames('header', { 'header-open': isMenuOpen })}>
      <nav className='navbar'>
        <div className="navbar-mobile">
          <div className='logo-text'>
            Logo Here
          </div>
          <button 
            className='menu-toggle' 
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <img src={closeMenuPng} alt='Close Menu' className='menu-icon' />
            ) : (
              <img src={menuPng} alt='Open Menu' className='menu-icon' />
            )}
          </button>
        </div>
        <div className="nav-items">
          <div className="nav-items-links">
            <a href='/' className='nav-item'>
              Home
            </a>
            <div className='features'>
              <a href='/' className='nav-item'>
                Features
              </a>
              <a href='/' className='feature-link'>
                <img 
                  src={arrowPng} 
                  alt='arrow' 
                  className='features-image'
                />
              </a>
            </div>
            <a href='/' className='nav-item'>
              Blog
            </a>
            <a href='/' className='nav-item'>
              Shop
            </a>
            <a href='/' className='nav-item'>
              About
            </a>
            <a href='/' className='nav-item nav-item-active'>
              Contact
            </a>
          </div>
          <div className='nav-items-icons'>
            <a href='/' className='nav-item-icon'>
              <img 
                src={userPng} 
                alt='User Nav'
                className='nav-item-user' 
              />
            </a>
            <a href='/' className='nav-item-icon'>
              <img 
                src={cartPng} 
                alt='Cart Nav' 
                className='nav-item-cart'
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
};
