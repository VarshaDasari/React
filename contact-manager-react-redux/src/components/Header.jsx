import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-light bg-danger">
      <Link className="navbar-brand" to="/">
        Contact Manager
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-link active" to="/login">
            Login
          </Link>
          <Link
            id="addContactLink"
            className="nav-link active"
            to="/addContact"
          >
            Add Contact
          </Link>
          <Link className="nav-link active" to="/aboutUs">
            About Us
          </Link>
          <Link className="nav-link active" to="/contactUs">
            Contact US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
