import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-logo">Maktub</a>
          <ul className="navbar-menu">
            <li className="navbar-item"><a href="/">Home</a></li>
            <li className="navbar-item"><a href="#about">About</a></li>
            <li className="navbar-item"><a href="#services">Services</a></li>
            <li className="navbar-item"><a href="#portfolio">Portfolio</a></li>
            <li className="navbar-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
