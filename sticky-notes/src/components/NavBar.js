import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <h1>Sticky notes</h1>
        <div className="logo">
          <img className="img-logo" src="assets/logo.jpg" />
        </div>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/note" className="nav-link">
            Note
          </Link>
        </nav>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
