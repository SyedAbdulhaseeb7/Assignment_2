import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    console.log("Menu state:", !isOpen); // Debugging line
  };

  return (
    <nav className="custom-navbar">
    <div className="custom-navbar-container">
      {/* Logo */}
      <div className="custom-logo-container">
        <div className="custom-logo-text">oneTake</div>
      </div>
  
      {/* Desktop Menu */}
      <ul className="custom-desktop-menu">
        <li>
          <Link href="/gameList" className="custom-menu-link">
            Movies
          </Link>
        </li>
        <li>
          <Link href="/" className="custom-menu-link">
            Games
          </Link>
        </li>
        <li>
          <Link href="/services" className="custom-menu-link">
            Service
          </Link>
        </li>
        <li>
          <Link href="/about" className="custom-menu-link">
            about
          </Link>
        </li>
      </ul>
  
      {/* Mobile Menu Button */}
      <button
        className="custom-mobile-menu-btn"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <XMarkIcon className="custom-mobile-icon transition duration-500" />
        ) : (
          <Bars3Icon className="custom-mobile-icon transition duration-500" />
        )}
      </button>
    </div>
  
    {/* Mobile Menu */}
    <div
      className={`custom-mobile-menu ${isOpen ? 'open' : ''}`}
    >
      <ul>
        <li>
          <Link href="/" className="custom-mobile-link">
            Games
          </Link>
        </li>
        <li>
          <Link href="/gameList" className="custom-mobile-link">
            Movies
          </Link>
        </li>
        <li>
          <Link href="/services" className="custom-mobile-link">
            Services
          </Link>
        </li>
        <li>
          <Link href="/about" className="custom-mobile-link">
            about
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
