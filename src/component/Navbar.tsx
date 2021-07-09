import React from 'react'

const Navbar = () => (
  <nav className="navbar">
    <span className="navbar-logo">SHAPES</span>
    <ul className="navbar-user">
      <li>
        Logout
        <i className="fa fa-sign-out" aria-hidden="true"></i>
      </li>
    </ul>
  </nav>
);

export default Navbar
