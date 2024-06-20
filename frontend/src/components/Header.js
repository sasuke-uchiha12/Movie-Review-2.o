import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // Update the path accordingly

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" id="branding">
          <img src={logo} alt="Logo" className="logo" />
          <div className="logo-copy">
            <h1 className="site-title">Cinephile Club</h1>
            <small className="site-description">A Place to Find Great Movies</small>
          </div>
        </Link>
        <div className="main-navigation">
          <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
          <ul className="menu">
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/about">About</Link></li>
            <li className="menu-item"><Link to="/review">Movie reviews</Link></li>
            <li className="menu-item"><Link to="/joinus">Join us</Link></li>
            <li className="menu-item"><Link to="/contact">Contact</Link></li>
          </ul>
          <form action="#" className="search-form">
            <input type="text" placeholder="Search..." />
            <button><i className="fa fa-search"></i></button>
          </form>
        </div>
        <div className="mobile-navigation"></div>
      </div>
    </header>
  );
}

export default Header;
