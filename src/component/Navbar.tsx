import React from 'react'

const Navbar = () => (
  <nav className="navbar">
    <a className="navbar-logo">SHAPES</a>
    <ul className="navbar-user">
      <li>
        Logout
         <i className="fa fa-sign-out" aria-hidden="true"></i>
      </li>
    </ul>
  </nav>
);

export default Navbar
